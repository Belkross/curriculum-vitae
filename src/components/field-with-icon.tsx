import { Icon } from "@iconify/react"
import React from "react"
import styled from "styled-components"
import shapes from "../theme/shapes"

type Props = {
  iconId: string
  text: string
}

export default function FieldWithIcon({ iconId, text }: Props) {
  return (
    <Container>
      <StyledIcon icon={iconId} />
      <Typography>{text}</Typography>
    </Container>
  )
}

const Container = styled.div`
  align-items: center;
  display: flex;
  flex-flow: row nowrap;
  gap: 8px;
  justify-content: flex-start;
  margin-bottom: 8px;
  width: 100%;
`

const StyledIcon = styled(Icon)`
  flex-shrink: 0;
  height: ${shapes.iconSize + 4}px;
  width: ${shapes.iconSize + 4}px;
`

const Typography = styled.p`
  font-style: normal;
  margin: 0;
`
