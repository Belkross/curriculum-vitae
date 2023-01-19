import React from "react"
import styled from "styled-components"
import FieldWithIcon from "./field-with-icon"

export default function Hobbies() {
  return (
    <Container>
      <h2>Centres d’intérêts</h2>
      <FieldWithIcon text="Lecture" iconId="mdi:book-open-page-variant" />
      <FieldWithIcon text="Badminton" iconId="mdi:badminton" />
      <FieldWithIcon text="Jeux de sociétés" iconId="mdi:dice-multiple" />
      <FieldWithIcon text="Jeux vidéos" iconId="mdi:controller" />
    </Container>
  )
}

const Container = styled.section`
  width: 100%;
`
