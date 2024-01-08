import classNames from 'classnames/bind'
import styles from './ProductFlashSale.module.scss'
import { Link } from 'react-router-dom'
import { FlashIcon } from '@/components/Icons/Icons'

const cx = classNames.bind(styles)

function ProductFlashSale({ id, img, sale, price, category }) {
  return (
    <div className={cx('menu_item')}>
      <Link to={`${id}`} className={cx('menu_link')}>
        <div className={cx('box')}>
          <div className={cx('product_img')}>
            <img className={cx('img')} src={img} alt="Product Image" />

            <div className={cx('sale')}>
              <FlashIcon className={cx('icon')} />
              <span>{sale.toFixed(0)}%</span>
            </div>

            <div className={cx('category')}>{category}</div>
          </div>

          <div className={cx('content')}>
            <div className={cx('price')}>
              <span>${(price - (price * sale) / 100).toFixed(2)}</span>
            </div>

            <div className={cx('status')}>
              <div className={cx('box')}>
                <span className={cx('text')}>ĐANG BÁN CHẠY</span>
                <div className={cx('max')}>
                  <div></div>
                </div>
                <div
                  className={cx('percent')}
                  style={{
                    width: `${Math.round(Math.random() * 100)}%`
                  }}
                ></div>
              </div>
            </div>
          </div>
        </div>
      </Link>
    </div>
  )
}

export default ProductFlashSale
