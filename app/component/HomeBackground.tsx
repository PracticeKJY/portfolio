"use client";

import { useTheme } from "next-themes";
import Image from "next/legacy/image";
import { useEffect, useState } from "react";

const HomeBackground = () => {
  const { theme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <Image
      className="absolute"
      src={theme === "light" ? "/spinner.svg" : "/dark-spinner.svg"}
      layout="fill"
      alt=""
      priority
    />
  );
};

export default HomeBackground;
