type Breakpoints<Type> = {
  xs: Type
  sm: Type
  md: Type
  lg: Type
  xl: Type
  xxl: Type
}
type BreakpointValues = Breakpoints<number>

class StyledBreakpoints implements Breakpoints<string> {
  xs: string
  sm: string
  md: string
  lg: string
  xl: string
  xxl: string

  constructor(values: Breakpoints<number>) {
    const formatToStyledComponent = (key: keyof BreakpointValues) => {
      return `@media (min-width: ${values[key as keyof BreakpointValues]}px)`
    }
    this.xs = formatToStyledComponent("xs")
    this.sm = formatToStyledComponent("sm")
    this.md = formatToStyledComponent("md")
    this.lg = formatToStyledComponent("lg")
    this.xl = formatToStyledComponent("xl")
    this.xxl = formatToStyledComponent("xxl")
  }
}

export const breakpointValues: BreakpointValues = {
  xs: 350,
  sm: 540,
  md: 768,
  lg: 1024,
  xl: 1280,
  xxl: 1536,
}

export default new StyledBreakpoints(breakpointValues)
