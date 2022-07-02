import React, { useRef } from "react";
import { Item, Content, Wrapper, Box } from "./KeywordItem.styles";
import { IoClose } from "react-icons/io5";
import { useContent } from "./useContent";

interface KeywordItemProps {
  title: string;
  contents: String[];
  icon: React.ReactNode;
  side: string;
}

const KeywordItem = ({ title, contents, icon, side }: KeywordItemProps) => {
  const ref = useRef<HTMLLIElement>(null);
  const { show, handleShowContent, handleCloseContent } = useContent(ref);
  return (
    <>
      <Item ref={ref} onClick={handleShowContent} side={side}>
        {icon}
        {title}
      </Item>
      <Wrapper show={show}>
        <Box>
          <IoClose onClick={handleCloseContent} />
          {contents.map((content, index) => (
            <Content key={index}>
              <span>✔️</span>
              <span>{content}</span>
            </Content>
          ))}
        </Box>
      </Wrapper>
    </>
  );
};

export default KeywordItem;
