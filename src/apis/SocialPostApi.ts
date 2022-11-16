import axios from 'axios';

export const getPostRequest = async (parameters) => {
  const { url } = parameters
  const paramsApi = {
    limit: parameters?.limit,
    // eslint-disable-next-line camelcase
    start_id: parameters?.startId
  }
  const response = await axios({
    url,
    method: 'get',
    timeout: 8000,
    headers: {
      'Content-Type': 'application/json',
    },
    params: paramsApi
  })
  return response.data
}