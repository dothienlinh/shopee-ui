/* eslint-disable react-refresh/only-export-components */
import { forwardRef, useImperativeHandle, useRef } from 'react'
import classNames from 'classnames/bind'
import 'tippy.js/dist/tippy.css'
import styles from './NotificationMenu.module.scss'
import Popper from '@/components/Popper'
import { notification as data } from '@/data/notification'
import NotificationItem from '../NotificationItem/NotificationItem'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

const cx = classNames.bind(styles)

function NotificationMenu({ onMouseEnter, onMouseLeave }, ref) {
  const popperRef = useRef()
  useImperativeHandle(ref, () => ({
    addClass() {
      popperRef.current.classList.add(styles.show)
    },
    removeClass() {
      popperRef.current.classList.remove(styles.show)
    },
    mouseEvent() {
      popperRef.current.classList.add(styles.mouseEnter)
    },
    mouseLeave() {
      popperRef.current.classList.remove(styles.mouseEnter)
    }
  }))

  const isLogin = useSelector((state) => state.login.login)

  const loginPage = useNavigate('/')
  const handleLoginBtn = () => {
    loginPage('/login')
  }

  const signupPage = useNavigate('/')
  const handleSignupBtn = () => {
    signupPage('/signup')
  }

  return (
    <div
      className={cx('wrapper')}
      ref={popperRef}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      <div className={cx('box')}>
        <div className={cx('arrow')}></div>
        <Popper className={cx('popper')}>
          {isLogin ? (
            <>
              <div className={cx('title')}>
                <p>Thông báo mới nhận</p>
              </div>
              <div>
                {data.map((item) => (
                  <NotificationItem props={item} key={item.id} />
                ))}
              </div>
            </>
          ) : (
            <>
              <div className={cx('box')}>
                <div className={cx('img')}>
                  <img
                    src="https://deo.shopeemobile.com/shopee/shopee-pcmall-live-sg/assets/99e561e3944805a023e87a81d4869600.png"
                    alt="Image"
                  />
                </div>
                <div className={cx('footer_box')}>
                  <button className={cx('btn')} onClick={handleSignupBtn}>
                    Đăng ký
                  </button>
                  <button className={cx('btn')} onClick={handleLoginBtn}>
                    Đăng nhập
                  </button>
                </div>
              </div>
            </>
          )}
        </Popper>
      </div>
    </div>
  )
}

export default forwardRef(NotificationMenu)
