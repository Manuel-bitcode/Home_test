import axios from 'axios';

export const getPostResquest = async (parameters) => {
  const { url } = parameters
  console.log(url)
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
    })
    console.log(response)
    return response
  } catch (error) {
    return error.response
  }
}