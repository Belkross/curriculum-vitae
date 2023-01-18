type BreakpointsValues = {
  xs: number
  sm: number
  md: number
  lg: number
  xl: number
  xxl: number
}

type MediaQueries<Type> = {
  [Property in keyof Type]: string
}

class Breakpoints implements MediaQueries<BreakpointsValues> {
  xs = ""
  sm = ""
  md = ""
  lg = ""
  xl = ""
  xxl = ""
  constructor(breakpointValues: BreakpointsValues) {
    for (let property in breakpointValues) {
      this[property as keyof Breakpoints] = `@media (min-width: ${
        breakpointValues[property as keyof BreakpointsValues]
      }px)`
    }
  }
}

export const breakpointValues: BreakpointsValues = {
  xs: 350,
  sm: 640,
  md: 768,
  lg: 1024,
  xl: 1280,
  xxl: 1536,
}

export const breakpoints = new Breakpoints(breakpointValues)