"use client"

import Body from "../component/Body"
import Footer from "../component/Footer"
import Header from "../component/Header"
import Skill from "../component/skill/Skill"
import Project from "../component/project/Project"
import HomeBackground from "../component/HomeBackground"
import { useEffect, useRef } from "react"
import { notionDataAtom } from "@/store/state"
import { useAtom, useSetAtom } from "jotai"

const AboutMe = ({ data }: any) => {
  const setNotionData = useSetAtom(notionDataAtom)

  useEffect(() => {
    setNotionData(data)
  })

  const skillRef = useRef(null)
  const projectRef = useRef(null)
  const topRef = useRef(null)

  return (
    <>
      <Header
        skillRef={skillRef}
        projectRef={projectRef}
        topRef={topRef}
      />
      <div className="relative" ref={topRef}>
        <HomeBackground />
        <Body skillRef={skillRef} />
      </div>
      <div ref={skillRef}>
        <Skill />
      </div>
      <div ref={projectRef}>
        <Project />
      </div>
      <Footer />
    </>
  )
}

export default AboutMe
