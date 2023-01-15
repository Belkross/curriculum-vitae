import React, { useContext } from "react"
import { ToggleLanguageContext, useLanguage } from "./provider-language"

export default function ButtonLanguage() {
  const currentLanguage = useLanguage()
  const toggleLanguage = useContext(ToggleLanguageContext)

  return <button onClick={toggleLanguage}>{currentLanguage}</button>
}
