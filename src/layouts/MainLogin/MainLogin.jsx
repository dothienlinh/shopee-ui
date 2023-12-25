import classNames from 'classnames/bind'
import styles from './MainLogin.module.scss'
import FormLogin from '@/components/FormLogin'
import { useState } from 'react'
import QRCodeLogin from '@/components/QRCodeLogin'

const cx = classNames.bind(styles)

function MainLogin() {
  const [isQRCode, setIsQRCode] = useState(false)

  return (
    <main className={cx('main_login')}>
      <div className={cx('content')}>
        <div></div>
        {isQRCode ? (
          <QRCodeLogin setIsQRCode={setIsQRCode} />
        ) : (
          <FormLogin setIsQRCode={setIsQRCode} />
        )}
      </div>
    </main>
  )
}

export default MainLogin
