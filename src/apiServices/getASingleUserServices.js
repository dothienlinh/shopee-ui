import * as request from '@/utils'

export const getASingleUser = async (id) => {
  try {
    const res = await request.get(`users/${id}`)

    return res
  } catch (error) {
    // eslint-disable-next-line no-console
    console.log(error)
  }
}
