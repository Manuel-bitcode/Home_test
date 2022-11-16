import { SocialPostActions } from 'constants/ActionTypes';
import { statusType, ResponseError } from 'constants/CommonInterface';
import { Post } from 'constants/SocialPostInterface';
import { UserPost } from 'constants/UserPostInterface';
import { InitialSocialPost, socialPostReducer } from './../../../reducers/SocialPostReducer';

describe('Unit Test SocialPostReducer', () => {
  const initialState: InitialSocialPost = {
    status: 'idle' as statusType,
    data: [] as Array<Post>,
    error: {} as ResponseError
  }

  Object.freeze(initialState)
  test('#1 Return initial state ', () => {
    const action = {
      type: 'default'
    }
    expect(socialPostReducer(undefined, action)).toEqual(initialState)
  });

  test('#2 Option reducer SOCIALPOST_DATA ', () => {
    const action = {
      type: SocialPostActions.SOCIALPOST_DATA
    }
    const expected = {
      ...initialState,
      status: 'loading'
    }
    expect(socialPostReducer(initialState, action)).toEqual(expected)
  });

  test('#3 Option reducer SOCIALPOST_DATA_SUCCESS ', () => {
    const payload = [
      {
        id: '1',
        // eslint-disable-next-line camelcase
        created_at: 'DateExample',
        text: 'Consequat incididunt consectetur pariatur occaecat nostrud.',
        user: {} as UserPost
      }
    ]
    const action = {
      type: SocialPostActions.SOCIALPOST_DATA_SUCCESS,
      payload
    }
    const expected = {
      ...initialState,
      status: 'success',
      data: [
        ...payload
      ]
    }
    expect(socialPostReducer(initialState, action)).toEqual(expected)
  });

});