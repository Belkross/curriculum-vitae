import React from "react"
import type { HeadFC, PageProps } from "gatsby"
import ProfileDescription from "../components/profile-description"
import Skills from "../components/skills"
import PersonalInformations from "../components/personal-informations"
import Layout from "../components/layout"
import AppBarTop from "../components/app-bar-top"

export default function IndexPage({}: PageProps) {
  return (
    <Layout>
      <AppBarTop />
      <ProfileDescription />
      <PersonalInformations />
      <Skills />
    </Layout>
  )
}

export const Head: HeadFC = () => <title>Curriculum Vitae</title>
