import React from "react"
import IconButton from "./icon-button"
import { useThemeMode, useToggleThemeMode } from "./provider-theme-mode"

export default function ButtonThemeMode() {
  const toggleThemeMode = useToggleThemeMode()
  const iconId = useThemeMode() === "dark" ? "mdi:weather-night" : "mdi:white-balance-sunny"

  return <IconButton iconId={iconId} onClick={toggleThemeMode} />
}
