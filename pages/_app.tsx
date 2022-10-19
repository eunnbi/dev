import "@styles/globals.css";
import "@styles/markdown.css";
import type { AppProps } from "next/app";
import { RecoilRoot } from "recoil";
import Layout from "@components/Layout";
import ThemeButton from "@components/Layout/ThemeButton";
import TopButton from "@components/Layout/TopButton";
import CustomThemeProvider from "@styles/CustomThemeProvider";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <RecoilRoot>
      <CustomThemeProvider>
        <Layout headerExist={pageProps.id ? false : true}>
          <TopButton />
          <ThemeButton />
          <Component {...pageProps} />
        </Layout>
      </CustomThemeProvider>
    </RecoilRoot>
  );
}

export default MyApp;
