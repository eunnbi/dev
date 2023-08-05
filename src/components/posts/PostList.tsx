import { useRouter } from "next/navigation";
import { convertDateFormat } from "@/lib/date";
import { SCROLL_POS_KEY, setSessionStorage } from "@/lib/sessionStorage";
import type { PostsGetResponse } from "@/lib/posts";
import { useInfiniteQuery } from "@tanstack/react-query";
import InfiniteScrollArea from "@/components/common/InfiniteScrollArea";
import styled from "styled-components";

export default function PostList({
  posts,
  category
}: {
  posts: Post[];
  category: string;
}) {
  const SIZE = 10;
  const initialData = {
    pageParams: [0],
    pages: [
      {
        posts: posts.slice(0, SIZE),
        isLastPage: SIZE >= posts.length,
        page: 0
      }
    ]
  };
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
        posts: posts.slice(startIndex, lastIndex),
        isLastPage: lastIndex >= posts.length,
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
          posts.map(post => <PostCard key={post.id} {...post} />)
        )}
      </Wrapper>
    </InfiniteScrollArea>
  );
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.2rem;
  margin-top: 2rem;
`;

function PostCard({ id, title, date, category, preview, emoji }: Post) {
  const router = useRouter();
  const onClick = () => {
    router.push(`/posts/${id}`);
    setSessionStorage(SCROLL_POS_KEY, window.scrollY);
  };
  return (
    <Article onClick={onClick}>
      <Title>
        {emoji}
        <span className="title-text">{title}</span>
      </Title>
      <Paragraph>{preview}</Paragraph>
      <BottomRow>
        <span className="category">{category}</span>
        <span>{convertDateFormat(date)}</span>
      </BottomRow>
    </Article>
  );
}

const Article = styled.article`
  display: flex;
  flex-direction: column;
  padding: 1rem;
  border-radius: 6px;
  box-shadow: ${({ theme }) => theme.color.cardShadowStyle};
  cursor: pointer;
  &:hover .title-text {
    text-decoration: underline;
  }
`;

const Title = styled.h1`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 5px;
  font-weight: bold;
  margin-bottom: 7px;
  font-size: 1.4rem;
  line-height: 1.4;
`;

const Paragraph = styled.p`
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
  margin-bottom: 10px;
  font-size: 0.9rem;
  line-height: 1.3125rem;
`;

const BottomRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 0.9rem;
  color: ${({ theme }) => theme.color.tabTextColor};
  .category {
    text-transform: uppercase;
  }
`;
