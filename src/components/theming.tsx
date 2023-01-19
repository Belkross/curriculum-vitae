import React from "react"
import { ThemeProvider } from "styled-components"

import { useThemeMode } from "./provider-theme-mode"

type Props = {
  children: React.ReactNode
}

export default function Theming({ children }: Props) {
  const themeMode = useThemeMode()

  return <ThemeProvider theme={{ mode: themeMode }}>{children}</ThemeProvider>
}
