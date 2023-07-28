"use client"

import { FC } from "react"
import Image from "next/legacy/image"
import Link from "next/link"

interface ProjectPageProps {
  WorkPeriod: any
  tag: any
  Description: any
  name: any
  deploy: any
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
    <div className="project-card">
      <div className="max-w-[400px] max-h-[380px]">
        <Image
          className="border-none rounded-lg "
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
              : ""
          }
          alt="cover image"
          width={100}
          height={100}
          layout="responsive"
          objectFit="cover"
          priority
        />
      </div>
      <div className="p-4 flex flex-col border-t-[1px] border-gray-300 dark:border-gray-200/50">
        <h1 className="text-title font-bold">{name}</h1>
        <h3 className="max-w-[300px] mt-4 text-clamp">
          {Description}
        </h3>
        <h4 className="max-w-[300px] mt-4 text-h4">{`${startDate} ~ ${endDate}`}</h4>
        <Link
          href={
            name === "Taing"
              ? "https://github.com/likelion-fe4-js3/taing"
              : name === "Market Karly"
              ? "https://github.com/LikeLion-FE-React-Project04/project-repo"
              : name === "Restay"
              ? "https://github.com/PracticeKJY/restay-refactor"
              : name === "Portfolio"
              ? "https://github.com/PracticeKJY/portfolio"
              : name === "My Frontend Story"
              ? "https://github.com/PracticeKJY/my-frontend-story"
              : ""
          }
          rel="noopener noreferrer"
          target="_blank"
        >
          깃허브 바로가기
        </Link>
        <Link
          href={deploy}
          rel="noopener noreferrer"
          target="_blank"
          className={`${deploy === "-" && "hidden"}`}
        >
          배포 바로가기
        </Link>
        <Link
          href={
            name === "Restay"
              ? "https://maddening-orchid-043.notion.site/Restay-8075199f7c644fe39439f5a905d37dcc?pvs=4"
              : name === "Market Karly"
              ? "https://maddening-orchid-043.notion.site/Market-Karly-b108e152ef5e4950bd4bb570cef4734b?pvs=4"
              : name === "Taing"
              ? "https://maddening-orchid-043.notion.site/Taing-0edacf7f7dc34c978d63b302563a1f43?pvs=4"
              : name === "Portfolio"
              ? "https://maddening-orchid-043.notion.site/portfolio-ee28d1d87eb84a13b6586f1cdad509f1?pvs=4"
              : name === "My Frontend Story"
              ? "https://maddening-orchid-043.notion.site/My-Frontend-Story-3f93750e22234e3bac6f406000b1f3e6?pvs=4"
              : ""
          }
          rel="noopener noreferrer"
          target="_blank"
          className={`${name === "Taing" && "hidden"} ${
            name === "My Frontend Story" && "hidden"
          }`}
        >
          인사이트 바로가기
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
  )
}

export default ProjectPage
