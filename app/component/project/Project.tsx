"use client"

import { useAtomValue } from "jotai"
import ProjectPage from "./ProjectPage"
import { notionDataAtom } from "@/store/state"

const Project = () => {
  const notionData = useAtomValue(notionDataAtom)

  return (
    <>
      <div className="flex flex-col items-center justify-center min-h-screen px-3 mb-10">
        <div className="grid grid-cols-1 gap-6 p-12 m-4 md:grid-cols-2">
          {notionData.results.map(
            (data: any, index: any) => {
              return (
                <li key={index}>
                  <ProjectPage
                    name={
                      data.properties.이름.title[0]
                        .plain_text
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
                    Github={
                      data.properties.Github
                        ? data.properties.Github.url
                        : ""
                    }
                    imgSrc={
                      data.cover.file.url ||
                      data.cover.external.url
                    }
                  />
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
