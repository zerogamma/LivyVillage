import React from 'react'
import renderer from 'react-test-renderer'
import theme from '../../../../utils/style/theme'
import { ThemeProvider } from 'styled-components'

export function renderWithTheme(component) {
    return renderer.create(
        <ThemeProvider theme={theme}>{component}</ThemeProvider>
    )
}
