import styled from "styled-components";
import Header from "./Header";

const Layout = ({ children }: React.PropsWithChildren) => {
  return (
    <Wrapper>
      <Header />
      {children}
      {/*<NavToggleBtn showNav={toggle} setShowNav={onToggle} />*/}
    </Wrapper>
  );
};

export default Layout;

const Wrapper = styled.div`
  padding: 0 15px;
`;
