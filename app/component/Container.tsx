"use client"

import { FC, ReactNode } from "react"

interface ContainerProps {
  children: ReactNode
}

const Container: FC<ContainerProps> = ({ children }) => {
  return (
    <section className="mt-20 relative flex flex-col min-h-screen items-center body-font">
      <div className="container mx-auto flex px-5  flex-col items-center">
        {children}
      </div>
    </section>
  )
}

export default Container
