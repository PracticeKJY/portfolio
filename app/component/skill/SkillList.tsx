"use client"

import LinearProgress from "@mui/joy/LinearProgress"
import { FC, useEffect, useState } from "react"
import { IoMdCheckbox } from "react-icons/io"

interface SkillListProps {
  name: string
  value: number
  description: string
  toggle: boolean
}

const SkillList: FC<SkillListProps> = ({
  name,
  value,
  description,
  toggle,
}) => {
  return (
    <div className="flex flex-row items-start">
      <div className="flex items-center gap-2 w-[300px] ">
        <IoMdCheckbox size={16} />
        <p>{name}</p>
      </div>
      <div className="hidden sm:block sm:w-[380px] md:w-[480px] lg:w-[580px] ">
        {!toggle ? (
          <div className="sm:w-[200px] md:w-[300px] lg:w-[400px] mt-2">
            <LinearProgress
              determinate
              color="info"
              size="sm"
              variant="outlined"
              value={value}
            />
          </div>
        ) : (
          <p className="text-sm mt-1 mr-1">{description}</p>
        )}
      </div>
      <p>{`${value}%`}</p>
    </div>
  )
}

export default SkillList
