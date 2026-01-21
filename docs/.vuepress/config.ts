import { defineUserConfig } from "vuepress";

import theme from "./theme.js";

export default defineUserConfig({
  base: "/",

  locales: {
    "/": {
      lang: "zh-CN",
      title: "XTsat",
      description: "我的个人博客",
    },
    "/en/": {
      lang: "en-US",
      title: "XTsat",
      description: "My personal blog",
    },
  },

  theme,

  // Enable it with pwa
  // shouldPrefetch: false,
});
