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
    <>
      {headerExist && <Header />}
      <Wrapper>{children}</Wrapper>
    </>
  );
};

export default Layout;

const Wrapper = styled.div`
  padding: 0 15px;
  width: 100%;
  max-width: 720px;
  margin: 0 auto;
`;
