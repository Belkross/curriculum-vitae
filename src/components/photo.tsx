import React from "react"
import styled from "styled-components"
import breakpoints from "../theme/breakpoints"
import shadow from "../theme/shadow"
import image from "../images/photo-pro.jpg"
import { useLanguage } from "./provider-language"
import { PageContent } from "../types/types"
import shapes from "../theme/shapes"

type PhotoProps = {
  primaryContent: boolean
}

export default function Photo({ primaryContent }: PhotoProps) {
  const lang = useLanguage()

  return <Img src={image} alt={content.alt[lang]} primaryContent={primaryContent} />
}

const content: PageContent = {
  alt: {
    fr: "photo de Truong Huy",
    en: "photo of Truong Huy",
  },
}

type ImgProps = {
  primaryContent: boolean
}

const Img = styled.img<ImgProps>`
  width: 180px;
  height: 200px;
  display: ${(props) => (props.primaryContent ? "flex" : "none")};
  border-radius: ${shapes.borderRadius};
  box-shadow: ${shadow[2]};
  border: 1px solid white;
  ${breakpoints.sm} {
    width: 140px;
    height: 155px;
  }
  ${breakpoints.lg} {
    width: 200px;
    height: 220px;
    display: ${(props) => (props.primaryContent ? "none" : "flex")};
  }
`
