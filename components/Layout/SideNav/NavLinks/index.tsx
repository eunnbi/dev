import Link from "next/link";
import { useRouter } from "next/router";
import { List, Item, Anchor } from "./NavLinks.styles";
import { NAV_LINKS } from "./navLinks";
import React from "react";

const NavLinks = ({ closeNav }: { closeNav: () => void }) => {
  const router = useRouter();
  return (
    <List>
      {NAV_LINKS.map((link) => (
        <Item key={link.id}>
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
        </Item>
      ))}
    </List>
  );
};

export default React.memo(NavLinks);
