import Link, { LinkProps } from "next/link";
import { HTMLAttributeAnchorTarget } from "react";
import styled from "styled-components";

interface IconLinkProps extends LinkProps {
  href: string;
}

export default function IconLink({
  href,
  children
}: React.PropsWithChildren<IconLinkProps>) {
  return (
    <StyledLink href={href} passHref>
      {children}
    </StyledLink>
  );
}

const StyledLink = styled(Link)`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  -webkit-box-align: center;
  -webkit-box-pack: center;
  padding: 0.4rem;
  border-radius: 50%;
  font-size: 1.5rem;
  color: ${({ theme }) => (theme.name === "light" ? "gray" : "white")};
  transition: background-color 150ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
  &:hover {
    background-color: rgba(0, 0, 0, 0.04);
  }
`;
