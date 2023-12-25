import classNames from 'classnames/bind'
import styles from './CartItem.module.scss'
import { Link } from 'react-router-dom'

const cx = classNames.bind(styles)

function CartItem({ id, img, title, price }) {
  return (
    <>
      <Link to={`/${id}`} className={cx('cart_item')}>
        <div className={cx('item_img')}>
          <img src={img} alt={title} />
        </div>

        <div className={cx('box_content')}>
          <div className={cx('item_content')}>
            <p className={cx('item_title')}>
              <span>{title}</span>
            </p>
            <p className={cx('item_price')}>
              <span>{price.toFixed(2)}$</span>
            </p>
          </div>
        </div>
      </Link>
    </>
  )
}

export default CartItem
