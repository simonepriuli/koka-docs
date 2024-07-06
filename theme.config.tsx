import React from "react";
import { DocsThemeConfig } from "nextra-theme-docs";
import Image from "next/image";

const config: DocsThemeConfig = {
  logo: <Image src={"/logo.png"} alt="Logo" width={148} height={80} />,

  project: {
    link: "https://github.com/simonepriuli/koka",
  },
  useNextSeoProps() {
    return {
      titleTemplate: "",
    };
  },
  docsRepositoryBase: "https://github.com/shuding/nextra-docs-template",
  footer: {
    text: "Kōka, a TypeScript library.",
  },
};

export default config;
