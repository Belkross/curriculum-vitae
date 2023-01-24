import { StaticImage } from "gatsby-plugin-image"
import React from "react"
import { breakpointValues } from "../theme/breakpoints"
import palette from "../theme/palette"
import shadow from "../theme/shadow"
import useScreenSize from "./custom-hooks/use-screen-size"

export default function PhotoWideScreen() {
  const screenWidth = useScreenSize().width

  return (
    <React.Fragment>
      <StaticImage src="../images/photo-pro.jpg" alt="photo of Truong Huy" style={style_image(screenWidth)} />
    </React.Fragment>
  )
}

const style_image = (screenWidth: number) => {
  const display = screenWidth < breakpointValues.lg ? "none" : "flex"
  const size = "200px"
  return {
    width: "100%",
    height: size,
    borderRadius: "6px",
    boxShadow: shadow[3],
    display,
    border: `6px solid ${palette.primary}`,
  }
}
