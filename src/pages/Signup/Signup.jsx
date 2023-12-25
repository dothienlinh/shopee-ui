import classNames from 'classnames/bind'
import styles from './Signup.module.scss'
import HeaderLogin from '@/layouts/HeaderLogin'
import { useEffect } from 'react'
import MainSignup from '@/components/MainSignup'

const cx = classNames.bind(styles)

function Signup() {
  useEffect(() => {
    document.title = 'Đăng ký ngay | Shopee Việt Nam'
  }, [])

  return (
    <div className={cx('signup')}>
      <HeaderLogin title={'Đăng ký'} />
      <MainSignup />
    </div>
  )
}

export default Signup
