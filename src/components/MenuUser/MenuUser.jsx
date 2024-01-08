/* eslint-disable react-refresh/only-export-components */
import { forwardRef, useImperativeHandle, useRef } from 'react'
import classNames from 'classnames/bind'
import styles from './MenuUser.module.scss'
import Popper from '@/components/Popper/Popper'
import { Link, useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { addAuth } from '../FormLogin/authSlice'
import { useCookies } from 'react-cookie'

const cx = classNames.bind(styles)

function MenuUser(props, ref) {
  const menuRef = useRef()
  const [cookie, setCookie, removeCookie] = useCookies(['user'])

  useImperativeHandle(ref, () => ({
    addClass() {
      menuRef.current.classList.add(styles.show)
    },
    removeClass() {
      menuRef.current.classList.remove(styles.show)
    }
  }))

  const dispatch = useDispatch()
  const goBackHome = useNavigate()

  const handleLogout = () => {
    removeCookie('user', ['/'])
    dispatch(
      addAuth({
        id: 0,
        username: '',
        email: '',
        firstName: '',
        lastName: '',
        gender: '',
        image: '',
        token: ''
      })
    )
    localStorage.removeItem('cart')
    goBackHome('/')
  }

  return (
    <div className={cx('wrapper')} ref={menuRef}>
      <div className={cx('user-menu')}>
        <div className={cx('arrow')}></div>
        <Popper>
          <Link to={'/user/account/profile'} className={cx('item')}>
            <span>Tài khoản của tôi</span>
          </Link>
          <Link to={'/'} className={cx('item')}>
            <span>Đơn Mua</span>
          </Link>
          <div className={cx('item')} onClick={handleLogout}>
            <span>Đăng xuất</span>
          </div>
        </Popper>
      </div>
    </div>
  )
}

export default forwardRef(MenuUser)
