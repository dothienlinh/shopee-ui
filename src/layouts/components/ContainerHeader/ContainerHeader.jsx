import { Container } from 'react-bootstrap'
import classNames from 'classnames/bind'
import styles from './ContainerHeader.module.scss'
import { ShopeeLogo } from '@/components/Icons'
import { Link } from 'react-router-dom'
import Search from '@/components/Search/Search'
import CartMenu from '@/components/CartMenu/CartMenu'

const cx = classNames.bind(styles)

function ContainerHeader() {
  return (
    <div className={cx('wrapper')}>
      <Container className={cx('container')}>
        <Link to={'/'} className={cx('logo')}>
          <ShopeeLogo className={cx('logo-shopee')} />
        </Link>

        <Search visibility={true} />

        <CartMenu />
      </Container>
    </div>
  )
}

export default ContainerHeader
