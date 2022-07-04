import { useEffect, useState } from "react";
import { KEYWORDS } from "../keywords";
import KeywordItem from "../KeywordItem";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import { ListWrapper, List } from "./KeywordList.styles";

const KeywordList = () => {
  const [data] = useState(KEYWORDS);
  const [position, setPosition] = useState({
    prev: data.length - 1,
    current: 0,
  });

  const movePrev = () => {
    const current = (position.current - 1 + data.length) % data.length;
    setPosition({
      prev: current === 0 ? data.length - 1 : current - 1,
      current,
    });
  };

  const moveNext = () => {
    const current = (position.current + 1) % data.length;
    setPosition({
      prev: current === 0 ? data.length - 1 : current - 1,
      current,
    });
  };

  useEffect(() => {
    let timeId = setInterval(() => moveNext(), 5000);
    return () => clearInterval(timeId);
  }, [position]);

  return (
    <ListWrapper>
      <List>
        {KEYWORDS.map((keyword, index) => (
          <KeywordItem
            key={keyword.id}
            title={keyword.title}
            contents={keyword.contents}
            icon={keyword.icon}
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
