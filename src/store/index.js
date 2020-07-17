import { configureStore } from '@reduxjs/toolkit'

import list from './village-list'

const store = configureStore({
    reducer: { list },
})

export default store
