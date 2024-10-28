import { defineUserConfig } from "vuepress";

import theme from "./theme.js";

export default defineUserConfig({
  base: "/",

  locales: {
    "/": {
      lang: "zh-CN",
      title: "晓同",
      description: "",
    },
    "/en/": {
      lang: "en-US",
      title: "XTsat",
      description: "",
    },
  },

  theme,

  // Enable it with pwa
  // shouldPrefetch: false,
});
