"use client"

import { useAtomValue } from "jotai"
import ProjectPage from "./ProjectPage"
import { notionDataAtom } from "@/store/state"
import Container from "../Container"
import { useEffect, useState } from "react"

const Project = () => {
  const notionData = useAtomValue(notionDataAtom)

  return (
    <>
      <Container>
        <div className="w-full flex items-start pb-[6px] border-b-[1px] border-slate-800 dark:border-white">
          <div className="text-3xl font-semibold">
            Projects
          </div>
        </div>
        <div className="flex flex-col items-center justify-center min-h-screen px-3 mb-10">
          <div className="grid grid-cols-1 gap-6 p-12 m-4 md:grid-cols-2">
            {/* {notionData.results.map(
              (data: any, index: any) => {
                return (
                  <li key={index}>
                    <ProjectPage
                      name={
                        data.properties.이름.title[0]
                          .plain_text
                      }
                      deploy={
                        data.properties.Deploy.rich_text[0]
                          .text.content
                      }
                      til={data.public_url}
                      tag={
                        data.properties.Skills.multi_select
                      }
                      WorkPeriod={
                        data.properties.WorkPeriod.date
                      }
                      Description={
                        data.properties.Description
                          .rich_text[0].plain_text
                      }
                      imgSrc={
                        data.cover.file.url ||
                        data.cover.external.url
                      }
                    />
                  </li>
                )
              }
            )} */}
          </div>
        </div>
      </Container>
    </>
  )
}

export default Project
