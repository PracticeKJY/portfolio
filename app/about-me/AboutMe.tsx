"use client"

import Body from "../component/Body"
import Footer from "../component/Footer"
import Header from "../component/Header"
import Skill from "../component/skill/Skill"
import Project from "../component/project/Project"
// import HomeBackground from "../component/HomeBackground"
import { useEffect, useRef } from "react"
import { notionDataAtom } from "@/store/state"
import { useAtom, useSetAtom } from "jotai"
import Contact from "../component/contact/Contact"
import FakeMoveToScrollDiv from "../component/FakeMoveToScrollDiv"

const AboutMe = ({ data }: any) => {
  const setNotionData = useSetAtom(notionDataAtom)

  useEffect(() => {
    setNotionData(data)
  })

  const skillRef = useRef(null)
  const projectRef = useRef(null)
  const topRef = useRef(null)
  const contactRef = useRef(null)

  return (
    <>
      <Header
        skillRef={skillRef}
        projectRef={projectRef}
        topRef={topRef}
        contactRef={contactRef}
      />
      <FakeMoveToScrollDiv ref={topRef} />
      {/* <HomeBackground /> */}
      <Body skillRef={skillRef} />
      <FakeMoveToScrollDiv ref={skillRef} />
      <Skill />
      <FakeMoveToScrollDiv ref={projectRef} />
      <Project />
      <FakeMoveToScrollDiv ref={contactRef} />
      <Contact />
      <Footer />
    </>
  )
}

export default AboutMe
