import theme from "styled-theming"

type PaletteKeys = typeof paletteKeys[number]
type Palette = Record<PaletteKeys, string>
type StyledThemingPalette = Record<PaletteKeys, theme.ThemeSet>
type Palettes = typeof palettes
type ModeValues<Type> = {
  [Property in keyof Type]: string
}

const paletteKeys = [
  "primary",
  "secondary",
  "background",
  "primaryContent",
  "secondaryContent",
  "paper",
  "text",
  "textButtons",
  "disabled",
  "h2",
  "h3",
] as const

const darkPalette: Palette = {
  primary: "#54930E",
  secondary: "#E46606",
  background: "#263238",
  primaryContent: "#062340",
  secondaryContent: "#133551",
  paper: "#132f4c",
  text: "rgba(255, 255, 255, 0.85)",
  textButtons: "white",
  disabled: "grey",
  h2: "#67AC1C",
  h3: "#E46606",
}

const lightPalette: Palette = {
  ...darkPalette,
  primary: "#51a654",
  secondary: "#DB6132",
  background: "#b7c1c7",
  primaryContent: "#d9e3f0",
  secondaryContent: "#b9c7d9",
  text: "rgba(0, 0, 0, .80)",
  textButtons: "rgba(0, 0, 0, .80)",
  h2: "#036005",
  h3: "#b13606",
}

const palettes = {
  light: lightPalette,
  dark: darkPalette,
}

export default createStyledThemingPalette(paletteKeys, palettes)

function formatToStyledTheming(key: PaletteKeys, palettes: Palettes) {
  const modeValues: ModeValues<Palettes> = { light: palettes.light[key], dark: palettes.dark[key] }
  return theme("mode", modeValues)
}

function createStyledThemingPalette(keys: typeof paletteKeys, palettes: Palettes) {
  const entries = keys.map((key) => [key, formatToStyledTheming(key, palettes)])
  return Object.fromEntries(entries) as StyledThemingPalette
}
