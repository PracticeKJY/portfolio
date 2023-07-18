"use client"

import Container from "../Container"
import Image from "next/image"
import SkillList from "./SkillList"
import SwitchButton from "../SwitchButton"
import { useAtomValue } from "jotai"
import {
  BackEndLists,
  EtcLists,
  FrontEndLists,
  LanguageLists,
} from "@/store/state"
import SkillCard from "./SkillCard"

const Skill = () => {
  const language = useAtomValue(LanguageLists)
  const frontEnd = useAtomValue(FrontEndLists)
  const backEnd = useAtomValue(BackEndLists)
  const etc = useAtomValue(EtcLists)

  return (
    <Container>
      <div className="w-full flex items-start pb-[6px] border-b-[1px] border-slate-800 dark:border-white">
        <div className="text-3xl font-semibold">Skills</div>
      </div>
      {/* <div className="grid grid-cols-1 gap-6 p-6 lg:grid-cols-2"> */}
      <div className="grid grid-cols-1 gap-6 p-6 ">
        <SkillCard list={language} />
        <SkillCard list={frontEnd} />
        <SkillCard list={backEnd} />
        <SkillCard list={etc} />
      </div>
    </Container>
  )
}

export default Skill
