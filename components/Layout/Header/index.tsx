import React, { useEffect, useRef } from "react";
import { useRouter } from "next/router";
import styled from "styled-components";
import Nav from "./Nav";
import HeaderCenter from "./HeaderCenter";
import { useToggle } from "@hooks/common/useToggle";
import { useClickOutside } from "@hooks/common/useClickOutside";

const Header = () => {
  const router = useRouter();
  const ref = useRef<HTMLElement | null>(null);
  const [show, onToggle, onClose] = useToggle(false);
  useClickOutside(ref, onClose);
  useEffect(() => {
    onClose();
  }, [router.pathname]);
  return (
    <StyledHeader ref={ref}>
      <Wrapper>
        <HeaderCenter onToggle={onToggle} />
        <Nav show={show} />
      </Wrapper>
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
  @media screen and (max-width: 720px) {
    padding: 0 15px;
  }
  @media ${({ theme }) => theme.device.mobile} {
    flex-direction: column;
  }
`;

export default React.memo(Header);
