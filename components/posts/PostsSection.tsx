import PostFilter from "./PostFilter";
import PostList from "./PostList";
import styled from "styled-components";
import { usePosts } from "./hooks/usePosts";
import Heading from "@components/common/Heading";

const PostsSection = () => {
  const posts = usePosts();
  return (
    <Section>
      <div>
        <Heading title="Posts" />
        <p>{posts.length} posts</p>
      </div>
      <div>
        <PostFilter />
        <PostList posts={posts} />
      </div>
    </Section>
  );
};

export default PostsSection;

const Section = styled.section`
  display: flex;
  flex-direction: column;
  margin: 30px 0;
  gap: 2.5rem;
  & > div:first-child {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 10px;
    p {
      font-weight: 500;
      font-size: 1.1rem;
    }
  }
`;
