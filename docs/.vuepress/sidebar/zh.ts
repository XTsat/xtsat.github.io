import { sidebar } from "vuepress-theme-hope";

export const zhSidebar = sidebar({
  "/": [
    "",
    {
      text: "文档",
      icon: "book",
      prefix: "guide/",
      children: "structure",
    },
    {
      text: "博客",
      icon: "book",
      prefix: "posts/",
      children: "structure",
    },
    "intro",
  ],
});
