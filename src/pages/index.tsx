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
import PhotoWideScreen from "../components/photo-wide-screen"
import styled from "styled-components"
import palette from "../theme/palette"
import shapes from "../theme/shapes"
import shadow from "../theme/shadow"

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
          <PhotoWideScreen />
          <PersonalInformations />
          <Education />
          <Hobbies />
        </SecondaryContent>
      </Layout>
    </GlobalFeatures>
  )
}

const PrimaryContent = styled.div`
  padding: 32px;
  background-color: ${palette.primaryContent};
  border-radius: ${shapes.borderRadius} 0 0 ${shapes.borderRadius};
`
const SecondaryContent = styled.div`
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
  gap: 16px;
  padding: 32px;
  box-shadow: ${shadow[6]};
  background-color: ${palette.secondaryContent};
  border-radius: 0 ${shapes.borderRadius} ${shapes.borderRadius} 0;
`
const Divider = styled.hr`
  border-color: ${palette.primary};
  border-width: 3px;
  border-style: solid;
  border-radius: ${shapes.borderRadius};
  margin: 20px 0;
/*   width: 3px;
  height: 9px; */
`
export const Head: HeadFC = () => <title>Curriculum Vitae</title>
