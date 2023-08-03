import type { Metadata } from "next";
import { generateMetadata } from "./shared-metadata";
import Providers from "./providers";
import Header from "@/components/layout/Header";
import TopButton from "@/components/layout/TopButton";
import ThemeButton from "@/components/layout/ThemeButton";
import "@/styles/globals.css";
import "@/styles/markdown.css";

export default function RootLayout({ children }: React.PropsWithChildren) {
  return (
    <html lang="ko" className="md:text-sm sm:text-xs">
      <body className="text-black bg-white dark:bg-secondary-black dark:text-white">
        <Providers>
          <Header />
          <div className="fixed bottom-3 right-3 flex flex-col items-center">
            <TopButton />
            <ThemeButton />
          </div>
          {children}
        </Providers>
      </body>
    </html>
  );
}

export const metadata: Metadata = generateMetadata({
  title: "Home",
  path: "/"
});
