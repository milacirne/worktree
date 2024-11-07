'use client'

import React, { useState } from 'react'
import { ThemeProvider } from 'styled-components'
import GlobalStyle from '@/styles/global'

import { useServerInsertedHTML } from 'next/navigation'
import { ServerStyleSheet, StyleSheetManager } from 'styled-components'
import { darkTheme } from '@/themes/dark'
import { lightTheme } from '@/themes/light'

export default function StyledComponentsRegistry({
  children,
}: {
  children: React.ReactNode
}) {

  const [styledComponentsStyleSheet] = useState(() => new ServerStyleSheet())

  const [usingLightTheme, setUsingLightTheme] = useState(false)

  function toggleTheme () {
    setUsingLightTheme(!usingLightTheme)
  }

  useServerInsertedHTML(() => {
    const styles = styledComponentsStyleSheet.getStyleElement()
    styledComponentsStyleSheet.instance.clearTag()
    return <>{styles}</>
  })

  if (typeof window !== 'undefined') return <>{children}</>

  return (
    <StyleSheetManager sheet={styledComponentsStyleSheet.instance}>
      <ThemeProvider theme={usingLightTheme ? lightTheme : darkTheme}>
        <GlobalStyle />
        {children}
      </ThemeProvider>
    </StyleSheetManager>
  )
}
