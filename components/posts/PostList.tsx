import styled from "styled-components";
import PostItem from "./PostItem";

const PostList = ({ posts }: { posts: Post[] }) => {
  return (
    <Wrapper>
      <List>
        {posts.map((post, index) => (
          <PostItem key={index} post={post} />
        ))}
      </List>
    </Wrapper>
  );
};

export default PostList;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 15px;
  & > p {
    align-self: flex-end;
    font-size: 1rem;
  }
`;

const List = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 15px;
`;
