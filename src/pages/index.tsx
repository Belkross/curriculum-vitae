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

export default function IndexPage({}: PageProps) {
  return (
    <GlobalFeatures>
      <Layout>
        <PrimaryContent>
          <Header />
          <ProfileDescription />
          <Experience />
          <Skills />
          <Education />
        </PrimaryContent>
        <SecondaryContent>
          <PhotoWideScreen />
          <PersonalInformations />
          <Hobbies />
        </SecondaryContent>
      </Layout>
    </GlobalFeatures>
  )
}

const PrimaryContent = styled.div`
  padding: 8px;
`
const SecondaryContent = styled.div`
  padding: 8px;
`

export const Head: HeadFC = () => <title>Curriculum Vitae</title>
