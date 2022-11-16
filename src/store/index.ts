import { configureStore } from '@reduxjs/toolkit'
import { socialPostReducer } from './../reducers/SocialPostReducer'

export const store = configureStore({
  reducer: {
    socialPost: socialPostReducer
  }
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>