import React from "react";
import styled from "styled-components";

interface HeadingProps {
  title: string;
}

const Heading = ({ title }: HeadingProps) => {
  return (
    <H2>
      <span>{title}</span>
    </H2>
  );
};

const H2 = styled.h2`
  display: flex;
  justify-content: center;
  align-items: center;
  span {
    padding-bottom: 5px;
    border-bottom: ${({ theme }) => `4px solid ${theme.color.textColor}`};
    font-size: 1.8rem;
  }
`;

export default React.memo(Heading);
