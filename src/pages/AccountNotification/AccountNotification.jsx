import classNames from 'classnames/bind'
import styles from './AccountNotification.module.scss'
import { Container } from 'react-bootstrap'
import UserAccountMenu from '@/components/UserAccountMenu/UserAccountMenu'

import { useState } from 'react'
import CheckboxNotification from '@/components/CheckboxNotification/CheckboxNotification'

const cx = classNames.bind(styles)

function AccountNotification() {
  const [notificationEmail, setNotificationEmail] = useState(true)
  const [updateOrders, setUpdateOrders] = useState(true)
  const [productUpdate, setProductUpdate] = useState(true)
  const [news, setNews] = useState(false)
  const [personalContent, setPersonalContent] = useState(true)

  return (
    <div className={cx('account_notification')}>
      <Container className={cx('container')}>
        <UserAccountMenu />
        <div className={cx('main')}>
          <div className={cx('heading')}>
            <h2>Cài đặt thông báo</h2>
          </div>

          <div className={cx('content')}>
            <div className={cx('title')}>
              <h3>Thông báo Email</h3>
            </div>

            <div className={cx('options')}>
              <div className={cx('item')}>
                <p>Email Thông báo</p>
                <CheckboxNotification
                  value={notificationEmail}
                  onChange={setNotificationEmail}
                />
              </div>
              <div className={cx('item')}>
                <p>
                  <span>Cập nhật đơn hàng</span>
                  <span className={cx('desc')}>
                    Thông báo khi có cập nhật về đơn hàng của tôi, bao gồm cả
                    việc cập nhật thanh toán.
                  </span>
                </p>
                <CheckboxNotification
                  value={updateOrders}
                  onChange={setUpdateOrders}
                />
              </div>
              <div className={cx('item')}>
                <p>
                  <span>Cập nhật sản phẩm</span>
                  <span className={cx('desc')}>
                    Thông báo khi sản phẩm của tôi hết hàng, bị xóa hoặc bị
                    khóa.
                  </span>
                </p>
                <CheckboxNotification
                  value={productUpdate}
                  onChange={setProductUpdate}
                />
              </div>
              <div className={cx('item')}>
                <p>
                  <span>Bản tin</span>
                  <span className={cx('desc')}>
                    Gửi tôi thông tin xu hướng, chương trình khuyến mãi & cập
                    nhật mới nhất.
                  </span>
                </p>
                <CheckboxNotification value={news} onChange={setNews} />
              </div>
              <div className={cx('item')}>
                <p>
                  <span>Nội dung cá nhân</span>
                  <span className={cx('desc')}>
                    Gửi tôi cập nhật cá nhân (ví dụ: quà sinh nhật)
                  </span>
                </p>
                <CheckboxNotification
                  value={personalContent}
                  onChange={setPersonalContent}
                />
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  )
}

export default AccountNotification
