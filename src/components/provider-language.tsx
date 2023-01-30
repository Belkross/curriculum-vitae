import React, { createContext, useContext, ReactElement, useState } from "react"
import { doNothingWith } from "../functions/do-nothing"

export type LanguageValue = "fr" | "en"
const defaultLanguage: LanguageValue = "fr"

const LanguageContext = createContext<LanguageValue>(defaultLanguage)
export const useLanguage = () => useContext(LanguageContext)

export const ToggleLanguageContext = createContext((language: LanguageValue) => doNothingWith(language))

type Props = {
  children: ReactElement
}

export default function ProviderLanguage({ children }: Props) {
  const [language, setLanguage] = useState(defaultLanguage)

  const toggleLanguage = (lang: LanguageValue) => {
    setLanguage(lang)
  }

  return (
    <LanguageContext.Provider value={language}>
      <ToggleLanguageContext.Provider value={toggleLanguage}>{children}</ToggleLanguageContext.Provider>
    </LanguageContext.Provider>
  )
}
