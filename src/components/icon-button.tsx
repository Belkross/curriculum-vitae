import { Icon } from "@iconify/react"
import React from "react"
import styled from "styled-components"
import doNothing from "../functions/do-nothing"
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
  const handleMouseEnter = () => (onMouseEnter === undefined ? doNothing() : onMouseEnter())
  const handleMouseLeave = () => (onMouseLeave === undefined ? doNothing() : onMouseLeave())

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
  align-items: center;
  background-color: ${palette.primary};
  border-color: ${palette.primary};
  border-radius: ${shapes.borderRadius};
  border-style: solid;
  border-width: 1px;
  box-shadow: ${shadow[2]};
  color: ${palette.text};
  display: flex;
  flex-shrink: 0;
  height: 35px;
  justify-content: center;
  padding: 0;
  width: 35px;
  :hover {
    background-color: inherit;
  }
`
