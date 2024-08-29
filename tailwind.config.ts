import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./containers/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#F9F5FF",
        secondary: "#F3EBFF",
        heading: "#42307D",
        body: "#6941C6",
        title: "#101828",
        para: "#667085",
        border: "#D0D5DD",
      },
      fontSize: {
        displaylg: ["48px", { lineHeight: "60px", fontWeight: "600" }],
        displaymd: ["36px", { lineHeight: "44px", fontWeight: "600" }],
        displayxs: ["24px", { lineHeight: "32px", fontWeight: "600" }],
        textxl: ["20px", { lineHeight: "30px", fontWeight: "400" }],
        textlg: ["18px", { lineHeight: "28px", fontWeight: "400" }],
        textmd: ["16px", { lineHeight: "24px", fontWeight: "400" }],
        textsm: ["14px", { lineHeight: "20px", fontWeight: "500" }],
      },
    },
  },
  plugins: [],
};
export default config;
