import React, { createContext, ReactElement, useContext, useEffect, useState } from "react"
import doNothing from "../functions/do-nothing"
import localStorageKeys from "../local-storage-keys"

export type ThemeModeValue = "light" | "dark"
const defaultThemeMode: ThemeModeValue = "light"

const ThemeModeContext = createContext<ThemeModeValue>(defaultThemeMode)
export const useThemeMode = () => useContext(ThemeModeContext)

const ToggleThemeModeContext = createContext(doNothing)
export const useToggleThemeMode = () => useContext(ToggleThemeModeContext)

type Props = {
  children: ReactElement
}

export default function ProviderThemeMode({ children }: Props) {
  const [themeMode, setThemeMode] = useState(defaultThemeMode)

  const toggleThemeMode = () => {
    const newState: ThemeModeValue = themeMode === "dark" ? "light" : "dark"
    setThemeMode(newState)
    localStorage.setItem(localStorageKeys.themeMode, newState)
  }

  useEffect(() => {
    const themeModePreference = localStorage.getItem(localStorageKeys.themeMode)
    if (themeModePreference === "dark" || themeModePreference === "light") setThemeMode(themeModePreference)
  }, [])

  return (
    <ThemeModeContext.Provider value={themeMode}>
      <ToggleThemeModeContext.Provider value={toggleThemeMode}>{children}</ToggleThemeModeContext.Provider>
    </ThemeModeContext.Provider>
  )
}
