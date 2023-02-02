import React, { createContext, useContext, ReactElement, useState, useEffect } from "react"
import { doNothingWith } from "../functions/do-nothing"
import localStorageKeys from "../local-storage-keys"

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

  const toggleLanguage = (newLanguage: LanguageValue) => {
    setLanguage(newLanguage)
    localStorage.setItem(localStorageKeys.language, newLanguage)
  }

  useEffect(() => {
    const languagePreference = localStorage.getItem(localStorageKeys.language)
    if (languagePreference === "fr" || languagePreference === "en") setLanguage(languagePreference)
  }, [])

  return (
    <LanguageContext.Provider value={language}>
      <ToggleLanguageContext.Provider value={toggleLanguage}>{children}</ToggleLanguageContext.Provider>
    </LanguageContext.Provider>
  )
}
