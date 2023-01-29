import React from "react"
import type { HeadFC } from "gatsby"
import ProfileDescription from "../components/profile-description"
import Skills from "../components/skills"
import Informations from "../components/informations"
import Layout from "../components/layout"
import GlobalFeatures from "../components/global-features"
import Education from "../components/education"
import Experience from "../components/experience"
import Hobbies from "../components/hobbies"
import Header from "../components/header"
import styled from "styled-components"
import palette from "../theme/palette"
import shapes from "../theme/shapes"
import shadow from "../theme/shadow"
import breakpoints from "../theme/breakpoints"
import Photo from "../components/photo"

export default function IndexPage() {
  return (
    <GlobalFeatures>
      <Layout>
        <PrimaryContent>
          <Header />
          <Divider />
          <ProfileDescription />
          <Experience />
          <Skills />
        </PrimaryContent>
        <SecondaryContent>
          <Photo primaryContent={false} />
          <Informations />
          <Education />
          <Hobbies />
        </SecondaryContent>
      </Layout>
    </GlobalFeatures>
  )
}

const PrimaryContent = styled.div`
  background-color: ${palette.primaryContent};
  border-radius: ${shapes.borderRadius} 0 0 ${shapes.borderRadius};
  padding: 16px;
  ${breakpoints.lg} {
    padding: 32px;
  }
`
const SecondaryContent = styled.div`
  align-items: center;
  background-color: ${palette.secondaryContent};
  border-radius: 0 ${shapes.borderRadius} ${shapes.borderRadius} 0;
  box-shadow: ${shadow[6]};
  display: flex;
  flex-flow: column nowrap;
  gap: 16px;
  padding: 20px;
  ${breakpoints.sm} {
    padding: 32px;
  }
`
const Divider = styled.hr`
  border-color: ${palette.primary};
  border-style: solid;
  border-width: 3px;
  margin: 20px 0;
`
export const Head: HeadFC = () => <title>Curriculum Vitae</title>
