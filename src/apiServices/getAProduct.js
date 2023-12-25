import * as request from '@/utils'

export const getAProduct = async (idProduct) => {
  try {
    const response = await request.get(`products/${idProduct}`, {})

    return response
  } catch (error) {
    // eslint-disable-next-line no-console
    console.log('Get cart error ', error)
  }
}
