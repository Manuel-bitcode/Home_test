import { ResponseError } from './CommonInterface'
import { UserPost } from './UserPostInterface'

interface Post {
  id: string
  created_at: string
  text: string
  user: UserPost
}

interface GetPostParams {
  url: string
  limit?: number,
  startId?: string
}

/**
 * Actions
 */
interface GetPostData {
  type: string
  payload?: GetPostParams
}

interface GetPostDataSuccess {
  type: string
  payload: Array<Post>
}

interface PostResponseError {
  type: string
  payload: ResponseError
}

interface PostClean {
  type: string
}

export {
  Post,
  GetPostData,
  GetPostDataSuccess,
  PostResponseError,
  PostClean,
  GetPostParams
}