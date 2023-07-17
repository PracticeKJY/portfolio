"use client";

import { FC, ReactNode } from "react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

interface SwitchButtonProps {
  children?: ReactNode;
}

const SwitchButton: FC<SwitchButtonProps> = ({ children }) => {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <label className="relative inline-flex items-center cursor-pointer">
      <input type="checkbox" value="" className="sr-only peer" />
      <div
        className="w-14 h-7 bg-slate-300 peer-focus:outline-none peer-focus:ring-4 
      peer-focus:ring-blue-300 dark:peer-focus:ring-blue-300 rounded-full peer
      peer-checked:after:translate-x-full peer-checked:after:border-yellow-400 after:content-[''] 
      after:absolute after:z-10 after:top-0.25 after:left-[0px] after:bg-white after:border-gray-300 
      after:border after:rounded-full after:h-7 after:w-7 after:transition-all dark:border-gray-600
      peer-checked:bg-yellow-200"
        onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      >
        {children}
      </div>
    </label>
  );
};

export default SwitchButton;
