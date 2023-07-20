"use client"

// 라벨을 누르면 토글해도 상태가 안바뀌는 이슈가있음.

import { FC, ReactNode } from "react"
import { useTheme } from "next-themes"
import { useEffect, useState } from "react"
import { toggleAtom } from "@/store/state"
import { useAtom } from "jotai"

interface SwitchButtonProps {
  children?: ReactNode
  onClick?: any
  onToggle?: any
  classes?: string
}

const SwitchButton: FC<SwitchButtonProps> = ({
  children,
  onClick,
  onToggle,
  classes,
}) => {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return null
  }

  return (
    <div className="relative inline-flex items-center">
      <label className="cursor-pointer">
        <input
          type="checkbox"
          value=""
          className="sr-only peer"
        />
        {classes === "theme" && (
          <ThemeSwitch onClick={onClick}>
            {children}
          </ThemeSwitch>
        )}
        {classes === "skill" && (
          <SkillSwitch onToggle={onToggle} />
        )}
      </label>
    </div>
  )
}

export default SwitchButton

// Header 항목의 스위치버튼
interface SwitchProps {
  children?: ReactNode
  onClick?: any
  onToggle?: any
}

const ThemeSwitch: FC<SwitchProps> = ({
  children,
  onClick,
}) => {
  const [toggle, setToggle] = useAtom(toggleAtom)

  return (
    <div
      className={`w-14 h-7  peer-focus:outline-none peer-focus:ring-4
    peer-focus:ring-blue-300 dark:peer-focus:ring-blue-300 rounded-full peer
   ${
     toggle
       ? "after:translate-x-full"
       : "after:translate-x-0 "
   }
   ${toggle ? "bg-yellow-200" : "bg-slate-300"}
    peer-checked:after:border-yellow-400 after:content-['']
    after:absolute after:z-10 after:top-0.25  after:bg-white after:border-gray-300
    after:border after:rounded-full after:h-7 after:w-7 
    after:left-[0px] after:transition-all dark:border-gray-600
    `}
      onClick={onClick}
    >
      {children}
    </div>
  )
}

// Skill항목의 스위치버튼

const SkillSwitch: FC<SwitchProps> = ({
  onToggle,
  children,
}) => {
  return (
    <div
      className="
      hidden
      sm:block
      w-10 h-5
      bg-slate-300 peer-focus:outline-none peer-focus:ring-4
    peer-focus:ring-blue-300 dark:peer-focus:ring-blue-300 rounded-full peer
    peer-checked:after:translate-x-full 
    after:content-[''] after:absolute after:z-10 after:top-0.25 after:left-[0px] 
    after:bg-white after:border-gray-300
    after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600
    peer-checked:bg-slate-300 peer-checked:after:border-yellow-400 "
      onClick={onToggle}
    >
      {children}
    </div>
  )
}
