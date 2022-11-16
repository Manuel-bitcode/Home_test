import { configureStore } from '@reduxjs/toolkit'
import { socialPostReducer } from './../reducers/SocialPostReducer'
import createSagaMiddleware from 'redux-saga'
import rootSaga from './../sagas/SocialPost'

const sagaMiddleware = createSagaMiddleware()

const store = configureStore({
  reducer: {
    socialPost: socialPostReducer
  },
  middleware: [sagaMiddleware],
  devTools: true
})

sagaMiddleware.run(rootSaga)

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
export default store