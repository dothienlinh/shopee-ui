import classNames from 'classnames/bind'
import styles from './FooterMainBottom.module.scss'
import { Container } from 'react-bootstrap'

const cx = classNames.bind(styles)

function FooterMainBottom() {
  return (
    <section className={cx('footer_main_bottom')}>
      <Container>
        <div className={cx('wrapper')}>
          <div className={cx('top')}>
            <p className={cx('text')}>Chính sách bảo mật</p>
            <p className={cx('text')}>Quy chế hoạt động</p>
            <p className={cx('text')}>Chính sách vận chuyển</p>
            <p className={cx('text')}>CHÍNH SÁCH TRẢ HÀNG VÀ HOÀN TIỀN</p>
          </div>

          <div className={cx('center')}>
            <div className={cx('img')}></div>
            <div className={cx('img')}></div>
            <div className={cx('img_circle')}></div>
          </div>
          <p className={cx('company')}>Công ty TNHH Shopee</p>

          <div className={cx('bottom')}>
            <p className={cx('text')}>
              Địa chỉ: Tầng 4-5-6, Tòa nhà Capital Place, số 29 đường Liễu Giai,
              Phường Ngọc Khánh, Quận Ba Đình, Thành phố Hà Nội, Việt Nam. Tổng
              đài hỗ trợ: 19001221 - Email: cskh@hotro.shopee.vn
            </p>
            <p className={cx('text')}>
              Chịu Trách Nhiệm Quản Lý Nội Dung: Nguyễn Đức Trí - Điện thoại
              liên hệ: 024 73081221 (ext 4678)
            </p>
            <p className={cx('text')}>
              Mã số doanh nghiệp: 0106773786 do Sở Kế hoạch & Đầu tư TP Hà Nội
              cấp lần đầu ngày 10/02/2015
            </p>
            <p className={cx('text')}>
              © 2015 - Bản quyền thuộc về Công ty TNHH Shopee
            </p>
          </div>
        </div>
      </Container>
    </section>
  )
}

export default FooterMainBottom
