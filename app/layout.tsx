import "../styles/globals.css"
import type { Metadata } from "next"
import DarkModeProvider from "./provider/DarkModeProvider"
import JotaiProvider from "./provider/JotaiProvider"

export const metadata: Metadata = {
  title: "노션을 사용하여 만든 포트폴리오",
  description: "포트폴리오만들기",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ko-KR" suppressHydrationWarning={true}>
      <body className="bg-primary">
        <JotaiProvider>
          <DarkModeProvider>{children}</DarkModeProvider>
        </JotaiProvider>
      </body>
    </html>
  )
}
