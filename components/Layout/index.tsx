import SideNav from "./SideNav";
import NavToggleBtn from "./NavToggleBtn";
import styled from "styled-components";
import { useToggle } from "../../hooks/useToggle";

const StyledLayout = styled.div`
  display: flex;
  overflow-x: hidden;
  min-height: 100vh;
  @media screen and (max-width: 1020px) {
    background-color: white;
    display: block;
    border-radius: 0;
    width: 100%;
    min-height: 100vh;
  }
`;

const Layout = ({ children }: React.PropsWithChildren) => {
  const [toggle, onToggle, closeNav] = useToggle(false);
  return (
    <StyledLayout>
      <SideNav showNav={toggle} closeNav={closeNav} />
      {children}
      <NavToggleBtn showNav={toggle} setShowNav={onToggle} />
    </StyledLayout>
  );
};

export default Layout;
