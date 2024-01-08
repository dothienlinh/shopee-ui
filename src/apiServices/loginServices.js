import * as request from '@/utils/request'

export const loginServices = async (email, password) => {
  try {
    const response = await request.post('auth/login', {
      username: email,
      password
    })

    return response
  } catch (error) {
    // eslint-disable-next-line no-console
    console.log(error)
  }
}
