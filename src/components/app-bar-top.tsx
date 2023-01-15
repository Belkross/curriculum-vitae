import React from "react"
import { useToggleThemeMode } from "./provider-theme-mode"

type Props = {}

export default function AppBarTop({}: Props) {
  const toggleThemeMode = useToggleThemeMode()
  const handleClick = () => toggleThemeMode()
  
  return <button onClick={handleClick}>Theme</button>
}
