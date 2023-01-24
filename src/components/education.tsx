import React from "react"
import styled from "styled-components"
import FieldWithIcon from "./field-with-icon"

export default function Education() {
  return (
    <Container>
      <h2>Éducation</h2>
      <FieldWithIcon text="Baccalauréat Scientifique" iconId="mdi:university" />
    </Container>
  )
}

const Container = styled.section`
  text-align: left;
`