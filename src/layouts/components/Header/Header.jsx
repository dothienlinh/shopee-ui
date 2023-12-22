import classNames from 'classnames/bind'
import styles from './Header.module.scss'
import ContainerHeader from '../ContainerHeader/ContainerHeader'
import NavHeader from '../NavHeader/NavHeader'

const cx = classNames.bind(styles)

function Header() {
  return (
    <div className={cx('wrapper')}>
      <NavHeader />
      <ContainerHeader />
    </div>
  )
}

export default Header
