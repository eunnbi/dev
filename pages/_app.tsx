import type { AppProps } from "next/app";
import { RecoilRoot } from "recoil";
import Header from "@components/layout/Header";
import ThemeButton from "@components/layout/ThemeButton";
import TopButton from "@components/layout/TopButton";
import CustomThemeProvider from "@styles/CustomThemeProvider";
import "@styles/globals.css";
import "@styles/markdown.css";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <RecoilRoot>
      <CustomThemeProvider>
        <Header />
        <TopButton />
        <ThemeButton />
        <Component {...pageProps} />
      </CustomThemeProvider>
    </RecoilRoot>
  );
}

export default MyApp;
