import React, { createContext, useContext, useState } from "react"

const theme = typeof window !== "undefined" && localStorage.getItem("theme")

export const themeContext = createContext<any>({})
export const useTheme = () => useContext(themeContext)

export function ThemeProvider({ children }) {
  const [darkMode, setDarkMode] = useState(
    theme === "dark" ||
      (!theme && window.matchMedia("(prefers-color-scheme: dark)").matches)
  )

  function toggleDarkMode(e) {
    if (e) {
      localStorage.setItem("theme", "dark")
    } else {
      localStorage.setItem("theme", "light")
    }
    setDarkMode(e)
  }

  return (
    <themeContext.Provider value={{ darkMode, toggleDarkMode }}>
      {children}
    </themeContext.Provider>
  )
}
