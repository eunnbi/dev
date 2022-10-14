import styled from "styled-components";
import Markdown from "./Markdown";
import PostHeader from "./PostHeader";

const PostSection = () => {
  return (
    <Section>
      <PostHeader />
      <Markdown />
    </Section>
  );
};

export default PostSection;

const Section = styled.section`
  margin: 30px 0;
  display: flex;
  flex-direction: column;
  gap: 40px;
`;
