"use client";

import styled from "styled-components";

export default function Layout({ children }: React.PropsWithChildren) {
  return <Main>{children}</Main>;
}

const Main = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 2rem auto 4rem;
`;
