import styled from "styled-components";
import Markdown from "./Markdown";
import PostFooter from "./PostFooter";
import PostHeader from "./PostHeader";
import Utterances from "./Utterances";

const PostSection = () => {
  return (
    <Section>
      <PostHeader />
      <Markdown />
      <PostFooter />
      <Utterances />
    </Section>
  );
};

export default PostSection;

const Section = styled.section`
  margin: 30px 0;
  display: flex;
  flex-direction: column;
  gap: 60px;
`;
