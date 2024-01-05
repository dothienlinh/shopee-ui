import classNames from 'classnames/bind'
import styles from './AccountAddress.module.scss'
import UserAccountMenu from '@/components/UserAccountMenu'
import { Container } from 'react-bootstrap'

const cx = classNames.bind(styles)

function AccountAddress() {
  return (
    <div className={cx('account_address')}>
      <Container className={cx('container')}>
        <UserAccountMenu />
      </Container>
    </div>
  )
}

export default AccountAddress
