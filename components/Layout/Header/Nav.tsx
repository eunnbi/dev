import styled from "styled-components";
import Link from "next/link";
import React from "react";

const Nav = ({ show }: { show: boolean }) => {
  return (
    <StyledNav show={show}>
      <Link href="/about">
        <a>About</a>
      </Link>
      <Link href="/projects">
        <a>Projects</a>
      </Link>
      <Link href="/posts">
        <a>Posts</a>
      </Link>
    </StyledNav>
  );
};

export default React.memo(Nav);

const StyledNav = styled.nav<{ show: boolean }>`
  display: flex;
  align-items: center;
  gap: 1.5rem;
  color: ${({ theme }) => theme.color.textColor};
  background-color: ${({ theme }) => theme.color.bgColor};
  @media ${({ theme }) => theme.device.mobile} {
    display: ${({ show }) => (show ? "flex" : "none")};
    flex-direction: column;
    position: absolute;
    top: 100%;
    left: 0;
    right: 0;
    border-bottom: 1px solid lightgray;
    padding-bottom: 1.5rem;
  }
`;