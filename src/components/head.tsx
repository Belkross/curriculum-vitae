import React from "react"
import favicon from "../images/favicon.svg"

export function Head() {
  return (
    <React.Fragment>
      <html lang="fr" />
      <title>Curriculum Vitae</title>
      <link rel="icon" type="image/svg+xml" href={favicon} />
      <meta name="description" content={description} />
    </React.Fragment>
  )
}

const description = "Curriculum vitae de TRUONG Huy. Développeur web."

/* TODO: remember the user lang preference and dynamic lang. 
Each different lang page should be an independant one */
