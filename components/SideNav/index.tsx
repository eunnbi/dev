import Profile from "./Profile";
import NavLinks from "./NavLinks";
import ContactLinks from "./ContactLinks";
import styled from "styled-components";

const NavWrapper = styled.nav<{ showNav: boolean }>`
  background-color: ${({ theme }) => theme.color.purple};
  width: 17rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  padding: 3rem 0;
  @media ${({ theme }) => theme.device.laptop} {
    left: auto;
    right: 0;
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
