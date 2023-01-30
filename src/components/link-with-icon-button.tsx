import React, { useState } from "react"
import styled from "styled-components"
import IconButton from "./icon-button"

type Props = {
  iconId: string
  anchor: string
  href: string
  ariaLabel?: string
}

export default function LinkWithIconButton({ iconId, anchor, href, ariaLabel }: Props) {
  const [mouseOverButton, setMouseOverButton] = useState(false)

  const toggleMouseOverState = () => setMouseOverButton((previousState) => !previousState)
  const handleClick = () => window.open(`https://${href}`, "_blank")

  return (
    <Container>
      <IconButton
        iconId={iconId}
        onClick={handleClick}
        onMouseEnter={toggleMouseOverState}
        onMouseLeave={toggleMouseOverState}
        ariaLabel={ariaLabel}
      />
      <A href={href} mouseOverButton={mouseOverButton}>
        {anchor}
      </A>
    </Container>
  )
}

const Container = styled.div`
  align-items: center;
  display: flex;
  flex-flow: row nowrap;
  gap: 8px;
  justify-content: flex-start;
  margin-bottom: 8px;
  width: 100%;
`
type AnchorProps = {
  mouseOverButton: boolean
}

const A = styled.a<AnchorProps>`
  text-decoration: ${(props) => (props.mouseOverButton ? "underline" : "inherit")};
`
