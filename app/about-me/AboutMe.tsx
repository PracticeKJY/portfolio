"use client"

import Body from "../component/Body"
import Footer from "../component/Footer"
import Header from "../component/Header"
import Skill from "../component/skill/Skill"
import Project from "../component/project/Project"
import { useEffect, useRef, useState } from "react"
import { notionDataAtom } from "@/store/state"
import { useSetAtom } from "jotai"
import Contact from "../component/contact/Contact"
import FakeMoveToScrollDiv from "../component/FakeMoveToScrollDiv"
import Container from "../component/Container"
import Career from "../component/career/Career"

const AboutMe = ({ data }: any) => {
  const setNotionData = useSetAtom(notionDataAtom)

  useEffect(() => {
    setNotionData(data)
  })

  const skillIntersection = useRef<HTMLDivElement>(null)
  // const projectIntersection = useRef<HTMLDivElement>(null)
  const skillRef = useRef(null)
  const projectRef = useRef(null)
  const topRef = useRef(null)
  const careerRef = useRef(null)
  const contactRef = useRef(null)

  const [skillLoading, setSkillLoading] = useState(false)
  const [projectLoading, setProjectLoading] =
    useState(false)

  useEffect(() => {
    let observer: IntersectionObserver
    if (skillIntersection) {
      observer = new IntersectionObserver(
        async ([e]) => {
          if (e.isIntersecting) {
            setSkillLoading(true)
          }
        },
        { threshold: 1 }
      )
      observer.observe(skillIntersection.current as Element)
    }
    // if (projectIntersection) {
    //   observer = new IntersectionObserver(
    //     async ([e]) => {
    //       if (e.isIntersecting) {
    //         setProjectLoading(true)
    //       }
    //     },
    //     { threshold: 1 }
    //   )
    //   observer.observe(
    //     projectIntersection.current as Element
    //   )
    // }
    return () => observer.disconnect()
  }, [])

  return (
    <>
      <Header
        skillRef={skillRef}
        projectRef={projectRef}
        topRef={topRef}
        careerRef={careerRef}
        contactRef={contactRef}
      />
      <FakeMoveToScrollDiv ref={topRef} />
      <Body skillRef={skillRef} />
      <FakeMoveToScrollDiv ref={skillRef} />
      <Container>
        <div className="w-full flex items-start pb-[6px] border-b-[1px] border-slate-800 dark:border-white">
          <div
            className="text-3xl font-semibold"
            ref={skillIntersection}
          >
            Skills
          </div>
        </div>
        {skillLoading && <Skill />}
      </Container>
      <FakeMoveToScrollDiv ref={projectRef} />
      <Container>
        <div className="w-full flex items-start pb-[6px] border-b-[1px] border-slate-800 dark:border-white">
          <div
            className="text-3xl font-semibold"
            // ref={projectIntersection}
          >
            Projects
          </div>
        </div>
        <Project />
        {/* {projectLoading && <Project />} */}
      </Container>
      <FakeMoveToScrollDiv ref={careerRef} />
      <Career />
      <FakeMoveToScrollDiv ref={contactRef} />
      <Contact />
      <Footer />
    </>
  )
}

export default AboutMe
