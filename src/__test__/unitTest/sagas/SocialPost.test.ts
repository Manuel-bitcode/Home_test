import { getPostData, getPostDataSuccess } from 'actions/SocialPostActions';
import { getPostRequest } from 'apis/SocialPostApi';
import { UserPost } from 'constants/UserPostInterface';
import rootSaga, { getPost, getPostsSaga } from 'sagas/SocialPost';
import { takeEvery, call, put, fork, all } from 'redux-saga/effects'
import { SocialPostActions } from 'constants/ActionTypes';


describe('Unit Test SocialPost saga', () => {
  test('#1 getPost saga trigger succes action', () => {
    const payload = {
      url: 'example.com'
    }

    const generator = getPost(getPostData(payload))

    const response = [
      {
        id: '1',
        // eslint-disable-next-line camelcase
        created_at: 'DateExample',
        text: 'Consequat incididunt consectetur pariatur occaecat nostrud.',
        user: {} as UserPost
      }
    ]

    expect(generator.next().value).toEqual(call(getPostRequest, payload))

    expect(generator.next(response).value).toEqual(
      put(getPostDataSuccess(response))
    )

    expect(generator.next()).toEqual({ done: true, value: undefined })
  })

  test('#2 getPostSaga called', () => {
    const iterator = getPostsSaga()
    const expected = takeEvery(SocialPostActions.SOCIALPOST_DATA, getPost)

    const called = iterator.next().value
    expect(called).toEqual(expected)
  })

  test('#3 SocialPost rootSaga called', () => {
    const iterator = rootSaga()
    const expected = all([fork(getPostsSaga)])
    const called = iterator.next().value
    expect(called).toEqual(expected)
  })
});