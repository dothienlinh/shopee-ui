import { useEffect, useRef, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import classNames from 'classnames/bind'
import styles from './FormLogin.module.scss'
import Popper from '@/components/Popper'
import {
  QRCodeIcon,
  ClosedEyeIcon,
  OpenEyeIcon,
  CloseIcon
} from '@/components/Icons'
import { loginServices } from '@/apiServices'
import { useDispatch } from 'react-redux'
import { addAuth } from './authSlice'
import { useCookies } from 'react-cookie'

const cx = classNames.bind(styles)

function FormLogin({ setIsQRCode }) {
  const [isShowPass, setIsShowPass] = useState(false)
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const overlayRef = useRef()
  const btnLoginRef = useRef()
  const wrapperInputPassRef = useRef()
  const wrapperInputEmailRef = useRef()
  const errorMessageEmailRef = useRef()
  const errorMessagePassRef = useRef()
  const inputPassRef = useRef()
  const inputEmail = useRef()
  const errorLogin = useRef()
  const [cookie, setCookie] = useCookies(['user'])

  const handleShowPass = () => {
    setIsShowPass(!isShowPass)
  }

  useEffect(() => {
    if (email.trim() && password.trim()) {
      overlayRef.current.style.display = 'none'
      btnLoginRef.current.style.opacity = 1
    } else {
      overlayRef.current.style.display = 'block'
      btnLoginRef.current.style.opacity = 0.7
    }
  }, [email, password])

  const handleInputEmail = () => {
    if (!inputEmail.current.value.trim()) {
      errorMessageEmailRef.current.innerText = 'Vui lòng điền vào mục này.'
      wrapperInputEmailRef.current.classList.add(styles.error_input)
    } else {
      errorMessageEmailRef.current.innerText = ''
      wrapperInputEmailRef.current.classList.remove(styles.error_input)
    }
  }

  const handleInputPass = () => {
    if (!inputPassRef.current.value.trim()) {
      errorMessagePassRef.current.innerText = 'Vui lòng điền vào mục này.'
      wrapperInputPassRef.current.classList.add(styles.error_input)
    } else {
      errorMessagePassRef.current.innerText = ''
      wrapperInputPassRef.current.classList.remove(styles.error_input)
    }
  }

  const handleFocusInput = (e) => {
    e.target.parentElement.classList.add(styles.focus)
  }

  const handleBlurInput = (e) => {
    e.target.parentElement.classList.remove(styles.focus)
  }

  const goBackHome = useNavigate()

  const dispatch = useDispatch()

  const handleSubmit = (e) => {
    e.preventDefault()

    const fetchApt = async () => {
      try {
        const res = await loginServices(email, password)

        if (res?.data && res.status === 200) {
          errorLogin.current.style.display = 'none'
          setCookie('user', res.data)
          setTimeout(() => {
            goBackHome('/')
          }, 2000)
        } else {
          errorLogin.current.style.display = 'flex'
        }
      } catch (error) {
        // eslint-disable-next-line no-console
        console.log(error)
      }
    }

    fetchApt()
  }

  useEffect(() => {
    if (cookie.user) {
      dispatch(addAuth(cookie.user))
    }
  }, [cookie.user, dispatch])

  return (
    <>
      <div className={cx('wrapper')}>
        <Popper classList={cx('popper')}>
          <div className={cx('heading')}>
            <div className={cx('text')}>
              <span>Đăng nhập</span>
            </div>

            <div className={cx('qr_code')}>
              <div className={cx('title')}>
                <span>Đăng nhập với mã QR</span>
              </div>
              <div
                className={cx('img')}
                onClick={() => {
                  setIsQRCode((prev) => !prev)
                }}
              >
                <QRCodeIcon />
              </div>
            </div>
          </div>

          <form className={cx('form_login')} onSubmit={handleSubmit}>
            <div className={cx('error_submit')}>
              <div className={cx('wrapper_message')} ref={errorLogin}>
                <div className={cx('close_icon')}>
                  <CloseIcon className={cx('icon')} />
                </div>
                <p className={cx('message')}>
                  Đăng nhập KHÔNG thành công. Bạn vui lòng thử lại hoặc đăng
                  nhập bằng cách khác nhé!
                </p>
              </div>
            </div>
            <div className={cx('group_form')}>
              <div className={cx('box_input')}>
                <div className={cx('wrapper_input')} ref={wrapperInputEmailRef}>
                  <input
                    className={cx('input')}
                    type="text"
                    placeholder="Email/Số điện thoại/Tên đăng nhập"
                    value={email}
                    ref={inputEmail}
                    onChange={(e) => {
                      setEmail(e.target.value)
                    }}
                    onFocus={handleFocusInput}
                    onBlur={handleBlurInput}
                    onInput={handleInputEmail}
                  />
                </div>
                <p
                  className={cx('error_message')}
                  ref={errorMessageEmailRef}
                ></p>
              </div>

              <div className={cx('box_input')}>
                <div className={cx('wrapper_input')} ref={wrapperInputPassRef}>
                  <input
                    value={password}
                    onChange={(e) => {
                      setPassword(e.target.value)
                    }}
                    ref={inputPassRef}
                    placeholder="Mật khẩu"
                    type={isShowPass ? 'text' : 'password'}
                    className={cx('input')}
                    onFocus={handleFocusInput}
                    onBlur={handleBlurInput}
                    onInput={handleInputPass}
                  />
                  <div className={cx('btn_show_pass')} onClick={handleShowPass}>
                    {isShowPass ? (
                      <OpenEyeIcon className={cx('show_pass_icon')} />
                    ) : (
                      <ClosedEyeIcon className={cx('hidden_pass_icon')} />
                    )}
                  </div>
                </div>
                <p
                  className={cx('error_message')}
                  ref={errorMessagePassRef}
                ></p>
              </div>

              <div className={cx('btn_login')}>
                <button type="submit" className={cx('btn')} ref={btnLoginRef}>
                  <span>ĐĂNG NHẬP</span>
                </button>
                <div className={cx('overlay')} ref={overlayRef}></div>
              </div>
            </div>
            <div className={cx('forgot_pass')}>
              <Link to={'/login/reset'} className={cx('link')}>
                Quên mật khẩu
              </Link>
              <Link to={'/login/opt'} className={cx('link')}>
                Đăng nhập với SMS
              </Link>
            </div>
            <div className={cx('other_options')}>
              <div className={cx('line_or')}>
                <span className={cx('line')}></span>
                <span className={cx('text')}>HOẶC</span>
                <span className={cx('line')}></span>
              </div>
              <div className={cx('group_btn')}>
                <button
                  className={cx('btn')}
                  onClick={(e) => e.preventDefault()}
                >
                  <span className={cx('logo_facebook')}></span>
                  <span>Facebook</span>
                </button>
                <button
                  className={cx('btn')}
                  onClick={(e) => e.preventDefault()}
                >
                  <span className={cx('logo_google')}></span>
                  <span>Google</span>
                </button>
              </div>
            </div>
          </form>

          <div className={cx('register')}>
            Bạn mới biết đến Shopee?{' '}
            <Link to={'/signup'} className={cx('register_link')}>
              Đăng ký
            </Link>
          </div>
        </Popper>
      </div>
    </>
  )
}

export default FormLogin
