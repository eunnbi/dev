import React from "react";
import { IKeyword } from "../../../constants/keywords";
import { Item, Content, Anchor } from "./KeywordItem.styles";

interface KeywordItemProps {
  keyword: IKeyword;
  position: string;
}

const KeywordItem = ({ keyword, position }: KeywordItemProps) => {
  const { icon, title, contents, references } = keyword;
  return (
    <Item position={position}>
      <h3>
        {icon}
        {title}
      </h3>
      <Content>
        {contents.map((content, index) => (
          <p key={index}>{content}</p>
        ))}
      </Content>
      {references.length !== 0 && (
        <Content>
          {references.map((reference, index) => (
            <Anchor
              key={index}
              href={reference.link}
              target="_blank"
              rel="noreferrer"
            >
              ✏️ {reference.name}
            </Anchor>
          ))}
        </Content>
      )}
    </Item>
  );
};

export default KeywordItem;
