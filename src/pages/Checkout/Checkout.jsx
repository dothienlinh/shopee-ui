import classNames from 'classnames/bind'
import styles from './Checkout.module.scss'
import HeaderCart from '@/layouts/HeaderCart'
import CheckoutContent from '@/layouts/CheckoutContent'
import { useEffect } from 'react'

const cx = classNames.bind(styles)

function Checkout() {
  useEffect(() => {
    document.title = 'Thanh toán'
  }, [])

  return (
    <div className={cx('checkout')}>
      <header>
        <HeaderCart title={'Thanh Toán'} />
      </header>

      <main className={cx('main')}>
        <CheckoutContent />
      </main>
    </div>
  )
}

export default Checkout
