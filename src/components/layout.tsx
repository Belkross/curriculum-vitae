import React from "react"
import ProviderThemeMode from "./provider-theme-mode"
import Theming from "./theming"

type Props = {
  children: JSX.Element
}

export default function Layout({ children }: Props) {
  return (
    <React.Fragment>
      <ProviderThemeMode>
        <Theming>{children}</Theming>
      </ProviderThemeMode>
    </React.Fragment>
  )
}
