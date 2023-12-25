import { useEffect, useState } from 'react'
import classNames from 'classnames/bind'
import styles from './Products.module.scss'
import * as getProductsServices from '@/apiServices'
import Product from '../Product/Product'
import { Link } from 'react-router-dom'

const cx = classNames.bind(styles)

function Products() {
  const limit = 48
  const skip = 0
  const [products, setProducts] = useState([])

  useEffect(() => {
    const fetchApi = async () => {
      const products = await getProductsServices.getProductsServices(
        limit,
        skip
      )

      setProducts(products)
    }

    fetchApi()
  }, [])

  return (
    <div className={cx('products')}>
      <div className={cx('wrapper')}>
        <div className={cx('product_list')}>
          {products.map((item) => (
            <Product
              id={item.id}
              thumbnail={item.thumbnail}
              title={item.title}
              discountPercentage={item.discountPercentage}
              category={item.category}
              brand={item.brand}
              price={item.price}
              key={item.id}
            />
          ))}
        </div>

        <div className={cx('see_all')}>
          <Link to={'/'} className={cx('see_all_link')}>
            <span>Xem Thêm</span>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Products
