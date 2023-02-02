import React from "react"
import styled from "styled-components"
import ButtonDownloadPdf from "./button-download-pdf"
import ButtonThemeMode from "./button-theme-mode"
import SwitchLanguage from "./switch-language"

export default function ButtonsApp() {
  return (
    <GroupedButtons>
      <ButtonDownloadPdf />
      <Stack>
        <ButtonThemeMode />
        <SwitchLanguage />
      </Stack>
    </GroupedButtons>
  )
}

const GroupedButtons = styled.div`
  align-items: center;
  display: flex;
  flex-flow: row nowrap;
  gap: 8px;
  justify-content: space-between;
  margin-bottom: 16px;
`

const Stack = styled.div`
  align-items: center;
  display: flex;
  flex-flow: row nowrap;
  gap: 8px;
`
