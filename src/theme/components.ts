import styled from "styled-components"
import palette from "./palette"
import shadow from "./shadow"
import shapes from "./shapes"

export const Button = styled.button`
  background-color: ${palette.primary};
  border: 1px solid ${palette.primary};
  border-radius: ${shapes.borderRadius};
  box-shadow: ${shadow[2]};
  color: ${palette.textButtons};
  font-size: 17px;
  height: ${shapes.buttonSize};
  width: ${shapes.buttonSize};
  :hover {
    background-color: inherit;
  }
`
