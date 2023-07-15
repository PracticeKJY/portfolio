"use client";

import Animation from "./Animation";
import Link from "next/link";

const Body = () => {
  return (
    <section className="flex flex-column items-center justify-center min-h-screen text-gray-600 body-font">
      <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
        <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          <h1 className="dark:text-white sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
            안녕하세요. 김종엽입니다.
            <div className="hidden lg:inline-block text-xl">
              How보다 Why를 고민하며 성장하는 프론트엔드 개발자입니다.
            </div>
          </h1>
          <p className="mb-8 leading-relaxed">
            여기에는 3개의 카드가 시간차를 두고 천천히 나오는 식으로 구현할 예정
          </p>
          <div className="flex justify-center">
            <Link
              href="/project"
              className="inline-flex text-white dark:text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 hover:text-white rounded text-lg"
            >
              프로젝트보러가기
            </Link>
          </div>
        </div>
        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
          <Animation />
        </div>
      </div>
    </section>
  );
};

export default Body;
