import React from "react"
import { createGlobalStyle, ThemeProvider } from "styled-components"
import { palette } from "../theme/palettes"
import { useThemeMode } from "./provider-theme-mode"
import "@fontsource/roboto"

type Props = {
  children: React.ReactNode
}

export default function Theming({ children }: Props) {
  const themeMode = useThemeMode()

  return (
    <ThemeProvider theme={{ mode: themeMode }}>
      <GlobalStyle />
      {children}
    </ThemeProvider>
  )
}

const GlobalStyle = createGlobalStyle`
  body {
    background-color: ${palette.background};
    font-family: roboto, sans-serif;
    color: ${palette.text};
    display: flex;
    flex-flow: column nowrap;
    justify-content: start;
    align-items: center;
    padding: 8px;
  }
  h1, h2, h3 {
    text-align: center;
  }
`
