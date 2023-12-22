import { Link } from 'react-router-dom'
import classNames from 'classnames/bind'
import styles from './Product.module.scss'

const cx = classNames.bind(styles)

function Product({
  id,
  thumbnail,
  title,
  discountPercentage,
  category,
  brand,
  price
}) {
  return (
    <div>
      <Link to={`/product/${id}`} className={cx('item')}>
        <div className={cx('box')}>
          <div className={cx('product_img')}>
            <img src={thumbnail} alt={title} />
            <span className={cx('sell')}>-{discountPercentage}%</span>
            <span className={cx('category')}>{category}</span>
          </div>

          <div className={cx('content')}>
            <p className={cx('brand')}>
              Brand: <span>{brand}</span>
            </p>

            <div className={cx('title')}>
              <p>
                <span>{title}</span>
              </p>
            </div>

            <p className={cx('content_bottom')}>
              <span className={cx('old_price')}>${price.toFixed(2)}</span>
              <span className={cx('new_price')}>
                ${(price - (price * discountPercentage) / 100).toFixed(2)}
              </span>
              <span className={cx('discount')}>(%Off)</span>
            </p>
          </div>
        </div>
      </Link>
    </div>
  )
}

export default Product
