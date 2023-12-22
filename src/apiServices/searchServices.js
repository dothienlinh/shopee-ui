import * as request from '@/utils'

export const search = async (q) => {
  try {
    const response = await request.get('products/search', {
      params: {
        q
      }
    })

    return response.products
  } catch (error) {
    // eslint-disable-next-line no-console
    console.log(error)
  }
}
