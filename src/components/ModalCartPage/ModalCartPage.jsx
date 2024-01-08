import classNames from 'classnames/bind'
import style from './ModalCartPage.module.scss'
import { ModalCartPageIcon } from '../Icons/Icons'

const cx = classNames.bind(style)

function ModalCartPage({ hidden }) {
  return (
    <div className={cx('modal_cart_page', hidden ? 'hidden' : '')}>
      <div className={cx('container')}>
        <div className={cx('icon')}>
          <ModalCartPageIcon />
        </div>

        <div className={cx('text')}>
          <span>Vui lòng chọn sản phẩm</span>
        </div>
      </div>
    </div>
  )
}

export default ModalCartPage
