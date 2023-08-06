import Providers from "./providers";
import Header from "@/components/layout/Header";
import TopButton from "@/components/layout/TopButton";
import ThemeButton from "@/components/layout/ThemeButton";
import NextTopLoader from "nextjs-toploader";
import { cookies } from "next/headers";

import "@/styles/globals.css";
import "@/styles/markdown.css";
import { darkTheme, lightTheme } from "@/styles/theme";

export default function RootLayout({ children }: React.PropsWithChildren) {
  const theme = cookies().get("theme");
  const isLightTheme = theme ? theme.value === "light" : true;
  return (
    <html lang="ko">
      <body>
        <Providers theme={theme ? theme.value : "light"}>
          <NextTopLoader
            color={
              isLightTheme
                ? lightTheme.color.primaryBlue
                : darkTheme.color.primaryBlue
            }
            showSpinner={false}
            shadow={false}
          />
          <Header />
          <TopButton />
          <ThemeButton />
          {children}
        </Providers>
      </body>
    </html>
  );
}
