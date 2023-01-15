import React, { createContext, ReactElement, useContext, useState } from "react"

export type ThemeModeValue = "light" | "dark"

const defaultThemeMode: ThemeModeValue = "dark"

const ThemeModeContext = createContext<ThemeModeValue>(defaultThemeMode)
export const useThemeMode = () => useContext(ThemeModeContext)

const ToggleThemeModeContext = createContext(() => {})
export const useToggleThemeMode = () => useContext(ToggleThemeModeContext)

type Props = {
  children: ReactElement
}

export default function ProviderThemeMode({ children }: Props) {
  const [themeMode, setThemeMode] = useState(defaultThemeMode)

  const toggleThemeMode = () => {
    const newState: ThemeModeValue = themeMode === "dark" ? "light" : "dark"
    setThemeMode(newState)
  }

  return (
    <ThemeModeContext.Provider value={themeMode}>
      <ToggleThemeModeContext.Provider value={toggleThemeMode}>{children}</ToggleThemeModeContext.Provider>
    </ThemeModeContext.Provider>
  )
}
