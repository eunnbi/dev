import type { AppProps } from "next/app";
import { RecoilRoot } from "recoil";
import { useState } from "react";
import Header from "@/components/layout/Header";
import ThemeButton from "@/components/layout/ThemeButton";
import TopButton from "@/components/layout/TopButton";
import CustomThemeProvider from "@/components/common/CustomThemeProvider";
import {
  QueryClientProvider,
  Hydrate,
  QueryClient
} from "@tanstack/react-query";
import "@/styles/globals.css";
import "@/styles/markdown.css";

function MyApp({ Component, pageProps }: AppProps) {
  const [queryClient] = useState(
    () =>
      new QueryClient({
        defaultOptions: {
          queries: {
            refetchOnWindowFocus: false,
            staleTime: Infinity
          }
        }
      })
  );
  return (
    <QueryClientProvider client={queryClient}>
      <Hydrate state={pageProps.dehydratedState}>
        <RecoilRoot>
          <CustomThemeProvider>
            <Header />
            <TopButton />
            <ThemeButton />
            <Component {...pageProps} />
          </CustomThemeProvider>
        </RecoilRoot>
      </Hydrate>
    </QueryClientProvider>
  );
}

export default MyApp;
