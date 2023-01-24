import theme from "styled-theming"

type PaletteObject<Type> = {
  primary: Type
  background: Type
  primaryContent: Type
  secondaryContent: Type
  paper: Type
  text: Type
  disabled: Type
  h2: Type
  h3: Type
}
type CssPalette = PaletteObject<string>

class StyledThemingPalette implements PaletteObject<theme.ThemeSet> {
  primary: theme.ThemeSet
  background: theme.ThemeSet
  primaryContent: theme.ThemeSet
  secondaryContent: theme.ThemeSet
  paper: theme.ThemeSet
  text: theme.ThemeSet
  disabled: theme.ThemeSet
  h2: theme.ThemeSet
  h3: theme.ThemeSet

  constructor(darkPalette: CssPalette, lightPalette: CssPalette) {
    const setStyledTheming = (property: keyof StyledThemingPalette) => {
      return theme("mode", {
        dark: darkPalette[property],
        light: lightPalette[property],
      })
    }
    this.primary = setStyledTheming("primary")
    this.background = setStyledTheming("background")
    this.primaryContent = setStyledTheming("primaryContent")
    this.secondaryContent = setStyledTheming("secondaryContent")
    this.paper = setStyledTheming("paper")
    this.text = setStyledTheming("text")
    this.disabled = setStyledTheming("disabled")
    this.h3 = setStyledTheming("h3")
    this.h2 = setStyledTheming("h2")
  }
}

const darkPalette: CssPalette = {
  //primary: "#df6202", //orange
  //primary: "#D02727", //red
  primary: "#54930E",
  background: "#263238",
  primaryContent: "#062340",
  secondaryContent: "#133551",
  paper: "#132f4c",
  text: "rgba(255, 255, 255, 0.85)",
  disabled: "grey",
  h2: "#67AC1C",
  h3: "#EF6A05",
}

const lightPalette: CssPalette = {
  ...darkPalette,
  primary: "#51a654",
  background: "#b7c1c7",
  primaryContent: "#d9e3f0",
  secondaryContent: "#b9c7d9",
  text: "rgba(0, 0, 0, .80)",
  h2: "#036005",
  h3: "#b13606"
}

export default new StyledThemingPalette(darkPalette, lightPalette)
