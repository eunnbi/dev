"use client";

import React, { useEffect } from "react";
import { usePathname } from "next/navigation";
import styled from "styled-components";
import { useToggle } from "@/hooks/useToggle";
import Link from "next/link";
import { IoMenu } from "react-icons/io5";
import OnClickOutside from "../common/OnClickOutside";

export default function Header() {
  const pathname = usePathname();
  const [show, onToggle, onClose] = useToggle(false);
  useEffect(() => {
    onClose();
  }, [pathname]);
  return (
    <StyledHeader>
      <OnClickOutside trigger={onClose}>
        <Wrapper>
          <Div>
            <h1 className="header-logo">
              <Link href="/" passHref>
                eunnbi.dev
              </Link>
            </h1>
            <Button onClick={onToggle}>
              <IoMenu className="icon" />
            </Button>
          </Div>
          <Nav show={show}>
            <Link href="/about" className="header-link">
              About
            </Link>
            <Link href="/posts" className="header-link">
              Posts
            </Link>
          </Nav>
        </Wrapper>
      </OnClickOutside>
    </StyledHeader>
  );
}

const StyledHeader = styled.header`
  z-index: 10;
  height: 60px;
  color: ${({ theme }) => theme.color.textColor};
  background-color: ${({ theme }) => theme.color.bgColor};
`;

const Wrapper = styled.div`
  position: relative;
  z-index: 10;

  display: flex;
  justify-content: space-between;
  align-items: center;

  width: 100%;
  height: 100%;
  max-width: calc(720px + 15px);

  margin: 0 auto;
  padding: 0 15px;
  font-size: 1.3rem;
  font-weight: bold;
  @media ${({ theme }) => theme.device.mobile} {
    flex-direction: column;
  }
`;

const Div = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  .header-logo {
    font-size: inherit;
  }
`;

const Button = styled.button`
  display: none;
  align-items: center;
  justify-content: center;
  padding: 0;
  font-size: 2rem;
  .icon {
    color: ${({ theme }) => theme.color.textColor};
  }
  @media ${({ theme }) => theme.device.mobile} {
    display: flex;
  }
`;

const Nav = styled.nav<{ show: boolean }>`
  display: flex;
  align-items: center;
  gap: 1.5rem;
  color: ${({ theme }) => theme.color.textColor};
  background-color: ${({ theme }) => theme.color.bgColor};
  @media ${({ theme }) => theme.device.mobile} {
    position: absolute;
    top: 100%;
    left: 0;
    right: 0;
    display: ${({ show }) => (show ? "flex" : "none")};
    flex-direction: column;
    gap: 0;
    border-bottom: 1px solid lightgray;
    .header-link {
      display: block;
      width: 100%;
      padding: 1rem 0;
      text-align: center;
    }
  }
`;
