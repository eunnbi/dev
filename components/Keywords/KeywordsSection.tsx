import styled from "styled-components";
import KeywordList from "./KeywordList";

const Section = styled.section`
  h1 {
    font-size: 4.5rem;
  }
`;

const KeywordsSection = () => {
  return (
    <Section>
      <h1>Who is Eunnbi??</h1>
      <KeywordList />
    </Section>
  );
};

export default KeywordsSection;
