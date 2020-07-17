import React from 'react'
import SearchBar from '../components/village/search-bar'

import 'jest-styled-components'
import { renderWithTheme } from '../components/common/___test___/helpers'

describe('SearchBar Component render test', () => {
    it('renders SearchBar component correctly', () => {
        const data = 'testing'
        const comp = renderWithTheme(
            <SearchBar search={data} placeholder="testing-component" />
        ).toJSON()
        expect(comp).toMatchSnapshot()
    })
})
