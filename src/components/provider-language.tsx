import React, { createContext, useContext, ReactElement, useState } from "react"

export type LanguageValue = "fr" | "en"
const defaultLanguage: LanguageValue = "fr"

const LanguageContext = createContext<LanguageValue>(defaultLanguage)
export const useLanguage = () => useContext(LanguageContext)

export const ToggleLanguageContext = createContext(() => {})

type Props = { children: ReactElement }

export default function ProviderLanguage({ children }: Props) {
  const [language, setLanguage] = useState(defaultLanguage)

  const toggleLanguage = () => {
    const newLanguage: LanguageValue = language === "fr" ? "en" : "fr"
    setLanguage(newLanguage)
  }

  return (
    <LanguageContext.Provider value={language}>
      <ToggleLanguageContext.Provider value={toggleLanguage}>{children}</ToggleLanguageContext.Provider>
    </LanguageContext.Provider>
  )
}
