"use client"

import { FC } from "react"
import Image from "next/legacy/image"

interface ProjectImageProps {
  name: string
  disabled?: boolean
}

const ProjectImage: FC<ProjectImageProps> = ({
  name,
  disabled = false,
}) => {
  return (
    <div
      className={`
      max-w-[354px] h-[354px]
      ${disabled ? "sm:hidden" : ""}`}
    >
      <Image
        className="border-none "
        src={
          name === "TMS"
            ? "/hynix1.png"
            : name === "Market Karly"
            ? "/karly-thumb.png"
            : name === "Restay"
            ? "/restay-thumb.png"
            : name === "Portfolio"
            ? "/portfolio-thumb.png"
            : name === "My Frontend Story"
            ? "/intersection-observer-thumb.png"
            : name == "named"
            ? "/named-thumb.png"
            : name == "당신의 타로"
            ? "/taro-thumb.png"
            : name == "tether green"
            ? "/tethergreen-thumb.png"
            : name == "tethermax"
            ? "/tethermax-thumb.png"
            : name == "풀박사"
            ? "/drfull-thumb.png"
            : name == "tubit"
            ? "/tubit-thumb.png"
            : name == "gseed"
            ? "/gseed-thumb.png"
            : name == "Delivered korea"
            ? "/delivered-thumb.png"
            : name == "Codespace"
            ? "/codespace-thumb.png"
            : ""
        }
        alt="cover image"
        width={100}
        height={100}
        layout="responsive"
        objectFit="cover"
        priority
      />
    </div>
  )
}

export default ProjectImage
