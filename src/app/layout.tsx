import Providers from "./providers";
import Header from "@/components/layout/Header";
import TopButton from "@/components/layout/TopButton";
import ThemeButton from "@/components/layout/ThemeButton";

import "@/styles/globals.css";
import "@/styles/markdown.css";

export default function RootLayout({ children }: React.PropsWithChildren) {
  return (
    <html lang="ko">
      <body>
        <Providers>
          <Header />
          <TopButton />
          <ThemeButton />
          {children}
        </Providers>
      </body>
    </html>
  );
}
