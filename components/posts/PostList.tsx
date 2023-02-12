import styled from "styled-components";
import { useRef } from "react";
import Router, { useRouter } from "next/router";
import { convertDateFormat } from "@lib/date";
import { SCROLL_POS_KEY, setSessionStorage } from "@lib/sessionStorage";
import { PostsGetResponse } from "@lib/posts";
import { useInfiniteQuery } from "@tanstack/react-query";

const PostList = ({
  data,
  infiniteScroll
}: {
  data: PostsGetResponse;
  infiniteScroll?: boolean;
}) => {
  return infiniteScroll ? (
    <PostInfiniteList data={data} />
  ) : (
    <Wrapper>
      {data.posts.map(post => (
        <PostArticle key={post.id} {...post} />
      ))}
    </Wrapper>
  );
};

const PostInfiniteList = ({ data }: { data: PostsGetResponse }) => {
  const ref = useRef<HTMLDivElement | null>(null);
  const router = useRouter();
  const category = router.query.category as string | undefined;
  const {
    data: postsData,
    fetchNextPage,
    hasNextPage
  } = useInfiniteQuery<PostsGetResponse>(
    ["posts", category],
    async ({ pageParam = 0 }) => {
      const repsonse = await fetch(
        `/api/posts?page=${pageParam}&size=10${
          category ? `&category=${category}` : ""
        }`
      );
      const data = await repsonse.json();
      return data;
    },
    {
      getNextPageParam: lastPage =>
        lastPage.isLastPage ? undefined : lastPage.page + 1,
      initialData: {
        pageParams: [0],
        pages: [data]
      }
    }
  );
  return (
    <Wrapper>
      {postsData?.pages.map(({ posts }) =>
        posts.map(post => <PostArticle key={post.id} {...post} />)
      )}
      <button onClick={() => fetchNextPage()}>click</button>
      <div ref={ref}></div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.2rem;
  margin-top: 2rem;
`;
// ---------------------------------------------------

const PostArticle = ({ id, title, date, category, preview, emoji }: Post) => {
  const onClick = () => {
    Router.push(`/posts/${id}`);
    setSessionStorage(SCROLL_POS_KEY, window.scrollY);
  };
  return (
    <Article onClick={onClick}>
      <h1>
        {emoji}
        <span>{title}</span>
      </h1>
      <p>{preview}</p>
      <div className="bottom">
        <span>{category}</span>
        <span>{convertDateFormat(date)}</span>
      </div>
    </Article>
  );
};

const Article = styled.article`
  display: flex;
  flex-direction: column;
  cursor: pointer;
  padding: 1rem;
  border-radius: 6px;
  box-shadow: ${({ theme }) => theme.color.cardShadowStyle};
  h1 {
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    gap: 5px;
    font-weight: bold;
    margin-bottom: 7px;
    font-size: 1.4rem;
    line-height: 1.4;
  }
  &:hover h1 > span {
    text-decoration: underline;
  }
  p {
    margin-bottom: 10px;
    line-height: 1.3125rem;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
    font-size: 0.9rem;
  }
  .bottom {
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-size: 0.9rem;
    color: ${({ theme }) => theme.color.tabTextColor};
  }
`;

export default PostList;
