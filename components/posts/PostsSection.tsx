import PostFilter from "./PostFilter";
import PostList from "./PostList";
import styled from "styled-components";
import { usePosts } from "@hooks/usePosts";

const PostsSection = () => {
  const posts = usePosts();
  return (
    <Section>
      <PostFilter />
      <PostList posts={posts} />
    </Section>
  );
};

export default PostsSection;

const Section = styled.section`
  display: flex;
  flex-direction: column;
  margin-top: 2.5rem;
  gap: 20px;
`;
