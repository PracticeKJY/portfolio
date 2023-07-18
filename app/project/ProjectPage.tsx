"use client";

import { FC } from "react";
import Image from "next/legacy/image";

interface ProjectPageProps {
  WorkPeriod: any;
  tag: any;
  Description: any;
  Github: string | undefined;
  name: any;
  imgSrc: any;
}

const ProjectPage: FC<ProjectPageProps> = ({
  WorkPeriod,
  tag,
  Description,
  Github,
  name,
  imgSrc,
}) => {
  const startDate = WorkPeriod.start;
  const endDate = WorkPeriod.end;

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
        <h3 className="max-w-[300px] mt-4 text-clamp">{Description}</h3>
        <h4 className="max-w-[300px] mt-4 text-h4">{`${startDate} ~ ${endDate}`}</h4>
        <a href={Github}>깃허브 바로가기</a>
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
  );
};

export default ProjectPage;
