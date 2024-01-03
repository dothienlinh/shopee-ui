import classNames from 'classnames/bind'
import styles from './FooterMainTop.module.scss'
import { Container } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { pay, transport } from '@/data'

const cx = classNames.bind(styles)

function FooterMainTop() {
  return (
    <section className={cx('footer_main_top')}>
      <Container>
        <div className={cx('wrapper')}>
          <div className={cx('row_1')}>
            <div className={cx('column')}>
              <h2 className={cx('title')}>CHĂM SÓC KHÁCH HÀNG</h2>

              <div className={cx('content')}>
                <p>
                  <Link className={cx('link')} to={'/'}>
                    Trung Tâm Trợ Giúp
                  </Link>
                </p>
                <p>
                  <Link className={cx('link')} to={'/'}>
                    Shopee Blog
                  </Link>
                </p>
                <p>
                  <Link className={cx('link')} to={'/'}>
                    Shopee Mall
                  </Link>
                </p>
                <p>
                  <Link className={cx('link')} to={'/'}>
                    Hướng Dẫn Mua Hàng
                  </Link>
                </p>
                <p>
                  <Link className={cx('link')} to={'/'}>
                    Hướng Dẫn Bán Hàng
                  </Link>
                </p>
                <p>
                  <Link className={cx('link')} to={'/'}>
                    Thanh Toán
                  </Link>
                </p>
                <p>
                  <Link className={cx('link')} to={'/'}>
                    Shopee xu
                  </Link>
                </p>
                <p>
                  <Link className={cx('link')} to={'/'}>
                    Vận chuyển
                  </Link>
                </p>
                <p>
                  <Link className={cx('link')} to={'/'}>
                    Trả Hàng & Hoàn Tiền
                  </Link>
                </p>
                <p>
                  <Link className={cx('link')} to={'/'}>
                    Chăm Sóc Khách Hàng
                  </Link>
                </p>
                <p>
                  <Link className={cx('link')} to={'/'}>
                    Chính Sách Bảo Hành
                  </Link>
                </p>
              </div>
            </div>
            <div className={cx('column')}>
              <h2 className={cx('title')}>VỀ SHOPEE</h2>

              <div className={cx('content')}>
                <p>
                  <Link className={cx('link')} to={'/'}>
                    Giới Thiệu Về Shopee Việt Nam
                  </Link>
                </p>
                <p>
                  <Link className={cx('link')} to={'/'}>
                    Tuyển Dụng
                  </Link>
                </p>
                <p>
                  <Link className={cx('link')} to={'/'}>
                    điều khoản shopee
                  </Link>
                </p>
                <p>
                  <Link className={cx('link')} to={'/'}>
                    chính sách bảo mật
                  </Link>
                </p>
                <p>
                  <Link className={cx('link')} to={'/'}>
                    chĩnh hãng
                  </Link>
                </p>
                <p>
                  <Link className={cx('link')} to={'/'}>
                    kênh người bán
                  </Link>
                </p>
                <p>
                  <Link className={cx('link')} to={'/'}>
                    flash sale
                  </Link>
                </p>
                <p>
                  <Link className={cx('link')} to={'/'}>
                    chương trình tiếp thị liên kết shopee
                  </Link>
                </p>
                <p>
                  <Link className={cx('link')} to={'/'}>
                    liên hệ với tuyển dụng
                  </Link>
                </p>
              </div>
            </div>
            <div className={cx('column')}>
              <h2 className={cx('title')}>thanh toán</h2>
              <div className={cx('content')}>
                <div className={cx('img_list')}>
                  {pay.map((item) => (
                    <div key={item.id} className={cx('img')}>
                      <img src={item.img} />
                    </div>
                  ))}
                </div>
              </div>

              <h2 className={cx('title', 'transport')}>đơn vị vận chuyển</h2>
              <div className={cx('content')}>
                <div className={cx('img_list')}>
                  {transport.map((item) => (
                    <div key={item.id} className={cx('img')}>
                      <img src={item.img} />
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div className={cx('column')}>
              <h2 className={cx('title')}>theo dõi chúng tôi trên</h2>

              <div className={cx('content')}>
                <p>
                  <Link className={cx('link')} to={'/'}>
                    <img
                      className={cx('icon_link')}
                      src="https://down-vn.img.susercontent.com/file/2277b37437aa470fd1c71127c6ff8eb5"
                      alt="Facebook"
                    />
                    <span>Facebook</span>
                  </Link>
                </p>
                <p>
                  <Link className={cx('link')} to={'/'}>
                    <img
                      className={cx('icon_link')}
                      src="https://down-vn.img.susercontent.com/file/5973ebbc642ceee80a504a81203bfb91"
                      alt="Instagram"
                    />
                    <span>Instagram</span>
                  </Link>
                </p>
                <p>
                  <Link className={cx('link')} to={'/'}>
                    <img
                      className={cx('icon_link')}
                      src="https://down-vn.img.susercontent.com/file/f4f86f1119712b553992a75493065d9a"
                      alt="LinkedIn"
                    />
                    <span>LinkedIn</span>
                  </Link>
                </p>
              </div>
            </div>
            <div className={cx('column')}>
              <h2 className={cx('title')}>tải ứng dụng shopee ngay thôi</h2>

              <div className={cx('content')}>
                <div className={cx('download_shopee')}>
                  <Link className={cx('link')} to={'/'}>
                    <div className={cx('qr_code')}>
                      <img
                        src="https://down-vn.img.susercontent.com/file/a5e589e8e118e937dc660f224b9a1472"
                        alt="QR CODE"
                      />
                    </div>
                  </Link>

                  <div className={cx('app_img')}>
                    <Link className={cx('link')} to={'/'}>
                      <div className={cx('app')}>
                        <img
                          src="https://down-vn.img.susercontent.com/file/ad01628e90ddf248076685f73497c163"
                          alt="App Store"
                        />
                      </div>
                    </Link>
                    <Link className={cx('link')} to={'/'}>
                      <div className={cx('app')}>
                        <img
                          src="https://down-vn.img.susercontent.com/file/ae7dced05f7243d0f3171f786e123def"
                          alt="Google Play"
                        />
                      </div>
                    </Link>
                    <Link className={cx('link')} to={'/'}>
                      <div className={cx('app')}>
                        <img
                          src="https://down-vn.img.susercontent.com/file/35352374f39bdd03b25e7b83542b2cb0"
                          alt="App Galaxy"
                        />
                      </div>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className={cx('row_2')}>
            <p>© 2023 Shopee. Tất cả các quyền được bảo lưu.</p>
            <p>
              Quốc gia & Khu vực: Singapore | Indonesia | Thái Lan | Malaysia |
              Việt Nam | Philippines | Brazil | México | Colombia | Chile | Đài
              Loan
            </p>
          </div>
        </div>
      </Container>
    </section>
  )
}

export default FooterMainTop
