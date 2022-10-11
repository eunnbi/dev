import styled from "styled-components";
import Header from "./Header";

interface LayoutProps {
  headerExist: boolean;
}

const Layout = ({
  children,
  headerExist,
}: React.PropsWithChildren<LayoutProps>) => {
  return (
    <Wrapper>
      {headerExist && <Header />}
      {children}
    </Wrapper>
  );
};

export default Layout;

const Wrapper = styled.div`
  padding: 0 15px;
`;
