import classNames from 'classnames/bind'
import styles from './UserAccountMenu.module.scss'
import { Link, NavLink } from 'react-router-dom'
import Avatar from '../Avatar/Avatar'

const cx = classNames.bind(styles)

function UserAccountMenu() {
  return (
    <div className={cx('options')}>
      <Avatar />

      <div className={cx('list_option')}>
        <div className={cx('dropdown')}>
          <div className={cx('dropdown_item-header')}>
            <Link to={'/user/account/profile'} className={cx('link')}>
              <img src="https://down-vn.img.susercontent.com/file/ba61750a46794d8847c3f463c5e71cc4" />
              <span>Tài khoản của tôi </span>
            </Link>
          </div>
          <div className={cx('dropdown_item-body')}>
            <ul className={cx('menu')}>
              <li className={cx('menu_item')}>
                <NavLink
                  to={'/user/account/profile'}
                  className={cx('menu_link')}
                >
                  {({ isActive }) => (
                    <span className={isActive ? cx('active') : cx('pending')}>
                      Hồ Sơ
                    </span>
                  )}
                </NavLink>
              </li>
              <li className={cx('menu_item')}>
                <NavLink
                  to={'/user/account/payment'}
                  className={cx('menu_link')}
                >
                  {({ isActive }) => (
                    <span className={isActive ? cx('active') : cx('pending')}>
                      Ngân Hàng
                    </span>
                  )}
                </NavLink>
              </li>
              <li className={cx('menu_item')}>
                <NavLink
                  to={'/user/account/notification/'}
                  className={cx('menu_link')}
                >
                  {({ isActive }) => (
                    <span className={isActive ? cx('active') : cx('pending')}>
                      Cài Đặt Thông Báo
                    </span>
                  )}
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default UserAccountMenu
