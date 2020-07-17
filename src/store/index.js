import { configureStore } from '@reduxjs/toolkit'

import list from './villageList'

const store = configureStore({
    reducer: { list },
})

export default store
