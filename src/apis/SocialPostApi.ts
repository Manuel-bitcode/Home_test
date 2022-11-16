import axios from 'axios';

const getPost = async (parameters) => {
  const { url } = parameters
  const paramsApi = {
    limit: parameters?.limit,
    // eslint-disable-next-line camelcase
    start_id: parameters?.startId
  }
  try {
    const response = await axios.get(url, {
      params: paramsApi
    });
    return response
  } catch (error) {
    return error.response
  }
}