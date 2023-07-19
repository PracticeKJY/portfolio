import Link from "next/link"
import DarkModeButton from "./DarkModeButton"
import { FC, useEffect, useRef } from "react"

interface HeaderProps {
  skillRef?: any
  projectRef?: any
  topRef?: any
}

const Header: FC<HeaderProps> = ({
  skillRef,
  projectRef,
  topRef,
}) => {
  const moveToTop = () => {
    if (topRef) {
      topRef.current.scrollIntoView({ behavior: "smooth" })
    }
  }

  const moveToSkill = () => {
    if (skillRef) {
      skillRef.current.scrollIntoView({
        behavior: "smooth",
      })
    }
  }
  const moveToProject = () => {
    if (projectRef) {
      projectRef.current.scrollIntoView({
        behavior: "smooth",
      })
    }
  }

  return (
    <>
      <header className="fixed z-[100] w-full text-gray-600 body-font bg-primary ">
        <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
          <Link
            href="/"
            className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0"
          >
            <span className="ml-3 text-xl">{"JY's."}</span>
          </Link>
          <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
            <button
              onClick={moveToTop}
              className="mr-5 hover:text-gray-900"
            >
              Home
            </button>
            <button
              onClick={moveToSkill}
              className="mr-5 hover:text-gray-900"
            >
              Skills
            </button>
            <button
              onClick={moveToProject}
              className="mr-5 hover:text-gray-900"
            >
              Projects
            </button>
          </nav>
          <DarkModeButton />
        </div>
      </header>
    </>
  )
}

export default Header
