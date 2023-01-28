import { Icon } from "@iconify/react"
import React from "react"
import styled from "styled-components"
import palette from "../theme/palette"
import shapes from "../theme/shapes"
import pdf from "../images/cv.pdf"
import shadow from "../theme/shadow"

export default function ButtonDownloadPdf() {
  return (
    <Anchor href={pdf} download>
      <Icon icon="mdi:download" width="25" />
      <P>pdf</P>
    </Anchor>
  )
}

const Anchor = styled.a`
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
  gap: 2px;
  height: 34px;
  width: 70px;
  font-size: 17px;
  padding: 0 4px;
  background-color: ${palette.primary};
  border: 1px solid ${palette.primary};
  border-radius: ${shapes.borderRadius};
  box-sizing: border-box;
  box-shadow: ${shadow[2]};
  :hover {
    background-color: ${palette.secondaryContent};
    text-decoration: none;
  }
`
const P = styled.p`
  margin: 0;
`
