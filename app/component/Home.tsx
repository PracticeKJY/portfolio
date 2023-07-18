"use client"

import React, { useState, useRef } from "react"
import { Canvas } from "@react-three/fiber"
import { OrbitControls } from "@react-three/drei"
import { Stars } from "@react-three/drei"
import Link from "next/link"
const Home = () => {
  return (
    <div className="relative w-[100vw] h-[100vh] bg-black">
      <Canvas>
        <OrbitControls />
        <ambientLight intensity={0.5} />
        <spotLight position={[10, 15, 10]} angle={0.3} />
        <pointLight position={[-10, -10, -10]} />
        <Stars
          radius={300}
          depth={60}
          count={2000}
          factor={7}
          saturation={0}
          fade={true}
        />
      </Canvas>
      <div className="text-md text-white font-thin absolute z-100 top-[50%] sm:right-[20%] sm:pl-0 pl-10">
        <div>
          <div className="animate-intro opacity-0">
            하나의 점이 이어져 선이 되듯이,
          </div>
          <div className="animate-mid opacity-0">
            과거와 지금의 노력들이 이어져 내일의 나를
            만든다고 생각합니다.
          </div>
          <div className="animate-end opacity-0">
            그렇기에, 저는 오늘도 내일의 나를 위해 하나하나
            천천히 점들을 잇습니다.
          </div>
        </div>
        <Link href={"/about-me"}>{"> 다음으로"}</Link>
      </div>
    </div>
  )
}

export default Home
