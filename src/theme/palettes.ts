import theme from "styled-theming"

type ThemePalette = {
  background: string
  primary: string
  text: string
}

const darkPalette: ThemePalette = {
  background: "#0a1929",
  primary: "red",
  text: "rgba(255, 255, 255, 0.85)",
}

const lightPalette: ThemePalette = {
  ...darkPalette,
  background: "rgba(255, 255, 255, .20)",
  primary: "blue",
  text: "rgba(0, 0, 0, .80)"
}

class Palette {
  [property: string]: theme.ThemeSet

  constructor(darkPalette: ThemePalette, lightPalette: ThemePalette) {
    for (let property of Object.keys(darkPalette)) {
      this[property as keyof Palette] = theme("mode", {
        dark: darkPalette[property as keyof ThemePalette],
        light: lightPalette[property as keyof ThemePalette],
      })
    }
  }
}

export const palette = new Palette(darkPalette, lightPalette)
