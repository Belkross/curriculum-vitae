import { Icon } from "@iconify/react"
import React from "react"
import styled from "styled-components"

type Props = {
  iconId: string
  text: string
}

export default function FieldWithIcon({ iconId, text }: Props) {
  return (
    <Container>
      <Icon icon={iconId} width="28px" height="28px" style={style_icon} />
      <Typography>{text}</Typography>
    </Container>
  )
}

const Container = styled.div`
  display: flex;
  flex-flow: row nowrap;
  justify-content: flex-start;
  align-items: center;
  gap: 8px;
  margin-bottom: 8px;
  width: 100%;
`

const style_icon = {
  flexShrink: 0,
}

const Typography = styled.p`
  font-style: normal;
  margin: 0;
`
