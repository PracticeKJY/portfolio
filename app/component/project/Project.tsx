import { Suspense } from "react"
import Content from "./Content"

const Project = () => {
  return (
    <>
      <Suspense fallback={<div>로딩중...</div>}>
        <Content />
      </Suspense>
    </>
  )
}

export default Project
