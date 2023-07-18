import { Metadata } from "next"
import Home from "./component/Home"

export const metadata: Metadata = {
  title: "KimJongYeop's portfolio",
  description: "포트폴리오",
}

const Page = () => {
  return (
    <>
      <Home />
    </>
  )
}

export default Page
