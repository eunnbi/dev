import Link from "next/link";
import styled from "styled-components";
import NavToggleBtn from "./NavToggleBtn";
import { useToggle } from "../../../hooks/useToggle";

const Header = () => {
  const [show, onToggle] = useToggle(false);
  return (
    <StyledHeader>
      <Wrapper>
        <Center>
          <Link href="/">
            <a>eunnbi.dev</a>
          </Link>
          <NavToggleBtn onToggle={onToggle} />
        </Center>
        <Nav show={show}>
          <Link href="/about">
            <a>About</a>
          </Link>
          <Link href="/projects">
            <a>Projects</a>
          </Link>
          <Link href="/posts">
            <a>Posts</a>
          </Link>
        </Nav>
      </Wrapper>
    </StyledHeader>
  );
};

export default Header;

const StyledHeader = styled.header`
  position: fixed;
  top: 0;
  left: 15px;
  right: 15px;
  z-index: 10;
  height: 60px;
  color: ${({ theme }) => theme.color.textColor};
  background-color: ${({ theme }) => theme.color.bgColor};
  @media ${({ theme }) => theme.device.mobile} {
    left: 0;
    right: 0;
  }
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
  @media ${({ theme }) => theme.device.mobile} {
    flex-direction: column;
    padding: 0 15px;
  }
`;

const Center = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
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
    position: absolute;
    top: 100%;
    left: 0;
    right: 0;
    border-bottom: 1px solid lightgray;
    padding-bottom: 1.5rem;
  }
`;
