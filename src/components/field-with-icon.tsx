import React from "react"
import styled from "styled-components"
import IconButton from "./icon-button"

type Props = {
  iconId: string
  text: string
}

export default function FieldWithIcon({ iconId, text }: Props) {
  return (
    <Container>
      <IconButton
        iconId={iconId}
        onClick={() => {
          console.log(text)
        }}
      />
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

const Typography = styled.p`
  font-style: normal;
  margin: 0;
`
