import classNames from 'classnames/bind'
import styles from './QRCodeLogin.module.scss'
import Popper from '@/components/Popper'
import { MessageIcon, CloseLargeIcon } from '@/components/Icons'
import { Link } from 'react-router-dom'
import { useRef } from 'react'

const cx = classNames.bind(styles)

function QRCodeLogin({ setIsQRCode }) {
  const helpRef = useRef()

  return (
    <div className={cx('wrapper')}>
      <Popper className={cx('popper_right')}>
        <div className={cx('heading')}>
          <div className={cx('text')}>
            <span>Đăng nhập với mã QR</span>
          </div>

          <div className={cx('qr_code')}>
            <div className={cx('title')}>
              <span>Đăng nhập với mật khẩu</span>
            </div>
            <div
              className={cx('img')}
              onClick={() => {
                setIsQRCode((prev) => !prev)
              }}
            >
              <MessageIcon />
            </div>
          </div>
        </div>

        <div className={cx('content')}>
          <div className={cx('box')}>
            <div className={cx('qr_code')}></div>
            <div className={cx('text')}>
              <span>Quét mã QR bằng ứng dụng Shopee</span>
            </div>
            <div
              className={cx('help')}
              onClick={() => {
                helpRef.current.classList.toggle(styles.show)
              }}
            >
              <span>Làm Thế Nào Để Quét Mã?</span>
            </div>
          </div>
        </div>

        <div className={cx('signup_link')}>
          <p>
            Bạn mới biết đến Shopee?{' '}
            <Link to={'/signup'} className={cx('link')}>
              Đăng ký
            </Link>
          </p>
        </div>
      </Popper>

      <div className={cx('popper_left')} ref={helpRef}>
        <Popper className={cx('popper')}>
          <div className={cx('heading')}>
            <span className={cx('text')}>Làm thế nào để quét mã?</span>
            <div
              onClick={() => {
                helpRef.current.classList.toggle(styles.show)
              }}
            >
              <CloseLargeIcon className={cx('icon')} />
            </div>
          </div>

          <div className={cx('img')}>
            <img
              src="https://deo.shopeemobile.com/shopee/shopee-pcmall-live-sg/assets/8cb33ddb0fced032941852fa6419132a.png"
              alt="Image"
            />
          </div>

          <p className={cx('text')}>
            Nhấn vào biểu tượng quét mã trên ứng dụng Shopee để mở trình quét mã
            QR
          </p>
        </Popper>
      </div>
    </div>
  )
}

export default QRCodeLogin
