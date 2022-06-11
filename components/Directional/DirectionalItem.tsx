import React from "react";
import Heading from "../common/Heading";
import styled from "styled-components";

const StyledItem = styled.li`
  box-shadow: 1px 3px 10px 0 rgb(0, 0, 0, 0.2);
  padding: 1rem 1.5rem;
  border-radius: 10px;
  align-self: flex-start;
  h3 {
    margin-bottom: 20px;
    display: flex;
    align-items: center;
    .icon {
      margin: 3px 10px 0 0;
    }
  }
`;

const Content = styled.p`
  font-size: 18px;
  display: flex;
  & + & {
    margin-top: 1rem;
  }
  span:first-child {
    margin-right: 10px;
  }
`;

interface DirectionalItemProps {
  title: string;
  contents: String[];
  icon: React.ReactNode;
}

const DirectionalItem = ({ title, contents, icon }: DirectionalItemProps) => {
  return (
    <StyledItem>
      <Heading level={3}>
        {icon} {title}
      </Heading>
      <div>
        {contents.map((content, index) => (
          <Content key={index}>
            <span>✔️</span>
            <span>{content}</span>
          </Content>
        ))}
      </div>
    </StyledItem>
  );
};

export default DirectionalItem;
