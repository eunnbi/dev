import { KEYWORDS } from "../../../constants/keywords";
import KeywordItem from "../KeywordItem";
import styled from "styled-components";

interface Position {
  current: number;
  prev: number;
}

const KeywordList = ({ position }: { position: Position }) => {
  return (
    <List>
      {KEYWORDS.map((keyword, index) => (
        <KeywordItem
          key={keyword.id}
          keyword={keyword}
          position={
            index === position.current
              ? "current"
              : index === position.prev
              ? "prev"
              : "next"
          }
        />
      ))}
    </List>
  );
};

export default KeywordList;

const List = styled.ul`
  height: 320px;
  position: relative;
  overflow: hidden;
  width: 100%;
  max-width: 1000px;
`;
