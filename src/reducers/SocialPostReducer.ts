import { AnyAction } from '@reduxjs/toolkit';
import { Post } from '../constants/SocialPostInterface';
import { CommonInitialState, ResponseError, statusType } from '../constants/CommonInterface';
import { SocialPostActions } from '../constants/ActionTypes';

export interface InitialSocialPost extends CommonInitialState {
  data: Array<Post>
}

const initialStateSocialPost: InitialSocialPost = {
  status: 'idle' as statusType,
  data: [] as Array<Post>,
  error: {} as ResponseError
}

export const socialPostReducer = (state: InitialSocialPost = initialStateSocialPost, action: AnyAction) => {
  switch (action.type) {
    case SocialPostActions.SOCIALPOST_DATA:
      return {
        ...state,
        status: 'loading'
      }

    case SocialPostActions.SOCIALPOST_DATA_SUCCESS:
      return {
        ...state,
        status: 'success',
        data: [
          ...action.payload
        ]
      }

    case SocialPostActions.SOCIALPOST_DATA_ERROR:
      return {
        ...state,
        status: 'error',
        data: [] as Array<Post>,
        error: {
          ...action.payload
        }
      }

    case SocialPostActions.SOCIALPOST_DATA_CLEAN:
      return {
        ...state,
        data: initialStateSocialPost.data
      }

    default:
      return state
  }
}