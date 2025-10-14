"use client"

import Link from "next/link"
import DarkModeButton from "./DarkModeButton"
import { FC, useState, useEffect } from "react"
import clsx from "clsx"

interface HeaderProps {
  skillRef?: any
  projectRef?: any
  topRef?: any
  careerRef?: any
  contactRef?: any
}

const Header: FC<HeaderProps> = ({
  skillRef,
  projectRef,
  topRef,
  careerRef,
  contactRef,
}) => {
  const [menuOpen, setMenuOpen] = useState(false)

  // 🔒 메뉴 열릴 때 body 스크롤 잠금
  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = "unset"
    }
    return () => {
      document.body.style.overflow = "unset"
    }
  }, [menuOpen])

  const moveTo = (ref: any) => {
    if (ref?.current)
      ref.current.scrollIntoView({ behavior: "smooth" })
    setMenuOpen(false)
  }

  return (
    <header className="fixed z-[100] w-full text-gray-600 body-font bg-primary">
      <div className="container mx-auto flex flex-wrap p-5 flex-row items-center justify-between">
        {/* 로고 */}
        <Link
          href="/"
          className="flex title-font font-medium items-center text-gray-900"
        >
          <span className="ml-3 text-xl">{"JY's."}</span>
        </Link>

        {/* 🌟 햄버거 버튼 (Tailwind 완전 변환 버전) */}
        <div className="flex gap-[20px]">
          <div className="md:hidden">
            <DarkModeButton />
          </div>
          <button
            className="md:hidden relative flex flex-col justify-around w-7 h-7 p-1 bg-transparent border-none cursor-pointer focus:outline-none z-[101]"
            onClick={() => setMenuOpen((p) => !p)}
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
          >
            {/* 3개의 막대 */}
            <span
              className={clsx(
                "block w-5 h-[2px] bg-[#0D0C1D] dark:bg-white rounded-[10px] transition-all duration-300 ease-linear transform origin-center",
                menuOpen
                  ? "translate-y-[7px] rotate-45"
                  : "translate-y-0 rotate-0"
              )}
            ></span>
            <span
              className={clsx(
                "block w-5 h-[2px] bg-[#0D0C1D] dark:bg-white rounded-[10px] transition-opacity duration-200 ease-linear transform origin-center",
                menuOpen ? "opacity-0" : "opacity-100"
              )}
            ></span>
            <span
              className={clsx(
                "block w-5 h-[2px] bg-[#0D0C1D] dark:bg-white rounded-[10px] transition-all duration-300 ease-linear transform origin-center",
                menuOpen
                  ? "-translate-y-[7px] -rotate-45"
                  : "translate-y-0 rotate-0"
              )}
            ></span>
          </button>
        </div>

        {/* 🖥️ PC 네비게이션 */}
        <nav className="hidden md:flex flex-wrap items-center text-base justify-center">
          <button
            onClick={() => moveTo(topRef)}
            className="mr-5 hover:text-gray-300"
          >
            Home
          </button>
          <button
            onClick={() => moveTo(skillRef)}
            className="mr-5 hover:text-gray-300"
          >
            Skills
          </button>
          <button
            onClick={() => moveTo(projectRef)}
            className="mr-5 hover:text-gray-300"
          >
            Projects
          </button>
          <button
            onClick={() => moveTo(careerRef)}
            className="mr-5 hover:text-gray-300"
          >
            Career
          </button>
          <button
            onClick={() => moveTo(contactRef)}
            className="mr-5 hover:text-gray-300"
          >
            Contact
          </button>
          <DarkModeButton />
        </nav>
      </div>

      {/* 📱 모바일 메뉴 (슬라이드 애니메이션 포함) */}

      <div
        id="mobile-menu"
        className={clsx(
          "md:hidden overflow-hidden will-change-[max-height,opacity,transform]",
          "transition-[max-height,opacity,transform] duration-500 ease-in-out",
          // ✅ 라이트/다크 모드별 배경 + 그림자
          "bg-white dark:bg-black shadow-[0_8px_10px_rgba(0,0,0,0.12)] ",
          menuOpen
            ? "max-h-[400px] opacity-100 translate-y-0 pointer-events-auto"
            : "max-h-0 opacity-0 -translate-y-2 pointer-events-none"
        )}
      >
        <div className="flex flex-col px-5 pb-4 pt-2 space-y-2 font-bold text-gray-600 dark:text-white">
          <button
            onClick={() => moveTo(topRef)}
            className="py-2 w-full text-left "
          >
            Home
          </button>
          <button
            onClick={() => moveTo(skillRef)}
            className="py-2 w-full text-left "
          >
            Skills
          </button>
          <button
            onClick={() => moveTo(projectRef)}
            className="py-2 w-full text-left "
          >
            Projects
          </button>
          <button
            onClick={() => moveTo(careerRef)}
            className="py-2 w-full text-left "
          >
            Career
          </button>
          <button
            onClick={() => moveTo(contactRef)}
            className="py-2 w-full text-left "
          >
            Contact
          </button>
        </div>
      </div>
    </header>
  )
}

export default Header
