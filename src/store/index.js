import { configureStore } from '@reduxjs/toolkit'

import list from './village-store'

const store = configureStore({
    reducer: { list },
})

export default store
