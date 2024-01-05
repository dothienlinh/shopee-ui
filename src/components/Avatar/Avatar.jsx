import classNames from 'classnames/bind'
import styles from './Avatar.module.scss'
import { Link } from 'react-router-dom'
import { PenIcon } from '@/components/Icons'
import { useCookies } from 'react-cookie'

const cx = classNames.bind(styles)

function Avatar() {
  const [cookies] = useCookies('user')

  return (
    <div className={cx('user')}>
      <Link to={'/user/account/profile'}>
        <img className={cx('avatar')} src={cookies.user.image} alt="Avatar" />
      </Link>
      <div className={cx('user_name')}>
        <span>{cookies.user.username}</span>
        <Link className={cx('edit_profile')} to={'/user/account/profile'}>
          <PenIcon />
          <span>Sửa Hồ Sơ</span>
        </Link>
      </div>
    </div>
  )
}

export default Avatar
