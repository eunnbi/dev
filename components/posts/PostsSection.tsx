import styled from "styled-components";
import { usePosts } from "@hooks/usePosts";
import PostArticle from "./PostArticle";

const PostsSection = () => {
  const posts = usePosts();
  return (
    <Section>
      {posts.map(post => (
        <PostArticle key={post.id} {...post} />
      ))}
    </Section>
  );
};

export default PostsSection;

const Section = styled.section`
  display: flex;
  flex-direction: column;
  gap: 1.2rem;
  margin-top: 2rem;
`;
