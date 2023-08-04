import React, { useEffect, useRef } from "react";
import { useTheme } from "@/hooks/useTheme";

function Utterances() {
  const rootElm = useRef<HTMLDivElement>(null);
  const isUtterancesLoaded = useRef(false);
  const { isLightTheme } = useTheme();

  useEffect(() => {
    if (!rootElm.current || isUtterancesLoaded.current) return;

    const utterances = document.createElement("script");
    const utterancesConfig = {
      src: "https://utteranc.es/client.js",
      repo: "eunnbi/dev",
      theme: isLightTheme ? "github-light" : "photon-dark",
      label: "comments",
      async: true,
      "issue-term": "pathname",
      crossorigin: "anonymous"
    };
    Object.keys(utterancesConfig).forEach(configKey => {
      // @ts-ignore
      utterances.setAttribute(configKey, utterancesConfig[configKey]);
    });
    rootElm.current.appendChild(utterances);
    isUtterancesLoaded.current = true;
  }, []);

  useEffect(() => {
    const iframe =
      document.querySelector<HTMLIFrameElement>(".utterances-frame");
    if (!iframe) return;

    iframe.contentWindow?.postMessage(
      {
        type: "set-theme",
        theme: isLightTheme ? "github-light" : "photon-dark"
      },
      "https://utteranc.es"
    );
  }, [isLightTheme]);

  return (
    <div
      ref={rootElm}
      style={{
        width: "100%"
      }}
    />
  );
}

export default Utterances;
