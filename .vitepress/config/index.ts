import { defineConfig } from "vitepress";
import { nav } from "./nav";

export default defineConfig({
  title: "Arcade",
  description:
    "A simple, modern, and powerful JavaScript framework for building fast, responsive web apps.",
  themeConfig: {
    nav,
  },
});
