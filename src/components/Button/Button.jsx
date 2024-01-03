import classNames from 'classnames/bind'
import styles from './Button.module.scss'

const cx = classNames.bind(styles)

function Button({ className, text, handleModalBuyNow }) {
  return (
    <button className={cx('btn', className)} onClick={handleModalBuyNow}>
      <span>{text}</span>
    </button>
  )
}

export default Button
