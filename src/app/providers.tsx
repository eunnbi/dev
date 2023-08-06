"use client";

import { useState } from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import CustomThemeProvider from "@/components/common/CustomThemeProvider";
import StyledComponentsRegistry from "./registry";

export default function Providers({
  children,
  theme
}: React.PropsWithChildren<{ theme: string }>) {
  const [queryClient] = useState(
    () =>
      new QueryClient({
        defaultOptions: {
          queries: {
            refetchOnWindowFocus: false
          }
        }
      })
  );
  return (
    <QueryClientProvider client={queryClient}>
      <StyledComponentsRegistry>
        <CustomThemeProvider theme={theme}>{children}</CustomThemeProvider>
      </StyledComponentsRegistry>
    </QueryClientProvider>
  );
}
