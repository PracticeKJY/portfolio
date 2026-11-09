"use client"

import { useAtomValue } from "jotai"
import {
  BackEndLists,
  FrontEndLists,
  LanguageLists,
  AIToolsLists,
} from "@/store/state"
import SkillCard from "./SkillCard"
import { forwardRef } from "react"

type refProps = HTMLDivElement

const Skill = forwardRef<refProps>((_, ref) => {
  const language = useAtomValue(LanguageLists)
  const frontEnd = useAtomValue(FrontEndLists)
  const backEnd = useAtomValue(BackEndLists)
  const ai = useAtomValue(AIToolsLists)

  return (
    <>
      <div className="grid grid-cols-1 gap-6 p-6 animate-intersection opacity-0">
        <SkillCard list={language} />
        <SkillCard list={frontEnd} />
        <SkillCard list={backEnd} />
        <SkillCard list={ai} />
      </div>
    </>
  )
})

Skill.displayName = "Skill"

export default Skill
