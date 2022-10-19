import React from "react";
import styled from "styled-components";

interface HeadingProps {
  title: string;
}

const Heading = ({ title }: HeadingProps) => {
  return (
    <Wrapper>
      <h2>{title}</h2>
    </Wrapper>
  );
};

export default React.memo(Heading);

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  h2 {
    padding-bottom: 5px;
    border-bottom: ${({ theme }) => `4px solid ${theme.color.textColor}`};
    font-size: 1.8rem;
  }
`;
