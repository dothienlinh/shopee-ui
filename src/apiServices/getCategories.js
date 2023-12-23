import * as request from '@/utils'

export const getCategories = async () => {
  try {
    const response = await request.get('products/categories', {})

    return response
  } catch (error) {
    // eslint-disable-next-line no-console
    console.log(error)
  }
}
