/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        background: "#1a1b26",
        foreground: "#c0caf5",
        black: "#15161e",
        blue: "#7aa2f7",
        cyan: "#7dcfff",
        green: "#9ece6a",
        purple: "#bb9af7",
        red: "#f7768e",
        selectionBackground: "#283457",
        white: "#a9b1d6",
        yellow: "#e0af68",
        brightBlack: "#414868",
        brightBlue: "#7aa2f7",
        brightCyan: "#7dcfff",
        brightGreen: "#9ece6a",
        brightPurple: "#9d7cd8",
        brightRed: "#f7768e",
        brightWhite: "#c0caf5",
        brightYellow: "#e0af68",
        cursorColor: "#c0caf5",
      },
      fontFamily: {
        jetBrainsMono: ["JetBrains Mono", "sans-serif"],
        notoSans: ["Noto Sans", "sans-serif"],
      },
    },
  },
  plugins: [],
};
