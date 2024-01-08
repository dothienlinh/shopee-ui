import classNames from 'classnames/bind'
import styles from './HeaderCart.module.scss'
import Search from '@/components/Search/Search'
import { ShopeeLogo } from '@/components/Icons/Icons'
import NavHeader from '@/layouts/components/NavHeader/NavHeader'
import { Container } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const cx = classNames.bind(styles)

function HeaderCart({ title, search }) {
  return (
    <header className={cx('header')}>
      <NavHeader />
      <section className={cx('content_header')}>
        <Container>
          <div className={cx('container')}>
            <div className={cx('logo')}>
              <Link to={'/'}>
                <ShopeeLogo className={cx('shopee_logo')} />
              </Link>

              <div className={cx('cart_pag_name')}>
                <span>{title}</span>
              </div>
            </div>

            {search && <Search className={cx('search')} />}
          </div>
        </Container>
      </section>
    </header>
  )
}

export default HeaderCart
