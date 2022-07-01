import { KEYWORDS } from "../keywords";
import KeywordItem from "../KeywordItem";
import styled from "styled-components";

const List = styled.ul`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 1fr;
  align-items: center;
  justify-content: center;
  gap: 2rem;
  margin: 1rem 0;
  max-width: 800px;
`;
const KeywordList = () => {
  return (
    <List>
      {KEYWORDS.map((keyword) => (
        <KeywordItem
          key={keyword.id}
          title={keyword.title}
          contents={keyword.contents}
          icon={keyword.icon}
        />
      ))}
    </List>
  );
};

export default KeywordList;
