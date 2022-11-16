import { ResponseError } from './../constants/CommonInterface'
import { SocialPostActions } from './../constants/ActionTypes'
import { GetPostData, GetPostDataSuccess, GetPostParams, Post, PostClean, PostResponseError } from './../constants/SocialPostInterface'


const getPostData = (payload?: GetPostParams): GetPostData => ({
  type: SocialPostActions.SOCIALPOST_DATA,
  payload
})

const getPostDataSucces = (payload: Array<Post>): GetPostDataSuccess => ({
  type: SocialPostActions.SOCIALPOST_DATA,
  payload
})

const postResponseError = (payload: ResponseError): PostResponseError => ({
  type: SocialPostActions.SOCIALPOST_ERROR,
  payload
})

const postClean = (): PostClean => ({
  type: SocialPostActions.SOCIALPOST_CLEAN
})

export {
  getPostData,
  getPostDataSucces,
  postResponseError,
  postClean
}