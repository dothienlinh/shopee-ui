/* eslint-disable react-refresh/only-export-components */
import { forwardRef, useImperativeHandle, useRef } from 'react'
import classNames from 'classnames/bind'
import styles from './MenuUser.module.scss'
import Popper from '@/components/Popper'
import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { addAuth } from '../FormLogin/authSlice'
import { setLogin } from '../../redux/isLoginSlice'

const cx = classNames.bind(styles)

function MenuUser(props, ref) {
  const menuRef = useRef()

  useImperativeHandle(ref, () => ({
    addClass() {
      menuRef.current.classList.add(styles.show)
    },
    removeClass() {
      menuRef.current.classList.remove(styles.show)
    }
  }))

  const dispatch = useDispatch()

  const handleLogout = () => {
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
    dispatch(setLogin())
  }

  return (
    <div className={cx('wrapper')} ref={menuRef}>
      <div className={cx('user-menu')}>
        <div className={cx('arrow')}></div>
        <Popper>
          <Link to={'/profile'} className={cx('item')}>
            <span>Tài khoản của tôi</span>
          </Link>
          <Link to={'/purchase'} className={cx('item')}>
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
