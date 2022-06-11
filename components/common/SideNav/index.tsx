import Profile from "./Profile";
import NavLinks from "./NavLinks";
import ContactLinks from "./ContactLinks";
import styled from "styled-components";

const NavWrapper = styled.nav<{ showNav: boolean }>`
  background: url("images/background.jpeg") 0 0 no-repeat;
  background-size: cover;
  width: 350px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 65px 0 0 0;
  position: fixed;
  height: 100vh;
  @media screen and (max-width: 1020px) {
    top: 0;
    right: 0;
    bottom: 0;
    transform: ${({ showNav }) =>
      showNav ? "translateX(0%)" : "translateX(100%)"};
    transition: all 0.3s ease-in-out;
    z-index: 1;
  }
`;

interface SideNavProps {
  showNav: boolean;
  closeNav: () => void;
}

const SideNav = ({ showNav, closeNav }: SideNavProps) => {
  return (
    <NavWrapper showNav={showNav}>
      <Profile />
      <NavLinks closeNav={closeNav} />
      <ContactLinks />
    </NavWrapper>
  );
};

export default SideNav;
