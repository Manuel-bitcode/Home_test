import { AnyAction } from '@reduxjs/toolkit';
import { getPostDataSucces, postResponseError } from './../actions/SocialPostActions';
import { SocialPostActions } from './../constants/ActionTypes';
import { takeEvery, call, put, fork, all } from 'redux-saga/effects'
import { getPostResquest } from './../apis/SocialPostApi'

function* getPost(params: AnyAction) {
  const { payload } = params
  try {
    const data = yield call(getPostResquest, payload)
    yield put(getPostDataSucces(data))
  } catch (error) {
    yield put(postResponseError(error))
  }
}

export function* getPostsSaga() {
  yield takeEvery(SocialPostActions.SOCIALPOST_DATA, getPost)
}

export default function* rootSaga() {
  yield all([fork(getPostsSaga)])
}