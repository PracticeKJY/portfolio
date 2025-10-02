import "../styles/globals.css"
import type { Metadata } from "next"
import DarkModeProvider from "./provider/DarkModeProvider"
import JotaiProvider from "./provider/JotaiProvider"

export const metadata: Metadata = {
  title: "Kim jongyeop's Portfolio",
  description: "reserved by Kim jongyeop",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html
      className="font-Pretendard"
      lang="ko-KR"
      suppressHydrationWarning={true}
    >
      <body className="bg-primary">
        <JotaiProvider>
          <DarkModeProvider>{children}</DarkModeProvider>
        </JotaiProvider>
      </body>
    </html>
  )
}
