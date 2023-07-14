"use client";

import { ThemeProvider } from "next-themes";
import { FC, ReactNode } from "react";

interface DarkModeProviderProps {
  children: ReactNode;
}

const DarkModeProvider: FC<DarkModeProviderProps> = ({ children }) => {
  return (
    <ThemeProvider attribute="class" defaultTheme={"light"}>
      {children}
    </ThemeProvider>
  );
};

export default DarkModeProvider;
