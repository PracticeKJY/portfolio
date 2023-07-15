import "../styles/globals.css";
import type { Metadata } from "next";
import Footer from "./component/Footer";
import Header from "./component/Header";
import DarkModeProvider from "./provider/DarkModeProvider";

export const metadata: Metadata = {
  title: "노션을 사용하여 만든 포트폴리오",
  description: "포트폴리오만들기",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko-KR" suppressHydrationWarning={true}>
      <body className="light" suppressHydrationWarning={true}>
        <DarkModeProvider>
          <Header />
          {children}
          <Footer />
        </DarkModeProvider>
      </body>
    </html>
  );
}
