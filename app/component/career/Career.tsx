"use client"

import { FC, ReactNode } from "react"

const Career = () => {
  return (
    <section className="mt-20 relative flex flex-col min-h-[300px] body-font">
      <div className="container mx-auto flex px-5  flex-col">
        <div className="w-full flex items-start pb-[6px] border-b-[1px] border-slate-800 dark:border-white">
          <div className="text-3xl font-semibold">
            Career
          </div>
        </div>
        <div className="flex flex-col items-start pt-10 md:flex-row md:items-center">
          <p>
            <span className="text-lg text-slate-400">
              멋쟁이사자처럼 프론트엔드 4기
            </span>
          </p>
          <p className="text-l md:ml-2">
            2022.12 ~ 2023.06
          </p>
        </div>
        <div className="flex flex-col items-start pt-5 md:flex-row md:items-center">
          <p>
            <span className="text-lg text-slate-400">
              CODESPACE
            </span>
          </p>
          <p className="text-l md:ml-2">
            2023.10 ~ 2024.09
          </p>
        </div>
        <p className="flex flex-col items-start pt-5 md:flex-row md:items-center">
          <div>
            <span className="text-lg text-slate-400">
              제이테크놀로지㈜
            </span>
          </div>
          <p className="text-l md:ml-2">
            2025.06 ~ 2025.09
          </p>
        </p>
      </div>
    </section>
  )
}

export default Career

interface ContactItemWrapper {
  children: ReactNode
  name: string
}

const ContactItemWrapper: FC<ContactItemWrapper> = ({
  children,
  name,
}) => {
  return (
    <div className="py-3 flex flex-col gap-4">
      <div className="text-2xl ">
        <div className="underline-contact">{name}</div>
      </div>
      {children}
    </div>
  )
}
