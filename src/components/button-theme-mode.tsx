import React from "react"
import { useToggleThemeMode } from "./provider-theme-mode"

export default function ButtonThemeMode() {
  const toggleThemeMode = useToggleThemeMode()

  return <button onClick={toggleThemeMode}>Theme</button>
}
