import React from "react"
import styled from "styled-components"
import { Icon } from "@iconify/react"

type Props = {
  iconId: string
  text: string
}

export default function SkillWithIcon({ iconId, text }: Props) {
  return (
    <Container>
      <Icon icon={iconId} width="25" />
      <Typography>{text}</Typography>
    </Container>
  )
}

const Container = styled.div`
  display: flex;
  flex-flow: row nowrap;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 8px;
  margin-bottom: 8px;
  width: 100%;
`

const Typography = styled.p`
  font-style: normal;
  margin: 0;
`
