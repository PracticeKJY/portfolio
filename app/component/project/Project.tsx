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
      <div className="flex flex-col items-center justify-center min-h-screen px-3 mb-10 animate-intersection opacity-0">
        <div className="grid grid-cols-1 gap-6 p-12 m-4 md:grid-cols-2 ">
          {notionData.results.map(
            (data: any, index: any) => {
              return (
                <li key={index}>
                  <div className="relative w-[338px] h-[652px] sm:w-[356px] sm:h-[442px] perspective-6">
                    <ProjectPage
                      index={index}
                      name={
                        data.properties.이름.title[0]
                          .plain_text
                      }
                      deploy={
                        data.properties.Deploy.rich_text[0]
                          .text.content
                      }
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
                    />
                  </div>
                </li>
              )
            }
          )}
        </div>
      </div>
    </>
  )
}

export default Project
