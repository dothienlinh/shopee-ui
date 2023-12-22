import PropTypes from 'prop-types'
import classNames from 'classnames/bind'
import styles from './NotificationItem.module.scss'
import { Link } from 'react-router-dom'

const cx = classNames.bind(styles)

function NotificationItem({ props }) {
  return (
    <div className={cx('wrapper')}>
      <Link
        className={cx('item')}
        to={props.voucher ? 'flash-sale' : 'sale-giua-thang'}
      >
        <div className={cx('avatar')}>
          <img className={cx('avatar-img')} src={props.avatar} alt="Avatar" />
        </div>
        <div className={cx('body')}>
          <p className={cx('title')}>{props.title}</p>
          <p className={cx('content')}>{props.content}</p>
          {props.voucher && (
            <img className={cx('voucher')} src={props.voucher} alt="Voucher" />
          )}
        </div>
      </Link>
    </div>
  )
}

NotificationItem.propTypes = {
  props: PropTypes.object.isRequired
}

export default NotificationItem
