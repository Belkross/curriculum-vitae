import React from "react"
import ProviderLanguage from "./provider-language"
import ProviderThemeMode from "./provider-theme-mode"
import Theming from "./theming"

type Props = {
  children: React.ReactElement
}

export default function GlobalFeatures({ children }: Props) {
  return (
    <ProviderThemeMode>
      <ProviderLanguage>
        <Theming>{children}</Theming>
      </ProviderLanguage>
    </ProviderThemeMode>
  )
}
