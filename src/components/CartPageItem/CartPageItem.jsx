import classNames from 'classnames/bind'
import styles from './CartPageItem.module.scss'
import { FaMinus, FaPlus } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import { Checkbox } from '@mui/material'

const cx = classNames.bind(styles)

function CartPageItem({
  id,
  thumbnail,
  title,
  price,
  discountPercentage,
  discountedPrice,
  quantity,
  cart,
  index,
  checked,
  handleAdds,
  handleMinus,
  handleDelete,
  handleCheck
}) {
  return (
    <div className={cx('box')}>
      <div className={cx('content_left')}>
        <Checkbox
          checked={checked.includes(index)}
          onChange={() => {
            handleCheck(index)
          }}
          sx={{
            color: '#00000024',
            margin: '0 1.2rem 0 2rem',
            '&.Mui-checked': {
              color: '#ee4d2d'
            },
            '& .MuiSvgIcon-fontSizeMedium': {
              width: '2.1rem',
              height: '2.1rem'
            }
          }}
        />

        <Link to={`/${id}`} className={cx('info_product')}>
          <img className={cx('img')} src={thumbnail} />
          <div className={cx('title')}>{title}</div>
        </Link>
      </div>

      <div className={cx('price')}>
        <span className={cx('oll_price')}>${price.toFixed(2)}</span>
        <span className={cx('new_price')}>
          ${(price - (price * discountPercentage) / 100).toFixed(2)}
        </span>
      </div>

      <div className={cx('qty-change')}>
        <button
          className={cx('qty-decrease', 'btn')}
          onClick={() => handleMinus(cart, index)}
        >
          <FaMinus />
        </button>
        <div className={cx('qty-value')}>
          <span>{quantity}</span>
        </div>
        <button
          className={cx('qty-increase', 'btn')}
          onClick={() => handleAdds(index)}
        >
          <FaPlus />
        </button>
      </div>

      <div className={cx('total')}>${discountedPrice.toFixed(2)}</div>

      <div className={cx('option')}>
        <span
          className={cx('delete')}
          onClick={() => {
            handleDelete(index)
          }}
        >
          Delete
        </span>
        <span className={cx('but_now')}>Buy Now</span>
      </div>
    </div>
  )
}

export default CartPageItem
