import classNames from 'classnames/bind'
import styles from './ModalBuyNow.module.scss'
import { useRef } from 'react'

const cx = classNames.bind(styles)

function ModalBuyNow({ isModalBuyNow, setIsModalBuyNow }) {
  const modalRef = useRef()

  const handleHiddenModal = () => {
    setIsModalBuyNow(true)
  }

  return (
    <div
      className={cx('modal_buy_now', isModalBuyNow ? 'hidden' : '')}
      ref={modalRef}
    >
      <div className={cx('overlay')}></div>
      <div className={cx('container')}>
        <div className={cx('text')}>
          <span>Bạn vẫn chưa chọn sản phẩm nào để mua.</span>
        </div>

        <div className={cx('btn')}>
          <button className={cx('button')} onClick={handleHiddenModal}>
            OK
          </button>
        </div>
      </div>
    </div>
  )
}

export default ModalBuyNow
