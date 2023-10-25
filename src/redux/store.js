import { configureStore } from '@reduxjs/toolkit'
import generalSlice from './GeneralSlice'

export const store = configureStore({
    reducer: {
        general: generalSlice
    },
})