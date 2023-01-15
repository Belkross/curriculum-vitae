import React from "react"
import ProviderLanguage from "./provider-language"
import ProviderThemeMode from "./provider-theme-mode"
import Theming from "./theming"

type Props = {
  children: JSX.Element
}

export default function Layout({ children }: Props) {
  return (
    <React.Fragment>
      <ProviderThemeMode>
        <ProviderLanguage>
          <Theming>{children}</Theming>
        </ProviderLanguage>
      </ProviderThemeMode>
    </React.Fragment>
  )
}
