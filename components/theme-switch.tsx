"use client"

import { useTheme } from "@/context/theme-context"
import { BsMoon, BsSun } from "react-icons/bs";


export default function ThemeSwitch() {
  const { theme, toggleTheme } = useTheme();

  return (
    <button className='fixed bottom-10 right-10 bg-white w-[2.5rem] h-[2.5rem] bg-opacity-80 backdrop-blur-[0.5rem] border border-white border-opacity-40 shadow-2xl rounded-full flex items-center justify-center hover:scale-[1.15] active:scale-105 transition-all dark:bg-gray-950'
    onClick={toggleTheme}
    >
      {
        theme === "light" ? <BsSun /> : <BsMoon />
      }
    </button>
  )
}
