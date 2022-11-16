import { getPostData, getPostDataSuccess } from 'actions/SocialPostActions';
import { SocialPostActions } from 'constants/ActionTypes';
import { UserPost } from 'constants/UserPostInterface';
import { GetPostParams, Post } from '../../../constants/SocialPostInterface';

describe('Unit Test SocialPost Actions', () => {

  test('#1 getPostData action ', () => {
    const payload: GetPostParams = {
      url: 'Example.com',
      limit: 50,
      startId: 'example123'
    }

    const expected = {
      type: SocialPostActions.SOCIALPOST_DATA,
      payload
    }

    expect(getPostData(payload)).toEqual(expected)
  });

  test('#2 getPostDataSuccess action ', () => {
    const payload: Array<Post> = [{
      id: '1',
      // eslint-disable-next-line camelcase
      created_at: 'DateExample',
      text: 'Consequat incididunt consectetur pariatur occaecat nostrud.',
      user: {} as UserPost
    }]

    const expected = {
      type: SocialPostActions.SOCIALPOST_DATA_SUCCESS,
      payload
    }

    expect(getPostDataSuccess(payload)).toEqual(expected)
  });

});