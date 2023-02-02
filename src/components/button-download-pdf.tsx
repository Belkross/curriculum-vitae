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
  align-items: center;
  background-color: ${palette.primary};
  border: 1px solid ${palette.primary};
  border-radius: ${shapes.borderRadius};
  box-shadow: ${shadow[2]};
  box-sizing: border-box;
  color: ${palette.textButtons};
  display: flex;
  flex-flow: row nowrap;
  font-size: 17px;
  gap: 2px;
  height: 35px;
  padding: 0 4px;
  width: 70px;
  :hover {
    background-color: ${palette.secondaryContent};
    text-decoration: none;
  }
`
const P = styled.p`
  margin: 0;
`
