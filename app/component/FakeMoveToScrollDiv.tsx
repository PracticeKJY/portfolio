"use client"

import { ReactNode, forwardRef } from "react"

type refProps = HTMLDivElement

const FakeMoveToScrollDiv = forwardRef<refProps>(
  (_, ref) => {
    return <div className="" ref={ref}></div>
  }
)

FakeMoveToScrollDiv.displayName = "scrollPin"

export default FakeMoveToScrollDiv
