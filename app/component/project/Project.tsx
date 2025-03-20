"use client"

import { useEffect, useRef } from "react"
import gsap from "gsap"
import ScrollTrigger from "gsap/dist/ScrollTrigger"
import Lenis from "lenis"
import { useAtomValue } from "jotai"
import { notionDataAtom } from "@/store/state"
import ProjectPage from "./ProjectPage"
import Image from "next/image"
import Link from "next/link"

interface NotionData {
  results: {
    properties: {
      이름: { title: { plain_text: string }[] }
      Deploy: { rich_text: { text: { content: string } }[] }
      Skills: { multi_select: string[] }
      WorkPeriod: {
        date: { start: string; end: string; time_zone: any }
        id: string
        type: string
      }
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

  // mobile
  const images = notionData?.results.map((data, index) => {
    const name =
      data.properties.이름.title[0]?.plain_text ?? ""
    const deploy =
      data.properties.Deploy.rich_text[0]?.text.content ??
      ""
    const Description =
      data.properties.Description.rich_text[0]
        ?.plain_text ?? ""
    const WorkPeriod = data.properties.WorkPeriod.date ?? ""

    return (
      <li key={index}>
        <div className="block relative w-full h-[350px]">
          <Image
            className=" w-full h-full"
            src={
              name === "Taing"
                ? "/taing-thumb.png"
                : name === "Market Karly"
                ? "/karly-thumb.png"
                : name === "Restay"
                ? "/restay-thumb.png"
                : name === "Portfolio"
                ? "/portfolio-thumb.png"
                : name === "My Frontend Story"
                ? "/intersection-observer-thumb.png"
                : name == "named"
                ? "/named-thumb.png"
                : name == "당신의 타로"
                ? "/taro-thumb.png"
                : name == "tether green"
                ? "/tethergreen-thumb.png"
                : name == "tethermax"
                ? "/tethermax-thumb.png"
                : name == "풀박사"
                ? "/drfull-thumb.png"
                : name == "tubit"
                ? "/tubit-thumb.png"
                : name == "gseed"
                ? "/gseed-thumb.png"
                : name == "Delivered korea"
                ? "/delivered-thumb.png"
                : name == "Codespace"
                ? "/codespace-thumb.png"
                : ""
            }
            alt="cover image"
            sizes="100%"
            fill
          />
          <div></div>
        </div>
        <div className="w-full h-full">
          <div className="p-4 flex flex-col border-t-[1px] border-gray-300 dark:border-gray-200/50">
            <h1 className="text-title font-bold">{name}</h1>
            <h3 className="max-w-[300px] mt-4 text-clamp">
              {Description}
            </h3>
            {WorkPeriod.start && WorkPeriod.end && (
              <h4 className="max-w-[300px] mt-4 text-h4">{`${WorkPeriod.start} ~ ${WorkPeriod.end}`}</h4>
            )}
            <Link
              href={deploy}
              rel="noopener noreferrer"
              target="_blank"
              className={`${deploy === "-" && "hidden"}`}
            >
              웹사이트로 이동
            </Link>
          </div>
        </div>
      </li>
    )
  })

  // pc
  const imageRef = useRef<HTMLDivElement[]>([])
  const imageContainerRef = useRef<HTMLDivElement | null>(
    null
  )

  const imageSection = notionData?.results.map(
    (data, index) => (
      <li key={index}>
        <div
          className="relative w-[300px] h-[600px] sm:w-[356px] sm:h-[442px]"
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

    const screenWidth = window.innerWidth

    // 화면 너비에 따라 200px을 다르게 조정
    const offset =
      screenWidth < 639
        ? 20
        : screenWidth < 768
        ? 15
        : screenWidth < 1024
        ? 200
        : screenWidth < 1398
        ? 100
        : 200 // screenWidth >= 1398일 경우 200

    gsap.to(imageRef.current, {
      xPercent: -100 * imageRef.current.length + offset,
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
      <main className="w-full hidden sm:block">
        <section
          className="hidden sm:flex min-h-screen flex-nowrap items-center space-x-10 px-20"
          ref={imageContainerRef}
          style={{
            overflow: "hidden",
          }}
        >
          {imageSection}
        </section>
      </main>
      <main className="w-full block sm:hidden">
        <section className="pt-10 space-y-10 ">
          {images}
        </section>
      </main>
    </>
  )
}
