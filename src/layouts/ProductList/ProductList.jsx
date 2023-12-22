import { Container } from 'react-bootstrap'
import classNames from 'classnames/bind'
import styles from './ProductList.module.scss'
import Products from '@/components/Products'

const cx = classNames.bind(styles)

function ProductList() {
  return (
    <section className={cx('product_list')}>
      <Container>
        <div className={cx('wrapper')}>
          <div className={cx('header')}>
            <span>GỢI Ý HÔM NAY</span>
            <div className={cx('underlined')}></div>
          </div>

          <div className={cx('content')}>
            <Products />
          </div>
        </div>
      </Container>
    </section>
  )
}

export default ProductList
