import classNames from 'classnames/bind'
import styles from './Login.module.scss'
import HeaderLogin from '@/layouts/HeaderLogin/HeaderLogin'
import MainLogin from '@/layouts/MainLogin/MainLogin'
import { useEffect } from 'react'

const cx = classNames.bind(styles)

function Login() {
  useEffect(() => {
    document.body.scrollTop = 0
    document.documentElement.scrollTop = 0
    document.title = 'Đăng nhập tài khoản  - Mua sắm Online | Shopee Việt Nam'
  }, [])

  return (
    <div className={cx('wrapper')}>
      <HeaderLogin title={'Đăng nhập'} />
      <MainLogin />
    </div>
  )
}

export default Login
