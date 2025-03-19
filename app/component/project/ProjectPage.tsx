"use client"

import { FC } from "react"
import Link from "next/link"
import ProjectImage from "./ProjectImage"

interface ProjectPageProps {
  WorkPeriod: any
  tag: any
  Description: any
  name: any
  deploy: any
  index: number
}

const ProjectPage: FC<ProjectPageProps> = ({
  WorkPeriod,
  tag,
  Description,
  name,
  deploy,
}) => {
  const startDate = WorkPeriod.start
  const endDate = WorkPeriod.end

  return (
    <div className="projectWrapper group">
      <div className="project-card-front">
        <ProjectImage name={name} />
        <div className="pt-4 pl-8  border-t-[1px] border-gray-300 dark:border-gray-200/50">
          {name}
        </div>
      </div>
      <div className="project-card-back">
        <ProjectImage name={name} disabled />
        <div className="p-4 flex flex-col border-t-[1px] border-gray-300 dark:border-gray-200/50">
          <h1 className="text-title font-bold">{name}</h1>
          <h3 className="max-w-[300px] mt-4 text-clamp">
            {Description}
          </h3>
          {startDate && endDate && (
            <h4 className="max-w-[300px] mt-4 text-h4">{`${startDate} ~ ${endDate}`}</h4>
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
        <div className="hidden sm:block relative w-[300px] p-4">
          <div className="flex flex-wrap justify-items-start gap-2">
            {tag.map((aTag: any) => (
              <h1
                className="inline px-2 py-1 mr-2 rounded-md bg-slate-200 dark:bg-slate-600"
                key={aTag.id}
              >
                <span className="text-xs">{aTag.name}</span>
              </h1>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProjectPage
