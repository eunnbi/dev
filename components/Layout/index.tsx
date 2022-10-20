import styled from "styled-components";
import Header from "./Header";

const Layout = ({ children }: React.PropsWithChildren) => {
  return (
    <>
      <Header />
      <LayoutBox>{children}</LayoutBox>
    </>
  );
};

export default Layout;

const LayoutBox = styled.div`
  padding: 0 15px;
  width: 100%;
  max-width: 720px;
  margin: 0 auto;
`;
