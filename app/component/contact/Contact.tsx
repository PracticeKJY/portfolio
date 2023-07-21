"use client"

import Link from "next/link"
import Container from "../Container"
import { FC, ReactNode } from "react"

const Contact = () => {
  return (
    <section className="mt-20 relative flex flex-col min-h-[300px] body-font">
      <div className="container mx-auto flex px-5  flex-col">
        <div className="w-full flex items-start pb-[6px] border-b-[1px] border-slate-800 dark:border-white">
          <div className="text-3xl font-semibold">
            Contact
          </div>
        </div>
        <div className="pt-10">
          <ContactItemWrapper name={"E-mail"}>
            <Link
              href="mailto:qw1192@gmail.com"
              rel="noopener noreferrer"
              target="_blank"
            >
              <span className="text-lg">
                qw1192@gmail.com
              </span>
            </Link>
          </ContactItemWrapper>
          <ContactItemWrapper name={"Phone"}>
            <Link href="">
              <span className="text-lg">010-4874-2157</span>
            </Link>
          </ContactItemWrapper>
          <ContactItemWrapper name={"Github"}>
            <Link
              href={"https://github.com/PracticeKJY"}
              rel="noopener noreferrer"
              target="_blank"
            >
              <span className="text-lg">
                https://github.com/PracticeKJY
              </span>
            </Link>
          </ContactItemWrapper>
        </div>
      </div>
    </section>
  )
}

export default Contact

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
