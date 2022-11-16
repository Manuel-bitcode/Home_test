import { all } from 'redux-saga/effects'
import SocialPostSaga from './SocialPost'
export default function* rootSaga() {
  yield all([
    SocialPostSaga()
  ])
}