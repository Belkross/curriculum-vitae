import theme from "styled-theming"

type PaletteObject<Type> = {
  primary: Type
  background: Type
  primaryContent: Type
  secondaryContent: Type
  paper: Type
  text: Type
  disabled: Type
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
    this.disabled= setStyledTheming("disabled")
  }
}

const darkPalette: CssPalette = {
  primary: "#196a98",
  background: "#0a1929",
  primaryContent: "#0c2750",
  secondaryContent: "#04214d",
  paper: "#4072bf",
  text: "rgba(255, 255, 255, 0.85)",
  disabled: "grey",
}

const lightPalette: CssPalette = {
  ...darkPalette,
  background: "rgba(255, 255, 255, .20)",
  primary: "blue",
  text: "rgba(0, 0, 0, .80)",
}

export default new StyledThemingPalette(darkPalette, lightPalette)
