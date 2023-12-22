import axios from 'axios'

const request = axios.create({
  baseURL: 'https://dummyjson.com/'
})

export const get = async (path, option = {}) => {
  const response = await request.get(path, option)
  return response.data
}

export default request
