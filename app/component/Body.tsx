"use client";

import Animation from "./Animation";
import Link from "next/link";
import Image from "next/legacy/image";
import HomeBackground from "./HomeBackground";

const Body = () => {
  return (
    <>
      <section className="relative flex flex-col items-center justify-center min-h-screen  body-font">
        <HomeBackground />
        <div className="container mx-auto flex px-5 py-24 flex-col items-center">
          <div className="sticky  justify-center items-center lg:flex-grow   flex flex-col  mb-16 md:mb-0 text-center">
            <h1 className="dark:text-white sm:text-3xl text-2xl mb-4 font-medium text-gray-900 ">
              프론트엔드 개발자
              <br />
              <span className="sm:text-4xl text-3xl font-semibold">
                김종엽
              </span>{" "}
              입니다.
              <br />
            </h1>
            <div className="pt-10 hidden sm:inline-block text-xl">
              <div>
                <span className="inline-block relative after:content-['_'] after:inline-block after:absolute after:w-full after:h-[6px] after:bg-purple-200 after:bottom-0 after:left-0">
                  새로운 지식
                </span>
                을 학습하고 <span className="underline-neon">만드는 것</span>을
                좋아합니다.
              </div>
              <div>
                <span className="underline-neon">개인보다 팀</span>을 우선시
                합니다.
              </div>
              <div>
                <span className="underline-neon">How보다 Why</span>를
                고민합니다.
              </div>
            </div>
            {/* <div className="flex justify-center">
            <Link
              href="/project"
              className="inline-flex text-white dark:text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 hover:text-white rounded text-lg"
            >
              프로젝트보러가기
            </Link>
          </div> */}
          </div>
          {/* <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
          <Animation />
        </div> */}
        </div>
      </section>
    </>
  );
};

export default Body;
