import Tippy from '@tippyjs/react/headless'
import classNames from 'classnames/bind'
import styles from './MenuUser.module.scss'
import Popper from '@/components/Popper'
import 'tippy.js/animations/scale.css'
import { Link } from 'react-router-dom'

const cx = classNames.bind(styles)

function MenuUser({ children }) {
  return (
    <div className={cx('wrapper')}>
      <Tippy
        interactive
        delay={[0, 200]}
        placement="bottom-end"
        render={(attrs) => (
          <div className={cx('user-tippy')} tabIndex="-1" {...attrs}>
            <div className={cx('arrow-tippy')} data-popper-arrow=""></div>
            <Popper>
              <Link to={'/profile'} className={cx('item')}>
                <span>Tài khoản của tôi</span>
              </Link>
              <Link to={'/purchase'} className={cx('item')}>
                <span>Đơn Mua</span>
              </Link>
              <div className={cx('item')}>
                <span>Đăng xuất</span>
              </div>
            </Popper>
          </div>
        )}
      >
        {children}
      </Tippy>
    </div>
  )
}

export default MenuUser
