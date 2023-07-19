"use client"

import { FC } from "react"
import Image from "next/legacy/image"
import Link from "next/link"

interface ProjectPageProps {
  WorkPeriod: any
  tag: any
  Description: any
  Github: any
  name: any
  imgSrc: any
  deploy: any
  til: string
}

const ProjectPage: FC<ProjectPageProps> = ({
  WorkPeriod,
  tag,
  Description,
  Github,
  name,
  imgSrc,
  deploy,
  til,
}) => {
  const startDate = WorkPeriod.start
  const endDate = WorkPeriod.end

  console.log(
    "🚀 ~ file: ProjectPage.tsx:32 ~ github:",
    Github
  )

  return (
    <div className="project-card">
      <div className="max-w-[400px] max-h-[380px]">
        <Image
          className="border-none rounded-lg "
          src={imgSrc}
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
              : ""
          }
        >
          깃허브 바로가기
        </Link>
        <Link
          href={deploy}
          className={`${deploy === "-" && "hidden"}`}
        >
          배포 바로가기
        </Link>
        <Link
          href={til}
          className={`${name === "Taing" && "hidden"}`}
        >
          TIL
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
