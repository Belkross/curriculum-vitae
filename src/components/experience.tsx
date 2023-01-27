import React from "react"
import fullfillNonDefaultLanguageFields from "../functions/fulfill-non-default-language-fields"
import { PageContent } from "../types/types"
import ProjectExperience, { ProjectExperienceProps } from "./project-experiences/project-experience"
import { useLanguage } from "./provider-language"

export default function Experience() {
  const lang = useLanguage()

  const experiences = experiencesContent.map((experience, index) => {
    return <ProjectExperience key={index} {...experience} />
  })

  return (
    <section>
      <h2>{content.title[lang]}</h2>
      {experiences}
    </section>
  )
}

const content: PageContent = {
  title: {
    fr: "Réalisations",
    en: "Personal projects",
  },
}

const experiencesContent: ProjectExperienceProps[] = [
  fullfillNonDefaultLanguageFields({
    title: {
      fr: "Ricochet",
    },
    projectType: {
      fr: "Single-page application: ",
    },
    description: {
      fr: "une reproduction online d’un jeu de société créé par Cyril Blondel. L’application permet à plusieurs personnes de jouer en même temps sur la même partie.",
      en: "an online reproduction of a board game created by Cyril Blondel. The app allows multiple players to play at the same time.",
    },
    features: {
      fr: "une interface de jeu connectée en temps réel avec WebSocket, un chat, design moderne et responsive.",
      en: "a connected game interface in real time with WebSocket, a chat, modern and responsive design.",
    },
    builtWith: {
      fr: "Typescript, React, Express, Mongodb, Socket.io, Mui, Render, Netlify",
    },
    url: {
      fr: "https://ricochet.belkross.com",
    },
  }) as ProjectExperienceProps,
  fullfillNonDefaultLanguageFields({
    title: {
      fr: "Esquive",
    },
    projectType: {
      fr: "Single-page application: ",
    },
    description: {
      fr: "un jeu de société créé par moi-même. L’application permet à n’importe qui de créer un salon de jeu et d’y inviter jusqu’à 8 joueurs.",
      en: "a board game created by myself. The app allows anybody to create a room and invite up to eight players.",
    },
    features: {
      fr: "une interface de jeu connectée et unique à chaque joueur en fonction de son équipe, son rôle et l’état de la partie. Modification des conditions de victoire et administration du salon de jeu par les joueurs. Responsive design.",
      en: "a game interface connected and unique to each player depending on his team, his role and the state of the game. Modification of victory conditions and administration of the game room by players themselves. Responsive design.",
    },
    builtWith: {
      fr: "Typescript, React, Express, Socket.io, Mui, Heroku, Netlify.",
    },
    url: {
      fr: "https://www.esquive.belkross.com",
    },
  }) as ProjectExperienceProps,
  fullfillNonDefaultLanguageFields({
    title: {
      fr: "Scootin",
    },
    projectType: {
      fr: "Site vitrine: ",
      en: "Presentation website: ",
    },
    description: {
      fr: "un site de présentation pensé pour une compagnie de location de scooter fictive. Tout le contenu du site est connecté à un CMS et confortablement éditable par des non développeurs. Une attention particulière a été mise sur les performances d’affichage, le SEO et l’accessibilité.",
      en: "a showcase site thought for a fictitious scooter rental company. All the site is connected to a CMS and easily editable by non-developers. Particular attention has been paid to display performance, SEO and accessibility.",
    },
    features: {
      fr: "multilangue, note Lighthouse de 95/100 en moyenne, dark mode, design moderne et responsive.",
      en: "multilingual, Lighthouse note 95/100 average, dark mode, modern and responsive design.",
    },
    builtWith: {
      fr: "React, Gatsby, GraphQL, DatoCMS, Mui, Netlify.",
    },
    url: {
      fr: "https://scootin.belkross.com",
    },
  }) as ProjectExperienceProps,
]
