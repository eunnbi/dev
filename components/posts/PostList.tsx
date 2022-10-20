import styled from "styled-components";
import PostItem from "./PostItem";

const PostList = ({ posts }: { posts: Post[] }) => {
  return (
    <List>
      {posts.map((post, index) => (
        <PostItem key={index} post={post} />
      ))}
    </List>
  );
};

export default PostList;

const List = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.2rem;
`;
