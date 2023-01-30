import React from "react"
import IconButton from "./icon-button"
import { useThemeMode, useToggleThemeMode } from "./provider-theme-mode"

export default function ButtonThemeMode() {
  const toggleThemeMode = useToggleThemeMode()
  const iconId = useThemeMode() === "dark" ? "material-symbols:dark-mode-rounded" : "mdi:white-balance-sunny"

  return <IconButton iconId={iconId} onClick={toggleThemeMode} ariaLabel="dark mode" />
}
