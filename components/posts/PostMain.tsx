import styled from "styled-components";
import Markdown from "./Markdown";
import PostFooter from "./PostFooter";
import PostHeader from "./PostHeader";
import PostToc from "./PostToc";
import Utterances from "./Utterances";

const PostMain = () => {
  return (
    <Main>
      <PostHeader />
      <Markdown />
      <PostToc />
      <PostFooter />
      <Utterances />
    </Main>
  );
};

export default PostMain;

const Main = styled.main`
  margin: 30px 0;
  display: flex;
  flex-direction: column;
  gap: 60px;
`;
