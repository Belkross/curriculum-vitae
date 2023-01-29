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
  align-items: flex-start;
  display: flex;
  flex-flow: row nowrap;
  gap: 8px;
  justify-content: flex-start;
  margin-bottom: 8px;
  width: 100%;
`

const Typography = styled.p`
  font-style: normal;
  margin: 0;
`
