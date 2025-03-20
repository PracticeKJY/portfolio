"use client"

import { useEffect, useRef } from "react"
import gsap from "gsap"
import ScrollTrigger from "gsap/dist/ScrollTrigger"
import Lenis from "lenis"
import { useAtomValue } from "jotai"
import { notionDataAtom } from "@/store/state"
import ProjectPage from "./ProjectPage"

interface NotionData {
  results: {
    properties: {
      이름: { title: { plain_text: string }[] }
      Deploy: { rich_text: { text: { content: string } }[] }
      Skills: { multi_select: string[] }
      WorkPeriod: { date: string }
      Description: {
        rich_text: {
          plain_text: string
        }[]
      }
    }
  }[]
}

export default function Project() {
  const notionData =
    useAtomValue<NotionData>(notionDataAtom)

  const imageRef = useRef<HTMLDivElement[]>([])
  const imageContainerRef = useRef<HTMLDivElement | null>(
    null
  )

  const imageSection = notionData?.results.map(
    (data, index) => (
      <li key={index}>
        <div
          className="relative w-[300px] h-[600px] sm:w-[356px] sm:h-[442px] perspective-6"
          ref={(ref) => {
            if (ref) imageRef.current[index] = ref
          }}
        >
          <ProjectPage
            index={index}
            name={
              data.properties.이름.title[0]?.plain_text ??
              ""
            }
            deploy={
              data.properties.Deploy.rich_text[0]?.text
                .content ?? ""
            }
            tag={data.properties.Skills.multi_select ?? []}
            WorkPeriod={
              data.properties.WorkPeriod.date ?? ""
            }
            Description={
              data.properties.Description.rich_text[0]
                ?.plain_text ?? ""
            }
          />
        </div>
      </li>
    )
  )

  gsap.registerPlugin(ScrollTrigger)

  useEffect(() => {
    if (
      !imageContainerRef.current ||
      imageRef.current.length === 0
    )
      return

    gsap.to(imageRef.current, {
      xPercent: -100 * (imageRef.current.length - 1),
      ease: "none",
      scrollTrigger: {
        trigger: imageContainerRef.current,
        scrub: true,
        end:
          "+=" + imageContainerRef.current.offsetWidth * 3,
        pin: true,
      },
    })

    return () => {
      ScrollTrigger.getAll().forEach((st) => st.kill())
    }
  }, [notionData])

  // Lenis 설정

  useEffect(() => {
    if (typeof window !== "undefined") {
      const lenis = new Lenis({
        lerp: 0.05, // 이동 속도 조정
      })
      lenis.on("scroll", () => {})

      const raf = (time: number) => {
        lenis.raf(time)
        requestAnimationFrame(raf)
      }

      requestAnimationFrame(raf)
    }
  }, [])

  return (
    <>
      <main className=" w-full">
        <section
          className="min-h-screen flex flex-nowrap items-center space-x-10 px-20"
          ref={imageContainerRef}
          style={{
            overflow: "hidden",
          }}
        >
          {imageSection}
        </section>
      </main>
    </>
  )
}
