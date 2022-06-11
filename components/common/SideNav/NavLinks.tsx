import Link from "next/link";
import { NAV_LINKS } from "../../../constants/navLinks";
import styled from "styled-components";
import { useRouter } from "next/router";

const NavLinkList = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: center;
  color: rgba(225, 225, 225, 0.5);
  font-size: 23px;
  margin-top: 80px;
`;

const NavLinkItem = styled.li`
  display: flex;
  align-items: center;
  margin-bottom: 30px;
  .icon {
    margin-right: 10px;
  }
`;

const Anchor = styled.a<{ currentPath: string; pathName: string }>`
  color: ${(props) =>
    props.currentPath === props.pathName ? "#fff" : "inherit"};
`;

const NavLinks = ({ closeNav }: { closeNav: () => void }) => {
  const router = useRouter();
  return (
    <NavLinkList>
      {NAV_LINKS.map((link) => (
        <NavLinkItem key={link.id}>
          <Link href={link.to}>
            <Anchor
              currentPath={router.pathname}
              pathName={link.to}
              onClick={closeNav}
            >
              {link.icon}
              {link.label}
            </Anchor>
          </Link>
        </NavLinkItem>
      ))}
    </NavLinkList>
  );
};

export default NavLinks;
