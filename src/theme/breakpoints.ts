type BreakpointKeys = typeof breakpointKeys[number]
type BreakpointValues = Record<BreakpointKeys, number>
type Breakpoints = Record<BreakpointKeys, string>

const breakpointKeys = ["xs", "sm", "md", "lg", "xl", "xxl"] as const

export const breakpointValues: BreakpointValues = {
  xs: 350,
  sm: 540,
  md: 650,
  lg: 840,
  xl: 1280,
  xxl: 1536,
}

export default createBreakPoints(breakpointKeys, breakpointValues)

function createMediaQueryString(value: number) {
  return `@media (min-width: ${value}px)`
}

function createBreakPoints(keys: typeof breakpointKeys, breakpointValues: BreakpointValues) {
  const entries = keys.map((key) => [key, createMediaQueryString(breakpointValues[key])])
  return Object.fromEntries(entries) as Breakpoints
}
