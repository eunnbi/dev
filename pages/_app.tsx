import "../styles/globals.css";
import "../styles/markdown.css";
import type { AppProps } from "next/app";
import Layout from "../components/Layout";
import ThemeButton from "../components/ThemeButton";
import { RecoilRoot } from "recoil";
import CustomThemeProvider from "../styles/CustomThemeProvider";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <RecoilRoot>
      <CustomThemeProvider>
        <Layout headerExist={pageProps.id ? false : true}>
          <ThemeButton />
          <Component {...pageProps} />
        </Layout>
      </CustomThemeProvider>
    </RecoilRoot>
  );
}

export default MyApp;
