import styled from "styled-components";
import Router from "next/router";
import { convertDateFormat } from "@/lib/date";
import { SCROLL_POS_KEY, setSessionStorage } from "@/lib/sessionStorage";
import type { PostsGetResponse } from "@/lib/posts";
import { useInfiniteQuery } from "@tanstack/react-query";
import InfiniteScrollArea from "@/components/common/InfiniteScrollArea";

const PostList = ({
  posts,
  category,
  infiniteScroll
}: {
  posts: Post[];
  category: string;
  infiniteScroll?: boolean;
}) => {
  return infiniteScroll ? (
    <PostInfiniteList allPostsData={posts} category={category} />
  ) : (
    <Wrapper>
      {posts.map(post => (
        <PostArticle key={post.id} {...post} />
      ))}
    </Wrapper>
  );
};

const PostInfiniteList = ({ allPostsData, category }: { allPostsData: Post[], category: string }) => {
  const SIZE = 10;
  const initialData =  {
    pageParams: [0],
    pages: [{
      posts: allPostsData.slice(0, SIZE),
      isLastPage: SIZE >= allPostsData.length,
      page: 0
    }]
  }
  const {
    data: postsData,
    fetchNextPage,
    hasNextPage
  } = useInfiniteQuery<PostsGetResponse>(
    ["posts", category],
    async ({ pageParam = 0 }) => {
      const startIndex = SIZE * pageParam;
      const lastIndex = SIZE + startIndex;
      return {
        posts: allPostsData.slice(startIndex, lastIndex),
        isLastPage: lastIndex >= allPostsData.length,
        page: pageParam
      };
    },
    {
      getNextPageParam: lastPage =>
        lastPage.isLastPage ? undefined : lastPage.page + 1,
      initialData
    }
  );
  return (
    <InfiniteScrollArea hasMore={hasNextPage} next={fetchNextPage}>
      <Wrapper>
        {postsData?.pages.map(({ posts }) =>
          posts.map(post => <PostArticle key={post.id} {...post} />)
        )}
      </Wrapper>
    </InfiniteScrollArea>
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
