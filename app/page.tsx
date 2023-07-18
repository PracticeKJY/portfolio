import { Metadata } from "next"
import Body from "./component/Body"
import Skill from "./component/skill/Skill"

export const metadata: Metadata = {
  title: "KimJongYeop's portfolio",
  description: "포트폴리오",
}

export default function Home() {
  return (
    <>
      <Body />
      <Skill />
    </>
  )
}
