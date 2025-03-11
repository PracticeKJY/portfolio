"use client"

import Link from "next/link"
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
        <div className="pt-10 flex items-center">
          <Link
            href="https://codespace.im/ko"
            rel="noopener noreferrer"
            target="_blank"
          >
            <span className="text-lg">
              멋쟁이사자처럼 프론트엔드 4기
            </span>
          </Link>
          <p className="text-l ml-2">2022.12 ~ 2023.06</p>
        </div>
        <div className="pt-5 flex items-center">
          <Link
            href="https://codespace.im/ko"
            rel="noopener noreferrer"
            target="_blank"
          >
            <span className="text-lg">CODESPACE</span>
          </Link>
          <p className="text-l ml-2">2023.10 ~ 2024.08</p>
        </div>
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
