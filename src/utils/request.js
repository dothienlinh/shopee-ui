/* eslint-disable no-console */
import axios from 'axios'

const request = axios.create({
  baseURL: 'https://dummyjson.com/'
})

export const get = async (path, option = {}) => {
  const response = await request.get(path, option)
  return response.data
}

export const post = async (path, data = {}) => {
  const response = await request.post(path, data)

  return response
}

// Add a response interceptor
request.interceptors.response.use(
  function (response) {
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data
    return response
  },
  function (error) {
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error
    const res = {}
    if (error.response) {
      // The request was made and the server responded with a status code
      // that falls out of the range of 2xx
      res.data = error.response.data
      res.status = error.response.status
      res.headers = error.response.headers
    } else if (error.request) {
      // The request was made but no response was received
      // `error.request` is an instance of XMLHttpRequest in the browser
      // and an instance of http.ClientRequest in node.js
      console.log(error.request)
    } else {
      // Something happened in setting up the request that triggered an Error
      console.log('Error', error.message)
    }

    return res
    // return Promise.reject(error)
  }
)
export default request
