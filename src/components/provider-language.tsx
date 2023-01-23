import React, { createContext, useContext, ReactElement, useState } from "react"

export type LanguageValue = "fr" | "en"
const defaultLanguage: LanguageValue = "fr"

const LanguageContext = createContext<LanguageValue>(defaultLanguage)
export const useLanguage = () => useContext(LanguageContext)

export const ToggleLanguageContext = createContext((Language: LanguageValue) => {})

type Props = {
  children: ReactElement
}

export default function ProviderLanguage({ children }: Props) {
  const [language, setLanguage] = useState(defaultLanguage)

  const toggleLanguage = (language: LanguageValue) => {
    setLanguage(language)
  }

  return (
    <LanguageContext.Provider value={language}>
      <ToggleLanguageContext.Provider value={toggleLanguage}>{children}</ToggleLanguageContext.Provider>
    </LanguageContext.Provider>
  )
}
