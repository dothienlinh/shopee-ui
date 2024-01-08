import classNames from 'classnames/bind'
import styles from './MainSignup.module.scss'
import FormSignup from '../FormSignup/FormSignup'

const cx = classNames.bind(styles)

function MainSignup() {
  return (
    <main className={cx('main_sign')}>
      <div className={cx('content')}>
        <div></div>
        <FormSignup />
      </div>
    </main>
  )
}

export default MainSignup
