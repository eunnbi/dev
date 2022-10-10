import Link from "next/link";
import styled from "styled-components";

const Header = () => {
  return (
    <StyledHeader>
      <Wrapper>
        <div>
          <Link href="/">
            <a>eunnbi.dev</a>
          </Link>
        </div>
        <Nav>
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
  background-color: #fff;
`;

const Wrapper = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  align-items: center;
  max-width: 720px;
  margin: 0 auto;
  font-size: 1.3rem;
  font-weight: bold;
  justify-content: space-between;
`;

const Nav = styled.nav`
  display: flex;
  align-items: center;
  gap: 1.5rem;
`;
