type LanguageValue = "fr" | "en"
type DefaultLanguage = "fr"
const languages: LanguageValue[] = ["fr", "en"]

export type PageContent = {
  [field: string]: { fr: string; en: string }
}
