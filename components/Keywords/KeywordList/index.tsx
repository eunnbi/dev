import { useState } from "react";
import { KEYWORDS } from "../keywords";
import KeywordItem from "../KeywordItem";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import { ListWrapper, List } from "./KeywordList.styles";
import { useSilder } from "../../../hooks/useSlider";

const KeywordList = () => {
  const [data] = useState(KEYWORDS);
  const { position, movePrev, moveNext } = useSilder(data.length);

  return (
    <ListWrapper>
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
      <div>
        <FiChevronLeft onClick={movePrev} />
        <FiChevronRight onClick={moveNext} />
      </div>
    </ListWrapper>
  );
};

export default KeywordList;
