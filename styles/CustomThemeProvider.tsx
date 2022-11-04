import { ThemeProvider } from "styled-components";
import { themeState } from "stores/themeState";
import { useRecoilValue } from "recoil";
import { lightTheme, darkTheme } from "./theme";
import { GlobalStyle } from "./GlobalStyle";
import React from "react";

const CustomThemeProvider = ({ children }: React.PropsWithChildren) => {
  const { isLightTheme } = useRecoilValue(themeState);
  return (
    <ThemeProvider theme={isLightTheme ? lightTheme : darkTheme}>
      <GlobalStyle />
      {children}
    </ThemeProvider>
  );
};

export default CustomThemeProvider;
