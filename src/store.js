import { configureStore } from '@reduxjs/toolkit'
import serviceStateReducer from './features/services/serviceStateSlice'

export const store = configureStore({
  reducer: { serviceState: serviceStateReducer },
})