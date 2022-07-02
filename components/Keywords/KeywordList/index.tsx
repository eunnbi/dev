import { KEYWORDS } from "../keywords";
import KeywordItem from "../KeywordItem";
import styled from "styled-components";
import { useContext } from "react";

const List = styled.ul`
  display: flex;
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
          side={keyword.side}
        />
      ))}
    </List>
  );
};

export default KeywordList;
