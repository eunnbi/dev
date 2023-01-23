import { usePosts } from "@hooks/usePosts";
import styled from "styled-components";

const PostCount = () => {
  const posts = usePosts();
  return <Text>{posts.length} posts</Text>;
};

const Text = styled.p`
  text-align: center;
  font-weight: 500;
  font-size: 1.1rem;
  margin: 10px 0 2rem;
`;

export default PostCount;
