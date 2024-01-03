import classNames from 'classnames/bind'
import styles from './HeaderLogin.module.scss'
import { Container } from 'react-bootstrap'
import { ShopeeLogo } from '@/components/Icons'
import { Link } from 'react-router-dom'

const cx = classNames.bind(styles)

function HeaderLogin({ title }) {
  return (
    <header className={cx('header_login')}>
      <Container className={cx('container')}>
        <div className={cx('wrapper')}>
          <div className={cx('header_left')}>
            <Link to={'/'} className={cx('logo_link')}>
              <ShopeeLogo className={cx('logo')} />
            </Link>
            <div className={cx('text')}>
              <span>{title}</span>
            </div>
          </div>

          <div className={cx('header_right')}>
            <Link to={'/'} className={cx('portal')}>
              Bạn cần giúp đỡ?
            </Link>
          </div>
        </div>
      </Container>
    </header>
  )
}

export default HeaderLogin
