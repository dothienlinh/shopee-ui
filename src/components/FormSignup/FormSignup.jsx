import classNames from 'classnames/bind'
import styles from './FormSignup.module.scss'
import Popper from '@/components/Popper/Popper'
import { Link } from 'react-router-dom'
import { useRef, useState } from 'react'

const cx = classNames.bind(styles)
const regexPhoneNumber = /((^(\+84|84|0|0084){1})(3|5|7|8|9))+([0-9]{8})$/

function FormSignup() {
  const [phoneNumber, setPhoneNumber] = useState('')
  const errorInputRef = useRef()
  const messageError = useRef()
  const overlayRef = useRef()
  const btnSubmitRef = useRef()

  return (
    <div className={cx('wrapper')}>
      <Popper className={cx('popper')}>
        <div className={cx('heading')}>
          <span>Đăng ký</span>
        </div>

        <div className={cx('content')}>
          <form className={cx('form')} onSubmit={(e) => e.preventDefault()}>
            <div className={cx('group_input')}>
              <div className={cx('box_input')} ref={errorInputRef}>
                <input
                  type="text"
                  className={cx('input')}
                  placeholder="Số điện thoại"
                  value={phoneNumber}
                  onChange={(e) => {
                    setPhoneNumber(e.target.value)

                    if (!regexPhoneNumber.test(e.target.value)) {
                      errorInputRef.current.classList.add(styles.errorInput)
                      messageError.current.style.visibility = 'visible'
                      overlayRef.current.style.display = 'block'
                      btnSubmitRef.current.style.opacity = 0.7
                    } else {
                      errorInputRef.current.classList.remove(styles.errorInput)
                      messageError.current.style.visibility = 'hidden'
                      overlayRef.current.style.display = 'none'
                      btnSubmitRef.current.style.opacity = 1
                    }
                  }}
                />
              </div>
              <p className={cx('messages_error')} ref={messageError}>
                Số điện thoại không hợp lệ
              </p>
            </div>
            <div className={cx('btn')}>
              <button className={cx('btn_submit')} ref={btnSubmitRef}>
                TIẾP THEO
              </button>
              <div className={cx('overlay')} ref={overlayRef}></div>
            </div>
          </form>

          <div className={cx('other_options')}>
            <div className={cx('line_or')}>
              <span className={cx('line')}></span>
              <span className={cx('text')}>HOẶC</span>
              <span className={cx('line')}></span>
            </div>
            <div className={cx('group_btn')}>
              <button className={cx('btn')} onClick={(e) => e.preventDefault()}>
                <span className={cx('logo_facebook')}></span>
                <span>Facebook</span>
              </button>
              <button className={cx('btn')} onClick={(e) => e.preventDefault()}>
                <span className={cx('logo_google')}></span>
                <span>Google</span>
              </button>
            </div>
          </div>
          <div className={cx('condition')}>
            <span>Bằng việc đăng kí, bạn đã đồng ý với Shopee về </span>
            <Link to={'/'} className={cx('condition_link')}>
              Điều khoản dịch vụ
            </Link>
            <span> & </span>
            <Link to={'/'} className={cx('condition_link')}>
              Chính sách bảo mật
            </Link>
          </div>
        </div>
        <div className={cx('login')}>
          <span>Bạn đã có tài khoản? </span>
          <Link to={'/login'} className={cx('link')}>
            Đăng nhập
          </Link>
        </div>
      </Popper>
    </div>
  )
}

export default FormSignup
