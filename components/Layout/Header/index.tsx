import React from "react";
import styled from "styled-components";
import Nav from "./Nav";
import HeaderCenter from "./HeaderCenter";
import { useToggle } from "../../../hooks/useToggle";

const Header = () => {
  const [show, onToggle] = useToggle(false);
  return (
    <StyledHeader>
      <Wrapper>
        <HeaderCenter onToggle={onToggle} />
        <Nav show={show} />
      </Wrapper>
    </StyledHeader>
  );
};

export default React.memo(Header);

const StyledHeader = styled.header`
  z-index: 10;
  height: 60px;
  color: ${({ theme }) => theme.color.textColor};
  background-color: ${({ theme }) => theme.color.bgColor};
`;

const Wrapper = styled.div`
  position: relative;
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
