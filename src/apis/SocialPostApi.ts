import axios from 'axios';

export const getPostResquest = async (parameters) => {
  const { url } = parameters
  const paramsApi = {
    limit: parameters?.limit,
    // eslint-disable-next-line camelcase
    start_id: parameters?.startId
  }
  try {
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
  } catch (error) {
    return error.response
  }
}