"use client";

import { ThemeProvider } from "styled-components";
import { useThemeStore } from "@/stores/themeState";
import { lightTheme, darkTheme } from "../../styles/theme";
import { createGlobalStyle } from "styled-components";

export default function CustomThemeProvider({
  children
}: React.PropsWithChildren) {
  const isLightTheme = useThemeStore(state => state.isLightTheme);
  return (
    <ThemeProvider theme={isLightTheme ? lightTheme : darkTheme}>
      <GlobalStyle />
      {children}
    </ThemeProvider>
  );
}

const GlobalStyle = createGlobalStyle`
body {
    background-color: ${({ theme }) => theme.color.bgColor};
    color: ${({ theme }) => theme.color.textColor};
}
main {
  width: 100%;
  max-width: calc(720px + 15px);
  margin: 0 auto;
  padding: 15px;
}

::-webkit-scrollbar {
    width: 5px; /* 세로축 스크롤바 길이 */
    height: 5px; /* 가로축 스크롤바 길이 */
}
::-webkit-scrollbar-track-piece {
    background-color: ${({ theme }) => theme.color.bgColor};
}
::-webkit-scrollbar-thumb {
    border-radius: 8px;
    background-color: lightgray;
}
@media ${({ theme }) => theme.device.tablet} {
    html {
        font-size: 15px;
    }
}

@media ${({ theme }) => theme.device.mobile}{
    html {
        font-size: 14px;
    }
}

@media ${({ theme }) => theme.device.smallMobile} {
    html {
        font-size: 12px;
    }
}
`;
