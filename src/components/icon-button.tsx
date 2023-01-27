import { Icon } from "@iconify/react"
import React from "react"
import styled from "styled-components"
import palette from "../theme/palette"
import shadow from "../theme/shadow"
import shapes from "../theme/shapes"

type Props = {
  iconId: string
  disabled?: boolean | undefined
  onClick: () => void
  onMouseEnter?: () => void
  onMouseLeave?: () => void
}

export default function IconButton({ iconId, disabled, onClick, onMouseEnter, onMouseLeave }: Props) {
  const handleClick = () => onClick()
  const handleMouseEnter = () => (onMouseEnter === undefined ? () => {} : onMouseEnter())
  const handleMouseLeave = () => (onMouseLeave === undefined ? () => {} : onMouseLeave())

  return (
    <IconButtonStyled
      disabled={disabled === undefined ? false : disabled}
      onClick={handleClick}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
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
  border-width: 1px;
  border-style: solid;
  border-color: ${palette.primary};
  border-radius: ${shapes.borderRadius};
  box-shadow: ${shadow[2]};
  :hover {
    background-color: inherit;
  }
`
