import React, { useEffect } from "react";
import { useRouter } from "next/router";
import styled from "styled-components";
import { useToggle } from "@/hooks/useToggle";
import Link from "next/link";
import { IoMenu } from "react-icons/io5";
import OnClickOutside from "../common/OnClickOutside";

const Header = () => {
  const { pathname } = useRouter();
  const [show, onToggle, onClose] = useToggle(false);
  useEffect(() => {
    onClose();
  }, [pathname]);
  return (
    <StyledHeader>
      <OnClickOutside trigger={onClose}>
        <Wrapper>
          <Div>
            <h1>
              <Link href="/" passHref>
                eunnbi.dev
              </Link>
            </h1>
            <Button onClick={onToggle}>
              <IoMenu />
            </Button>
          </Div>
          <Nav show={show}>
            <Link href="/about">About</Link>
            <Link href="/posts">Posts</Link>
          </Nav>
        </Wrapper>
      </OnClickOutside>

    </StyledHeader>
  );
};

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
  width: 100%;
  height: 100%;
  align-items: center;
  max-width: 720px;
  margin: 0 auto;
  font-size: 1.3rem;
  font-weight: bold;
  justify-content: space-between;
  h1 {
    font-size: inherit;
  }
  @media screen and (max-width: 720px) {
    padding: 0 15px;
  }
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
`;

const Button = styled.button`
  display: none;
  font-size: 2rem;
  align-items: center;
  justify-content: center;
  padding: 0;
  svg {
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

export default React.memo(Header);
