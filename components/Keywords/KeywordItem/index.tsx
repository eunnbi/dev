import React from "react";
import { Item, Content } from "./KeywordItem.styles";

interface KeywordItemProps {
  title: string;
  contents: String[];
  icon: React.ReactNode;
  position: string;
}

const KeywordItem = ({ title, contents, icon, position }: KeywordItemProps) => {
  return (
    <Item position={position}>
      <div>
        {icon}
        {title}
      </div>
      {contents.map((content, index) => (
        <Content key={index}>
          ✔️ <span></span> {content}
        </Content>
      ))}
    </Item>
  );
};

export default KeywordItem;
