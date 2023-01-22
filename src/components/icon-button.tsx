import { Icon } from "@iconify/react"
import React from "react"
import styled from "styled-components"
import palette from "../theme/palette"
import shapes from "../theme/shapes"

type Props = {
  iconId: string
  onClick: () => void
  disabled?: boolean | undefined
}

export default function IconButton({ iconId, onClick, disabled }: Props) {
  const handleClick = () => onClick()

  return (
    <IconButtonStyled onClick={handleClick} disabled={disabled === undefined ? false : disabled}>
      <Icon icon={iconId} width="25" />
    </IconButtonStyled>
  )
}

const IconButtonStyled = styled.button`
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
