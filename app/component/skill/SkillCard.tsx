"use client"

import { FC, useCallback, useState } from "react"
import SwitchButton from "../SwitchButton"
import SkillList from "./SkillList"

interface SkillCardProps {
  list: any
}

const SkillCard: FC<SkillCardProps> = ({ list }) => {
  const [toggle, setToggle] = useState(false)

  const onToggle = useCallback(() => {
    setToggle(!toggle)
  }, [toggle])

  // console.log("toggle", toggle)

  return (
    <div className="project-card">
      <div className="p-4 pb-6 flex flex-col gap-4">
        <div className="flex flex-row justify-between items-center ">
          <div className="text-xl font-bold">
            {list[0].title}
          </div>
          <div className=" flex flex-row gap-4">
            <SwitchButton
              classes="skill"
              onToggle={onToggle}
            />
          </div>
        </div>
        {list[0].items.map((data: any) => {
          return (
            <li key={data.id}>
              <SkillList
                name={data.name}
                value={data.value}
                toggle={toggle}
                description={data.description}
              />
            </li>
          )
        })}
      </div>
    </div>
  )
}

export default SkillCard
