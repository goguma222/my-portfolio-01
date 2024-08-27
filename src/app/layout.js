// import { Inter } from "next/font/google";
// import "./globals.css";

// const inter = Inter({ subsets: ["latin"] });

import "@/assets/scss/style.scss"

export const metadata = {
  title: "JangHee Portfolio",
  description: "이장희 포트폴리오 페이지입니다.",
  keywords: ["포트폴리오", "Portfolio", "이장희포트폴리오"]
};

export default function RootLayout({ children }) {
  return (
    <html lang="ko">
      {/* 파비콘 들어갈자리 */}
      {/* <link rel="icon" type="image/svg+sml" href="favicon.svg" /> */}
      <body>{children}</body>
    </html>
  );
}
