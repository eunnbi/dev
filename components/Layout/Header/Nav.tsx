import styled from "styled-components";
import Link from "next/link";
import React from "react";

const Nav = ({ show }: { show: boolean }) => {
  return (
    <StyledNav show={show}>
      <Link href="/about">About</Link>
      <Link href="/projects">Projects</Link>
      <Link href="/posts">Posts</Link>
    </StyledNav>
  );
};

const StyledNav = styled.nav<{ show: boolean }>`
  display: flex;
  align-items: center;
  gap: 1.5rem;
  color: ${({ theme }) => theme.color.textColor};
  background-color: ${({ theme }) => theme.color.bgColor};
  @media ${({ theme }) => theme.device.mobile} {
    display: ${({ show }) => (show ? "flex" : "none")};
    flex-direction: column;
    gap: 0;
    position: absolute;
    top: 100%;
    left: 0;
    right: 0;
    border-bottom: 1px solid lightgray;
    a {
      display: block;
      width: 100%;
      text-align: center;
      padding: 1rem 0;
    }
  }
`;

export default React.memo(Nav);
