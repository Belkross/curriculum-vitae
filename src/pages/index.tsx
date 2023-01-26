import React from "react"
import type { HeadFC, PageProps } from "gatsby"
import ProfileDescription from "../components/profile-description"
import Skills from "../components/skills"
import PersonalInformations from "../components/personal-informations"
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

export default function IndexPage({}: PageProps) {
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
          <Photo primaryContent={false}/>
          <PersonalInformations />
          <Education />
          <Hobbies />
        </SecondaryContent>
      </Layout>
    </GlobalFeatures>
  )
}

const PrimaryContent = styled.div`
  padding: 16px;
  background-color: ${palette.primaryContent};
  border-radius: ${shapes.borderRadius} 0 0 ${shapes.borderRadius};
  ${breakpoints.lg} {
    padding: 32px;
  }
`
const SecondaryContent = styled.div`
  display: flex;
  flex-flow: column nowrap;
  gap: 16px;
  padding: 20px;
  box-shadow: ${shadow[6]};
  background-color: ${palette.secondaryContent};
  border-radius: 0 ${shapes.borderRadius} ${shapes.borderRadius} 0;
  ${breakpoints.sm} {
    padding: 32px;
  }
`
const Divider = styled.hr`
  border-color: ${palette.primary};
  border-width: 3px;
  border-style: solid;
  margin: 20px 0;
`
export const Head: HeadFC = () => <title>Curriculum Vitae</title>
