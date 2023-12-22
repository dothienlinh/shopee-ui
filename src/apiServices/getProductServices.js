import * as request from '@/utils'

export const getProducts = async (limit = 48, skip = 0) => {
  try {
    const response = await request.get('products', {
      params: {
        limit,
        skip
      }
    })

    return response.products
  } catch (error) {
    // eslint-disable-next-line no-console
    console.log(error)
  }
}
