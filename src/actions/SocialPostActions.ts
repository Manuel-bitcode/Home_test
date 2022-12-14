import { ResponseError } from './../constants/CommonInterface'
import { SocialPostActions } from './../constants/ActionTypes'
import { GetPostData, GetPostDataSuccess, GetPostParams, Post, PostClean, PostResponseError } from './../constants/SocialPostInterface'


const getPostData = (payload: GetPostParams): GetPostData => ({
  type: SocialPostActions.SOCIALPOST_DATA,
  payload
})

const getPostDataSuccess = (payload: Array<Post>): GetPostDataSuccess => ({
  type: SocialPostActions.SOCIALPOST_DATA_SUCCESS,
  payload
})

const postResponseError = (payload: ResponseError): PostResponseError => ({
  type: SocialPostActions.SOCIALPOST_DATA_ERROR,
  payload
})

const postClean = (): PostClean => ({
  type: SocialPostActions.SOCIALPOST_DATA_CLEAN
})

export {
  getPostData,
  getPostDataSuccess,
  postResponseError,
  postClean
}