import React from "react"
import fullfillNonDefaultLanguageFields from "../functions/fulfill-non-default-language-fields"
import ProjectExperience, { ProjectExperienceProps } from "./project-experience"

export default function Experience() {
  const experiences = content.map((experience, index) => {
    return <ProjectExperience key={index} {...experience} />
  })

  return (
    <section>
      <h2>Réalisations</h2>
      {experiences}
    </section>
  )
}

const content: ProjectExperienceProps[] = [
  fullfillNonDefaultLanguageFields({
    title: {
      fr: "Ricochet",
    },
    type: {
      fr: "Single-page application:",
    },
    description: {
      fr: " une reproduction online d’un jeu de société existant et créé par Cyril Blondel. L’application permet à plusieurs personnes de jouer en même temps sur la même partie.",
    },
    features: {
      fr: "Une interface connecté en temps réel avec WebSocket, un chat, design moderne et responsive.",
    },
    builtWith: {
      fr: "Typescript, React, Express, Mongodb, Socket.io, Mui, Render, Netlify",
    },
  }) as ProjectExperienceProps,
  fullfillNonDefaultLanguageFields({
    title: {
      fr: "Esquive",
    },
    type: {
      fr: "Single-page application:",
    },
    description: {
      fr: " un jeu de société créé par moi-même. L’application permet à n’importe qui de créer un salon de jeu et d’y inviter qui il souhaite.",
    },
    features: {
      fr: "une interface connectée et unique à chaque joueur (en fonction de son équipe, son rôle et l’état de la partie). Modification des conditions de victoire et administration du salon de jeu par les joueurs. Responsive design.",
    },
    builtWith: {
      fr: "Typescript, React, Express, Socket.io, Mui, Heroku, Netlify.",
    },
  }) as ProjectExperienceProps,
  fullfillNonDefaultLanguageFields({
    title: {
      fr: "Scootin",
    },
    type: {
      fr: "Site vitrine:",
    },
    description: {
      fr: " Un site commercial pensé pour une compagnie de location de scooter fictive. Tout le contenu du site est connecté à un CMS et éditable par des non développeurs. Une attention particulière a été mise sur les performances d’affichage, le SEO et l’accessibilité.",
    },
    features: {
      fr: "multilangue, diagnostic Lighthouse 95/100 de moyenne, dark mode, design moderne et responsive.",
    },
    builtWith: {
      fr: "React, Gatsby, GraphQL, DatoCMS, Mui, Netlify.",
    },
  }) as ProjectExperienceProps,
]
