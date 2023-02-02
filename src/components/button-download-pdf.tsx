import { Icon } from "@iconify/react"
import React from "react"
import styled from "styled-components"
import shapes from "../theme/shapes"
import pdf from "../images/cv.pdf"
import { Button } from "../theme/components"

export default function ButtonDownloadPdf() {
  return (
    <Anchor as="a" href={pdf} download>
      <Icon icon="mdi:download" width={shapes.iconSize} />
      <P>pdf</P>
    </Anchor>
  )
}

const Anchor = styled(Button)`
  align-items: center;
  box-sizing: border-box;
  display: flex;
  flex-flow: row nowrap;
  gap: 2px;
  padding: 0 4px;
  width: 70px;
  :hover {
    text-decoration: none;
  }
`
const P = styled.p`
  margin: 0;
`
