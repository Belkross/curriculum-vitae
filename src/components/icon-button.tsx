import { Icon } from "@iconify/react"
import React from "react"
import styled from "styled-components"
import doNothing from "../functions/do-nothing"
import { Button } from "../theme/components"
import shapes from "../theme/shapes"

type Props = {
  iconId: string
  disabled?: boolean | undefined
  onClick: () => void
  onMouseEnter?: () => void
  onMouseLeave?: () => void
  ariaLabel?: string
}

export default function IconButton({ iconId, disabled, onClick, onMouseEnter, onMouseLeave, ariaLabel }: Props) {
  const handleClick = () => onClick()
  const handleMouseEnter = () => (onMouseEnter === undefined ? doNothing() : onMouseEnter())
  const handleMouseLeave = () => (onMouseLeave === undefined ? doNothing() : onMouseLeave())

  return (
    <IconButtonStyled
      disabled={disabled === undefined ? false : disabled}
      onClick={handleClick}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      aria-label={ariaLabel}
    >
      <Icon icon={iconId} width={shapes.iconSize} />
    </IconButtonStyled>
  )
}

const IconButtonStyled = styled(Button)`
  align-items: center;
  display: flex;
  flex-shrink: 0;
  justify-content: center;
  padding: 0;
`
