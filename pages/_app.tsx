import "../styles/globals.css";
import type { AppProps } from "next/app";
import Layout from "../components/Layout";
import { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme } from "../styles/theme";
import { GlobalStyle } from "../styles/GlobalStyle";
import { useEffect, useState } from "react";
import ThemeButton from "../components/ThemeButton";

const THEME = "theme";

function MyApp({ Component, pageProps }: AppProps) {
  const [isLightTheme, setIsLightTheme] = useState(true);
  const changeTheme = () => {
    localStorage.setItem(THEME, JSON.stringify(!isLightTheme));
    setIsLightTheme(!isLightTheme);
    console.log(!isLightTheme);
  };
  useEffect(() => {
    const theme = window.localStorage.getItem(THEME);
    if (theme !== null) {
      setIsLightTheme(JSON.parse(theme));
    }
  }, []);
  return (
    <ThemeProvider theme={isLightTheme ? lightTheme : darkTheme}>
      <GlobalStyle />
      {pageProps.id ? (
        <>
          <ThemeButton changeTheme={changeTheme} isLightTheme={isLightTheme} />
          <Component {...pageProps} />
        </>
      ) : (
        <Layout>
          <ThemeButton changeTheme={changeTheme} isLightTheme={isLightTheme} />
          <Component {...pageProps} />
        </Layout>
      )}
    </ThemeProvider>
  );
}

export default MyApp;
