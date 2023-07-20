import Link from "next/link"
import DarkModeButton from "./DarkModeButton"
import { FC, useEffect, useRef } from "react"
import DarkMode from "./DarkMode"

interface HeaderProps {
  skillRef?: any
  projectRef?: any
  topRef?: any
  contactRef?: any
}

const Header: FC<HeaderProps> = ({
  skillRef,
  projectRef,
  topRef,
  contactRef,
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
  const moveToContact = () => {
    if (contactRef) {
      contactRef.current.scrollIntoView({
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
              className="mr-5 hover:text-gray-300"
            >
              Home
            </button>
            <button
              onClick={moveToSkill}
              className="mr-5 hover:text-gray-300"
            >
              Skills
            </button>
            <button
              onClick={moveToProject}
              className="mr-5 hover:text-gray-300"
            >
              Projects
            </button>
            <button
              onClick={moveToContact}
              className="mr-5 hover:text-gray-300"
            >
              Contact
            </button>
            <DarkModeButton />
            {/* <DarkMode /> */}
          </nav>
        </div>
      </header>
    </>
  )
}

export default Header
