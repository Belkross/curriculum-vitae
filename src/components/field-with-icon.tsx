import React from "react"
import { Icon } from "@iconify/react"
import styled from "styled-components"
import palette from "../theme/palette"
import shapes from "../theme/shapes"

type Props = {
  iconId: string
  text: string
}

export default function FieldWithIcon({ iconId, text }: Props) {
  return (
    <Container>
      <Button>
        <Icon icon={iconId} width="25" />
      </Button>
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

const Button = styled.button`
  display: flex;
  flex-shrink: 0;
  align-items: center;
  justify-content: center;
  background-color: ${palette.primary};
  color: ${palette.text};
  width: 35px;
  height: 35px;
  padding: 0;
  border-width: 0px;
  border-style: solid;
  border-color: ${palette.paper};
  border-radius: ${shapes.borderRadius};
  :hover {
    background-color: ${palette.primary};
  }
`
const Typography = styled.p`
  font-style: normal;
`
