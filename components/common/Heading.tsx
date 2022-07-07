import React from "react";
import styled from "styled-components";

interface StyledHeadingProps {
  level: number;
}
interface HeadingProps {
  level: number;
  children: React.ReactNode;
}

const StyledHeading = styled.div.attrs<StyledHeadingProps>(({ level }) => ({
  as: "h" + level,
}))<StyledHeadingProps>`
  font-weight: bold;
  font-size: ${({ level }) => `${4 - level}rem`};
  span {
    color: ${({ theme }) => theme.color.violet};
  }
`;

const Heading = ({ level, children }: HeadingProps) => {
  return <StyledHeading level={level}>{children}</StyledHeading>;
};

Heading.defaultProps = {
  level: 1,
};

export default Heading;
