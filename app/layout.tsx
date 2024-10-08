import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import BlogContextProvider from "@JklPortfolio/Context/BlogContext";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Blog Page",
  description: "Generated by Blog Page",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-primary`}>
        <BlogContextProvider>{children}</BlogContextProvider>
      </body>
    </html>
  );
}
