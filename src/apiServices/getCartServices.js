import * as request from '@/utils/request'

export const getCartServices = async (idUser) => {
  try {
    const response = await request.get('carts/user/' + idUser, {})

    return response.carts
  } catch (error) {
    // eslint-disable-next-line no-console
    console.log('Get cart error ', error)
  }
}
