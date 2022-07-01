import React, { useRef } from "react";
import { Item, Content, Wrapper, Box } from "./KeywordItem.styles";
import { IoClose } from "react-icons/io5";
import { useContent } from "./useContent";

interface KeywordItemProps {
  title: string;
  contents: String[];
  icon: React.ReactNode;
}

const KeywordItem = ({ title, contents, icon }: KeywordItemProps) => {
  const ref = useRef<HTMLLIElement>(null);
  const { show, handleShowContent, handleCloseContent } = useContent(ref);
  return (
    <>
      <Item ref={ref} onClick={handleShowContent}>
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
