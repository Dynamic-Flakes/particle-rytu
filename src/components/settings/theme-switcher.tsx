'use client';

import { useTheme } from "next-themes";
import { Sun } from "../icons/sun";
import { Moon } from "../icons/moon";

export function ThemeSwitcherButton() {
    const { theme, setTheme } = useTheme();  

    return (
        <div 
          onClick={() => theme == 'dark' ? setTheme('light') : setTheme('dark')}
          className="relative flex h-10 w-10 shrink-0 cursor-pointer items-center justify-center rounded-full border border-gray-100 bg-white text-brand shadow-main transition-all hover:-translate-y-0.5 hover:shadow-large focus:-translate-y-0.5 focus:shadow-large focus:outline-none dark:border-gray-700 dark:bg-light-dark dark:text-white sm:h-12 sm:w-12">
            {   
              theme == 'dark' 
              ? <Sun className="h-auto w-4 sm:w-auto" /> 
              : <Moon className="h-auto w-4 sm:w-auto" />
            }
        </div>
    )
}