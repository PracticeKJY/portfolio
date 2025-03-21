"use client"

import { SlArrowDown } from "react-icons/sl"
import HomeBackground from "./HomeBackground"

const Body = ({ skillRef }: any) => {
  const moveToSkill = () => {
    if (skillRef) {
      skillRef.current.scrollIntoView({
        behavior: "smooth",
      })
    }
  }

  return (
    <>
      <section className="relative flex flex-col items-center justify-center min-h-screen body-font">
        <HomeBackground />
        <div className="container mx-auto flex px-5 pt-36 md:pt-18 flex-col items-center">
          <div className="sticky  justify-center items-center lg:flex-grow   flex flex-col  mb-16 md:mb-0 text-center">
            <h1 className="dark:text-white sm:text-[52px] sm:leading-[70px] text-2xl/10 mb-4 font-medium text-gray-900 ">
              프론트엔드 개발자
              <br />
              <div className="relative inline-block">
                <span className="sm:text-[60px] text-3xl font-semibold">
                  김종엽
                </span>{" "}
                입니다. <br />
              </div>
            </h1>
            <div className="pt-10 font-xl sm:text-[28px] sm:leading-[50px] ">
              <div className="">
                <span className="underline-neon">
                  새로운 지식
                </span>
                을 학습하고{" "}
                <span className="underline-neon">
                  만드는 것
                </span>
                을 좋아합니다.
              </div>
              <div>
                <span className="underline-neon">
                  최적의 효율
                </span>
                을 우선시 합니다.
              </div>
              <div>
                <span className="underline-neon">
                  How보다 Why
                </span>
                를 고민합니다.
              </div>
            </div>
            <div
              className=" px-24 pt-24 cursor-pointer animate-bounce"
              onClick={moveToSkill}
            >
              <SlArrowDown size={40} />
            </div>
          </div>
          <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
            {/* <Animation /> */}
          </div>
        </div>
      </section>
    </>
  )
}

export default Body
