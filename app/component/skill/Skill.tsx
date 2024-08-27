"use client"

import { useAtomValue } from "jotai"
import {
  BackEndLists,
  EtcLists,
  FrontEndLists,
  LanguageLists,
} from "@/store/state"
import SkillCard from "./SkillCard"
import { forwardRef } from "react"

type refProps = HTMLDivElement

const Skill = forwardRef<refProps>((_, ref) => {
  const language = useAtomValue(LanguageLists)
  const frontEnd = useAtomValue(FrontEndLists)
  const backEnd = useAtomValue(BackEndLists)
  const etc = useAtomValue(EtcLists)

  return (
    <>
      <div className="grid grid-cols-1 gap-6 p-6 animate-intersection opacity-0">
        <SkillCard list={language} />
        <SkillCard list={frontEnd} />
        <SkillCard list={backEnd} />
        <SkillCard list={etc} />
      </div>
    </>
  )
})

Skill.displayName = "Skill"

export default Skill
