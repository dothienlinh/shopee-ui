import * as request from '@/utils/request'

export const getProductsServices = async (limit = 48, skip = 0) => {
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
