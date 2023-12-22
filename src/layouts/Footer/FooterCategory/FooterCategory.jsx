import classNames from 'classnames/bind'
import styles from './FooterCategory.module.scss'
import { Link } from 'react-router-dom'
import { Container } from 'react-bootstrap'

const cx = classNames.bind(styles)

function FooterCategory() {
  return (
    <Container>
      <section className={cx('footer_category')}>
        <h1 className={cx('heading')}>Danh Mục</h1>

        <div className={cx('category_list')}>
          <div className={cx('item')}>
            <h3 className={cx('title')}>THỜI TRANG NAM</h3>
            <div className={cx('content')}>
              <div className={cx('product_list')}>
                <div>
                  <Link className="IhoxL6" to={'/'}>
                    Áo Khoác
                  </Link>
                </div>
                <span>&nbsp;|&nbsp;</span>
                <div>
                  <Link className="IhoxL6" to={'/'}>
                    Áo Vest và Blazer
                  </Link>
                </div>
                <span>&nbsp;|&nbsp;</span>
                <div>
                  <Link className="IhoxL6" to={'/'}>
                    Áo Hoodie, Áo Len &amp; Áo Nỉ
                  </Link>
                </div>
                <span>&nbsp;|&nbsp;</span>
                <div>
                  <Link className="IhoxL6" to={'/'}>
                    Quần Jeans
                  </Link>
                </div>
                <span>&nbsp;|&nbsp;</span>
                <div>
                  <Link className="IhoxL6" to={'/'}>
                    Quần Dài/Quần Âu
                  </Link>
                </div>
                <span>&nbsp;|&nbsp;</span>
                <div>
                  <Link className="IhoxL6" to={'/'}>
                    Quần Short
                  </Link>
                </div>
                <span>&nbsp;|&nbsp;</span>
                <div>
                  <Link className="IhoxL6" to={'/'}>
                    Áo
                  </Link>
                </div>
                <span>&nbsp;|&nbsp;</span>
                <div>
                  <Link className="IhoxL6" to={'/'}>
                    Áo Ba Lỗ
                  </Link>
                </div>
                <span>&nbsp;|&nbsp;</span>
                <div>
                  <Link className="IhoxL6" to={'/'}>
                    Đồ Lót
                  </Link>
                </div>
                <span>&nbsp;|&nbsp;</span>
                <div>
                  <Link className="IhoxL6" to={'/'}>
                    Đồ Ngủ
                  </Link>
                </div>
                <span>&nbsp;|&nbsp;</span>
                <div>
                  <Link className="IhoxL6" to={'/'}>
                    Đồ Bộ
                  </Link>
                </div>
                <span>&nbsp;|&nbsp;</span>
                <div>
                  <Link className="IhoxL6" to={'/'}>
                    Vớ/Tất
                  </Link>
                </div>
                <span>&nbsp;|&nbsp;</span>
                <div>
                  <Link className="IhoxL6" to={'/'}>
                    Trang Phục Truyền Thống
                  </Link>
                </div>
                <span>&nbsp;|&nbsp;</span>
                <div>
                  <Link className="IhoxL6" to={'/'}>
                    Đồ Hóa Trang
                  </Link>
                </div>
                <span>&nbsp;|&nbsp;</span>
                <div>
                  <Link className="IhoxL6" to={'/'}>
                    Trang Phục Ngành Nghề
                  </Link>
                </div>
                <span>&nbsp;|&nbsp;</span>
                <div>
                  <Link className="IhoxL6" to={'/'}>
                    Khác
                  </Link>
                </div>
                <span>&nbsp;|&nbsp;</span>
                <div>
                  <Link className="IhoxL6" to={'/'}>
                    Trang Sức Nam
                  </Link>
                </div>
                <span>&nbsp;|&nbsp;</span>
                <div>
                  <Link className="IhoxL6" to={'/'}>
                    Kính Mắt Nam
                  </Link>
                </div>
                <span>&nbsp;|&nbsp;</span>
                <div>
                  <Link className="IhoxL6" to={'/'}>
                    Thắt Lưng Nam
                  </Link>
                </div>
                <span>&nbsp;|&nbsp;</span>
                <div>
                  <Link className="IhoxL6" to={'/'}>
                    Cà vạt &amp; Nơ cổ
                  </Link>
                </div>
                <span>&nbsp;|&nbsp;</span>
                <div>
                  <Link className="IhoxL6" to={'/'}>
                    Phụ Kiện Nam
                  </Link>
                </div>
              </div>
            </div>
            <h3 className={cx('title')}>THỜI TRANG NAM</h3>
            <div className={cx('content')}>
              <div className={cx('product_list')}>
                <div>
                  <Link className="IhoxL6" to={'/'}>
                    Áo Khoác
                  </Link>
                </div>
                <span>&nbsp;|&nbsp;</span>
                <div>
                  <Link className="IhoxL6" to={'/'}>
                    Áo Vest và Blazer
                  </Link>
                </div>
                <span>&nbsp;|&nbsp;</span>
                <div>
                  <Link className="IhoxL6" to={'/'}>
                    Áo Hoodie, Áo Len &amp; Áo Nỉ
                  </Link>
                </div>
                <span>&nbsp;|&nbsp;</span>
                <div>
                  <Link className="IhoxL6" to={'/'}>
                    Quần Jeans
                  </Link>
                </div>
                <span>&nbsp;|&nbsp;</span>
                <div>
                  <Link className="IhoxL6" to={'/'}>
                    Quần Dài/Quần Âu
                  </Link>
                </div>
                <span>&nbsp;|&nbsp;</span>
                <div>
                  <Link className="IhoxL6" to={'/'}>
                    Quần Short
                  </Link>
                </div>
                <span>&nbsp;|&nbsp;</span>
                <div>
                  <Link className="IhoxL6" to={'/'}>
                    Áo
                  </Link>
                </div>
                <span>&nbsp;|&nbsp;</span>
                <div>
                  <Link className="IhoxL6" to={'/'}>
                    Áo Ba Lỗ
                  </Link>
                </div>
                <span>&nbsp;|&nbsp;</span>
                <div>
                  <Link className="IhoxL6" to={'/'}>
                    Đồ Lót
                  </Link>
                </div>
                <span>&nbsp;|&nbsp;</span>
                <div>
                  <Link className="IhoxL6" to={'/'}>
                    Đồ Ngủ
                  </Link>
                </div>
                <span>&nbsp;|&nbsp;</span>
                <div>
                  <Link className="IhoxL6" to={'/'}>
                    Đồ Bộ
                  </Link>
                </div>
                <span>&nbsp;|&nbsp;</span>
                <div>
                  <Link className="IhoxL6" to={'/'}>
                    Vớ/Tất
                  </Link>
                </div>
                <span>&nbsp;|&nbsp;</span>
                <div>
                  <Link className="IhoxL6" to={'/'}>
                    Trang Phục Truyền Thống
                  </Link>
                </div>
                <span>&nbsp;|&nbsp;</span>
                <div>
                  <Link className="IhoxL6" to={'/'}>
                    Đồ Hóa Trang
                  </Link>
                </div>
                <span>&nbsp;|&nbsp;</span>
                <div>
                  <Link className="IhoxL6" to={'/'}>
                    Trang Phục Ngành Nghề
                  </Link>
                </div>
                <span>&nbsp;|&nbsp;</span>
                <div>
                  <Link className="IhoxL6" to={'/'}>
                    Khác
                  </Link>
                </div>
                <span>&nbsp;|&nbsp;</span>
                <div>
                  <Link className="IhoxL6" to={'/'}>
                    Trang Sức Nam
                  </Link>
                </div>
                <span>&nbsp;|&nbsp;</span>
                <div>
                  <Link className="IhoxL6" to={'/'}>
                    Kính Mắt Nam
                  </Link>
                </div>
                <span>&nbsp;|&nbsp;</span>
                <div>
                  <Link className="IhoxL6" to={'/'}>
                    Thắt Lưng Nam
                  </Link>
                </div>
                <span>&nbsp;|&nbsp;</span>
                <div>
                  <Link className="IhoxL6" to={'/'}>
                    Cà vạt &amp; Nơ cổ
                  </Link>
                </div>
                <span>&nbsp;|&nbsp;</span>
                <div>
                  <Link className="IhoxL6" to={'/'}>
                    Phụ Kiện Nam
                  </Link>
                </div>
              </div>
            </div>
            <h3 className={cx('title')}>THỜI TRANG NAM</h3>
            <div className={cx('content')}>
              <div className={cx('product_list')}>
                <div>
                  <Link className="IhoxL6" to={'/'}>
                    Áo Khoác
                  </Link>
                </div>
                <span>&nbsp;|&nbsp;</span>
                <div>
                  <Link className="IhoxL6" to={'/'}>
                    Áo Vest và Blazer
                  </Link>
                </div>
                <span>&nbsp;|&nbsp;</span>
                <div>
                  <Link className="IhoxL6" to={'/'}>
                    Áo Hoodie, Áo Len &amp; Áo Nỉ
                  </Link>
                </div>
                <span>&nbsp;|&nbsp;</span>
                <div>
                  <Link className="IhoxL6" to={'/'}>
                    Quần Jeans
                  </Link>
                </div>
                <span>&nbsp;|&nbsp;</span>
                <div>
                  <Link className="IhoxL6" to={'/'}>
                    Quần Dài/Quần Âu
                  </Link>
                </div>
                <span>&nbsp;|&nbsp;</span>
                <div>
                  <Link className="IhoxL6" to={'/'}>
                    Quần Short
                  </Link>
                </div>
                <span>&nbsp;|&nbsp;</span>
                <div>
                  <Link className="IhoxL6" to={'/'}>
                    Áo
                  </Link>
                </div>
                <span>&nbsp;|&nbsp;</span>
                <div>
                  <Link className="IhoxL6" to={'/'}>
                    Áo Ba Lỗ
                  </Link>
                </div>
                <span>&nbsp;|&nbsp;</span>
                <div>
                  <Link className="IhoxL6" to={'/'}>
                    Đồ Lót
                  </Link>
                </div>
                <span>&nbsp;|&nbsp;</span>
                <div>
                  <Link className="IhoxL6" to={'/'}>
                    Đồ Ngủ
                  </Link>
                </div>
                <span>&nbsp;|&nbsp;</span>
                <div>
                  <Link className="IhoxL6" to={'/'}>
                    Đồ Bộ
                  </Link>
                </div>
                <span>&nbsp;|&nbsp;</span>
                <div>
                  <Link className="IhoxL6" to={'/'}>
                    Vớ/Tất
                  </Link>
                </div>
                <span>&nbsp;|&nbsp;</span>
                <div>
                  <Link className="IhoxL6" to={'/'}>
                    Trang Phục Truyền Thống
                  </Link>
                </div>
                <span>&nbsp;|&nbsp;</span>
                <div>
                  <Link className="IhoxL6" to={'/'}>
                    Đồ Hóa Trang
                  </Link>
                </div>
                <span>&nbsp;|&nbsp;</span>
                <div>
                  <Link className="IhoxL6" to={'/'}>
                    Trang Phục Ngành Nghề
                  </Link>
                </div>
                <span>&nbsp;|&nbsp;</span>
                <div>
                  <Link className="IhoxL6" to={'/'}>
                    Khác
                  </Link>
                </div>
                <span>&nbsp;|&nbsp;</span>
                <div>
                  <Link className="IhoxL6" to={'/'}>
                    Trang Sức Nam
                  </Link>
                </div>
                <span>&nbsp;|&nbsp;</span>
                <div>
                  <Link className="IhoxL6" to={'/'}>
                    Kính Mắt Nam
                  </Link>
                </div>
                <span>&nbsp;|&nbsp;</span>
                <div>
                  <Link className="IhoxL6" to={'/'}>
                    Thắt Lưng Nam
                  </Link>
                </div>
                <span>&nbsp;|&nbsp;</span>
                <div>
                  <Link className="IhoxL6" to={'/'}>
                    Cà vạt &amp; Nơ cổ
                  </Link>
                </div>
                <span>&nbsp;|&nbsp;</span>
                <div>
                  <Link className="IhoxL6" to={'/'}>
                    Phụ Kiện Nam
                  </Link>
                </div>
              </div>
            </div>
            <h3 className={cx('title')}>THỜI TRANG NAM</h3>
            <div className={cx('content')}>
              <div className={cx('product_list')}>
                <div>
                  <Link className="IhoxL6" to={'/'}>
                    Áo Khoác
                  </Link>
                </div>
                <span>&nbsp;|&nbsp;</span>
                <div>
                  <Link className="IhoxL6" to={'/'}>
                    Áo Vest và Blazer
                  </Link>
                </div>
                <span>&nbsp;|&nbsp;</span>
                <div>
                  <Link className="IhoxL6" to={'/'}>
                    Áo Hoodie, Áo Len &amp; Áo Nỉ
                  </Link>
                </div>
                <span>&nbsp;|&nbsp;</span>
                <div>
                  <Link className="IhoxL6" to={'/'}>
                    Quần Jeans
                  </Link>
                </div>
                <span>&nbsp;|&nbsp;</span>
                <div>
                  <Link className="IhoxL6" to={'/'}>
                    Quần Dài/Quần Âu
                  </Link>
                </div>
                <span>&nbsp;|&nbsp;</span>
                <div>
                  <Link className="IhoxL6" to={'/'}>
                    Quần Short
                  </Link>
                </div>
                <span>&nbsp;|&nbsp;</span>
                <div>
                  <Link className="IhoxL6" to={'/'}>
                    Áo
                  </Link>
                </div>
                <span>&nbsp;|&nbsp;</span>
                <div>
                  <Link className="IhoxL6" to={'/'}>
                    Áo Ba Lỗ
                  </Link>
                </div>
                <span>&nbsp;|&nbsp;</span>
                <div>
                  <Link className="IhoxL6" to={'/'}>
                    Đồ Lót
                  </Link>
                </div>
                <span>&nbsp;|&nbsp;</span>
                <div>
                  <Link className="IhoxL6" to={'/'}>
                    Đồ Ngủ
                  </Link>
                </div>
                <span>&nbsp;|&nbsp;</span>
                <div>
                  <Link className="IhoxL6" to={'/'}>
                    Đồ Bộ
                  </Link>
                </div>
                <span>&nbsp;|&nbsp;</span>
                <div>
                  <Link className="IhoxL6" to={'/'}>
                    Vớ/Tất
                  </Link>
                </div>
                <span>&nbsp;|&nbsp;</span>
                <div>
                  <Link className="IhoxL6" to={'/'}>
                    Trang Phục Truyền Thống
                  </Link>
                </div>
                <span>&nbsp;|&nbsp;</span>
                <div>
                  <Link className="IhoxL6" to={'/'}>
                    Đồ Hóa Trang
                  </Link>
                </div>
                <span>&nbsp;|&nbsp;</span>
                <div>
                  <Link className="IhoxL6" to={'/'}>
                    Trang Phục Ngành Nghề
                  </Link>
                </div>
                <span>&nbsp;|&nbsp;</span>
                <div>
                  <Link className="IhoxL6" to={'/'}>
                    Khác
                  </Link>
                </div>
                <span>&nbsp;|&nbsp;</span>
                <div>
                  <Link className="IhoxL6" to={'/'}>
                    Trang Sức Nam
                  </Link>
                </div>
                <span>&nbsp;|&nbsp;</span>
                <div>
                  <Link className="IhoxL6" to={'/'}>
                    Kính Mắt Nam
                  </Link>
                </div>
                <span>&nbsp;|&nbsp;</span>
                <div>
                  <Link className="IhoxL6" to={'/'}>
                    Thắt Lưng Nam
                  </Link>
                </div>
                <span>&nbsp;|&nbsp;</span>
                <div>
                  <Link className="IhoxL6" to={'/'}>
                    Cà vạt &amp; Nơ cổ
                  </Link>
                </div>
                <span>&nbsp;|&nbsp;</span>
                <div>
                  <Link className="IhoxL6" to={'/'}>
                    Phụ Kiện Nam
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className={cx('item')}>
            <h3 className={cx('title')}>THỜI TRANG NAM</h3>
            <div className={cx('content')}>
              <div className={cx('product_list')}>
                <div>
                  <Link className="IhoxL6" to={'/'}>
                    Áo Khoác
                  </Link>
                </div>
                <span>&nbsp;|&nbsp;</span>
                <div>
                  <Link className="IhoxL6" to={'/'}>
                    Áo Vest và Blazer
                  </Link>
                </div>
                <span>&nbsp;|&nbsp;</span>
                <div>
                  <Link className="IhoxL6" to={'/'}>
                    Áo Hoodie, Áo Len &amp; Áo Nỉ
                  </Link>
                </div>
                <span>&nbsp;|&nbsp;</span>
                <div>
                  <Link className="IhoxL6" to={'/'}>
                    Quần Jeans
                  </Link>
                </div>
                <span>&nbsp;|&nbsp;</span>
                <div>
                  <Link className="IhoxL6" to={'/'}>
                    Quần Dài/Quần Âu
                  </Link>
                </div>
                <span>&nbsp;|&nbsp;</span>
                <div>
                  <Link className="IhoxL6" to={'/'}>
                    Quần Short
                  </Link>
                </div>
                <span>&nbsp;|&nbsp;</span>
                <div>
                  <Link className="IhoxL6" to={'/'}>
                    Áo
                  </Link>
                </div>
                <span>&nbsp;|&nbsp;</span>
                <div>
                  <Link className="IhoxL6" to={'/'}>
                    Áo Ba Lỗ
                  </Link>
                </div>
                <span>&nbsp;|&nbsp;</span>
                <div>
                  <Link className="IhoxL6" to={'/'}>
                    Đồ Lót
                  </Link>
                </div>
                <span>&nbsp;|&nbsp;</span>
                <div>
                  <Link className="IhoxL6" to={'/'}>
                    Đồ Ngủ
                  </Link>
                </div>
                <span>&nbsp;|&nbsp;</span>
                <div>
                  <Link className="IhoxL6" to={'/'}>
                    Đồ Bộ
                  </Link>
                </div>
                <span>&nbsp;|&nbsp;</span>
                <div>
                  <Link className="IhoxL6" to={'/'}>
                    Vớ/Tất
                  </Link>
                </div>
                <span>&nbsp;|&nbsp;</span>
                <div>
                  <Link className="IhoxL6" to={'/'}>
                    Trang Phục Truyền Thống
                  </Link>
                </div>
                <span>&nbsp;|&nbsp;</span>
                <div>
                  <Link className="IhoxL6" to={'/'}>
                    Đồ Hóa Trang
                  </Link>
                </div>
                <span>&nbsp;|&nbsp;</span>
                <div>
                  <Link className="IhoxL6" to={'/'}>
                    Trang Phục Ngành Nghề
                  </Link>
                </div>
                <span>&nbsp;|&nbsp;</span>
                <div>
                  <Link className="IhoxL6" to={'/'}>
                    Khác
                  </Link>
                </div>
                <span>&nbsp;|&nbsp;</span>
                <div>
                  <Link className="IhoxL6" to={'/'}>
                    Trang Sức Nam
                  </Link>
                </div>
                <span>&nbsp;|&nbsp;</span>
                <div>
                  <Link className="IhoxL6" to={'/'}>
                    Kính Mắt Nam
                  </Link>
                </div>
                <span>&nbsp;|&nbsp;</span>
                <div>
                  <Link className="IhoxL6" to={'/'}>
                    Thắt Lưng Nam
                  </Link>
                </div>
                <span>&nbsp;|&nbsp;</span>
                <div>
                  <Link className="IhoxL6" to={'/'}>
                    Cà vạt &amp; Nơ cổ
                  </Link>
                </div>
                <span>&nbsp;|&nbsp;</span>
                <div>
                  <Link className="IhoxL6" to={'/'}>
                    Phụ Kiện Nam
                  </Link>
                </div>
              </div>
            </div>
            <h3 className={cx('title')}>THỜI TRANG NAM</h3>
            <div className={cx('content')}>
              <div className={cx('product_list')}>
                <div>
                  <Link className="IhoxL6" to={'/'}>
                    Áo Khoác
                  </Link>
                </div>
                <span>&nbsp;|&nbsp;</span>
                <div>
                  <Link className="IhoxL6" to={'/'}>
                    Áo Vest và Blazer
                  </Link>
                </div>
                <span>&nbsp;|&nbsp;</span>
                <div>
                  <Link className="IhoxL6" to={'/'}>
                    Áo Hoodie, Áo Len &amp; Áo Nỉ
                  </Link>
                </div>
                <span>&nbsp;|&nbsp;</span>
                <div>
                  <Link className="IhoxL6" to={'/'}>
                    Quần Jeans
                  </Link>
                </div>
                <span>&nbsp;|&nbsp;</span>
                <div>
                  <Link className="IhoxL6" to={'/'}>
                    Quần Dài/Quần Âu
                  </Link>
                </div>
                <span>&nbsp;|&nbsp;</span>
                <div>
                  <Link className="IhoxL6" to={'/'}>
                    Quần Short
                  </Link>
                </div>
                <span>&nbsp;|&nbsp;</span>
                <div>
                  <Link className="IhoxL6" to={'/'}>
                    Áo
                  </Link>
                </div>
                <span>&nbsp;|&nbsp;</span>
                <div>
                  <Link className="IhoxL6" to={'/'}>
                    Áo Ba Lỗ
                  </Link>
                </div>
                <span>&nbsp;|&nbsp;</span>
                <div>
                  <Link className="IhoxL6" to={'/'}>
                    Đồ Lót
                  </Link>
                </div>
                <span>&nbsp;|&nbsp;</span>
                <div>
                  <Link className="IhoxL6" to={'/'}>
                    Đồ Ngủ
                  </Link>
                </div>
                <span>&nbsp;|&nbsp;</span>
                <div>
                  <Link className="IhoxL6" to={'/'}>
                    Đồ Bộ
                  </Link>
                </div>
                <span>&nbsp;|&nbsp;</span>
                <div>
                  <Link className="IhoxL6" to={'/'}>
                    Vớ/Tất
                  </Link>
                </div>
                <span>&nbsp;|&nbsp;</span>
                <div>
                  <Link className="IhoxL6" to={'/'}>
                    Trang Phục Truyền Thống
                  </Link>
                </div>
                <span>&nbsp;|&nbsp;</span>
                <div>
                  <Link className="IhoxL6" to={'/'}>
                    Đồ Hóa Trang
                  </Link>
                </div>
                <span>&nbsp;|&nbsp;</span>
                <div>
                  <Link className="IhoxL6" to={'/'}>
                    Trang Phục Ngành Nghề
                  </Link>
                </div>
                <span>&nbsp;|&nbsp;</span>
                <div>
                  <Link className="IhoxL6" to={'/'}>
                    Khác
                  </Link>
                </div>
                <span>&nbsp;|&nbsp;</span>
                <div>
                  <Link className="IhoxL6" to={'/'}>
                    Trang Sức Nam
                  </Link>
                </div>
                <span>&nbsp;|&nbsp;</span>
                <div>
                  <Link className="IhoxL6" to={'/'}>
                    Kính Mắt Nam
                  </Link>
                </div>
                <span>&nbsp;|&nbsp;</span>
                <div>
                  <Link className="IhoxL6" to={'/'}>
                    Thắt Lưng Nam
                  </Link>
                </div>
                <span>&nbsp;|&nbsp;</span>
                <div>
                  <Link className="IhoxL6" to={'/'}>
                    Cà vạt &amp; Nơ cổ
                  </Link>
                </div>
                <span>&nbsp;|&nbsp;</span>
                <div>
                  <Link className="IhoxL6" to={'/'}>
                    Phụ Kiện Nam
                  </Link>
                </div>
              </div>
            </div>
            <h3 className={cx('title')}>THỜI TRANG NAM</h3>
            <div className={cx('content')}>
              <div className={cx('product_list')}>
                <div>
                  <Link className="IhoxL6" to={'/'}>
                    Áo Khoác
                  </Link>
                </div>
                <span>&nbsp;|&nbsp;</span>
                <div>
                  <Link className="IhoxL6" to={'/'}>
                    Áo Vest và Blazer
                  </Link>
                </div>
                <span>&nbsp;|&nbsp;</span>
                <div>
                  <Link className="IhoxL6" to={'/'}>
                    Áo Hoodie, Áo Len &amp; Áo Nỉ
                  </Link>
                </div>
                <span>&nbsp;|&nbsp;</span>
                <div>
                  <Link className="IhoxL6" to={'/'}>
                    Quần Jeans
                  </Link>
                </div>
                <span>&nbsp;|&nbsp;</span>
                <div>
                  <Link className="IhoxL6" to={'/'}>
                    Quần Dài/Quần Âu
                  </Link>
                </div>
                <span>&nbsp;|&nbsp;</span>
                <div>
                  <Link className="IhoxL6" to={'/'}>
                    Quần Short
                  </Link>
                </div>
                <span>&nbsp;|&nbsp;</span>
                <div>
                  <Link className="IhoxL6" to={'/'}>
                    Áo
                  </Link>
                </div>
                <span>&nbsp;|&nbsp;</span>
                <div>
                  <Link className="IhoxL6" to={'/'}>
                    Áo Ba Lỗ
                  </Link>
                </div>
                <span>&nbsp;|&nbsp;</span>
                <div>
                  <Link className="IhoxL6" to={'/'}>
                    Đồ Lót
                  </Link>
                </div>
                <span>&nbsp;|&nbsp;</span>
                <div>
                  <Link className="IhoxL6" to={'/'}>
                    Đồ Ngủ
                  </Link>
                </div>
                <span>&nbsp;|&nbsp;</span>
                <div>
                  <Link className="IhoxL6" to={'/'}>
                    Đồ Bộ
                  </Link>
                </div>
                <span>&nbsp;|&nbsp;</span>
                <div>
                  <Link className="IhoxL6" to={'/'}>
                    Vớ/Tất
                  </Link>
                </div>
                <span>&nbsp;|&nbsp;</span>
                <div>
                  <Link className="IhoxL6" to={'/'}>
                    Trang Phục Truyền Thống
                  </Link>
                </div>
                <span>&nbsp;|&nbsp;</span>
                <div>
                  <Link className="IhoxL6" to={'/'}>
                    Đồ Hóa Trang
                  </Link>
                </div>
                <span>&nbsp;|&nbsp;</span>
                <div>
                  <Link className="IhoxL6" to={'/'}>
                    Trang Phục Ngành Nghề
                  </Link>
                </div>
                <span>&nbsp;|&nbsp;</span>
                <div>
                  <Link className="IhoxL6" to={'/'}>
                    Khác
                  </Link>
                </div>
                <span>&nbsp;|&nbsp;</span>
                <div>
                  <Link className="IhoxL6" to={'/'}>
                    Trang Sức Nam
                  </Link>
                </div>
                <span>&nbsp;|&nbsp;</span>
                <div>
                  <Link className="IhoxL6" to={'/'}>
                    Kính Mắt Nam
                  </Link>
                </div>
                <span>&nbsp;|&nbsp;</span>
                <div>
                  <Link className="IhoxL6" to={'/'}>
                    Thắt Lưng Nam
                  </Link>
                </div>
                <span>&nbsp;|&nbsp;</span>
                <div>
                  <Link className="IhoxL6" to={'/'}>
                    Cà vạt &amp; Nơ cổ
                  </Link>
                </div>
                <span>&nbsp;|&nbsp;</span>
                <div>
                  <Link className="IhoxL6" to={'/'}>
                    Phụ Kiện Nam
                  </Link>
                </div>
              </div>
            </div>
            <h3 className={cx('title')}>THỜI TRANG NAM</h3>
            <div className={cx('content')}>
              <div className={cx('product_list')}>
                <div>
                  <Link className="IhoxL6" to={'/'}>
                    Áo Khoác
                  </Link>
                </div>
                <span>&nbsp;|&nbsp;</span>
                <div>
                  <Link className="IhoxL6" to={'/'}>
                    Áo Vest và Blazer
                  </Link>
                </div>
                <span>&nbsp;|&nbsp;</span>
                <div>
                  <Link className="IhoxL6" to={'/'}>
                    Áo Hoodie, Áo Len &amp; Áo Nỉ
                  </Link>
                </div>
                <span>&nbsp;|&nbsp;</span>
                <div>
                  <Link className="IhoxL6" to={'/'}>
                    Quần Jeans
                  </Link>
                </div>
                <span>&nbsp;|&nbsp;</span>
                <div>
                  <Link className="IhoxL6" to={'/'}>
                    Quần Dài/Quần Âu
                  </Link>
                </div>
                <span>&nbsp;|&nbsp;</span>
                <div>
                  <Link className="IhoxL6" to={'/'}>
                    Quần Short
                  </Link>
                </div>
                <span>&nbsp;|&nbsp;</span>
                <div>
                  <Link className="IhoxL6" to={'/'}>
                    Áo
                  </Link>
                </div>
                <span>&nbsp;|&nbsp;</span>
                <div>
                  <Link className="IhoxL6" to={'/'}>
                    Áo Ba Lỗ
                  </Link>
                </div>
                <span>&nbsp;|&nbsp;</span>
                <div>
                  <Link className="IhoxL6" to={'/'}>
                    Đồ Lót
                  </Link>
                </div>
                <span>&nbsp;|&nbsp;</span>
                <div>
                  <Link className="IhoxL6" to={'/'}>
                    Đồ Ngủ
                  </Link>
                </div>
                <span>&nbsp;|&nbsp;</span>
                <div>
                  <Link className="IhoxL6" to={'/'}>
                    Đồ Bộ
                  </Link>
                </div>
                <span>&nbsp;|&nbsp;</span>
                <div>
                  <Link className="IhoxL6" to={'/'}>
                    Vớ/Tất
                  </Link>
                </div>
                <span>&nbsp;|&nbsp;</span>
                <div>
                  <Link className="IhoxL6" to={'/'}>
                    Trang Phục Truyền Thống
                  </Link>
                </div>
                <span>&nbsp;|&nbsp;</span>
                <div>
                  <Link className="IhoxL6" to={'/'}>
                    Đồ Hóa Trang
                  </Link>
                </div>
                <span>&nbsp;|&nbsp;</span>
                <div>
                  <Link className="IhoxL6" to={'/'}>
                    Trang Phục Ngành Nghề
                  </Link>
                </div>
                <span>&nbsp;|&nbsp;</span>
                <div>
                  <Link className="IhoxL6" to={'/'}>
                    Khác
                  </Link>
                </div>
                <span>&nbsp;|&nbsp;</span>
                <div>
                  <Link className="IhoxL6" to={'/'}>
                    Trang Sức Nam
                  </Link>
                </div>
                <span>&nbsp;|&nbsp;</span>
                <div>
                  <Link className="IhoxL6" to={'/'}>
                    Kính Mắt Nam
                  </Link>
                </div>
                <span>&nbsp;|&nbsp;</span>
                <div>
                  <Link className="IhoxL6" to={'/'}>
                    Thắt Lưng Nam
                  </Link>
                </div>
                <span>&nbsp;|&nbsp;</span>
                <div>
                  <Link className="IhoxL6" to={'/'}>
                    Cà vạt &amp; Nơ cổ
                  </Link>
                </div>
                <span>&nbsp;|&nbsp;</span>
                <div>
                  <Link className="IhoxL6" to={'/'}>
                    Phụ Kiện Nam
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className={cx('item')}>
            <h3 className={cx('title')}>THỜI TRANG NAM</h3>
            <div className={cx('content')}>
              <div className={cx('product_list')}>
                <div>
                  <Link className="IhoxL6" to={'/'}>
                    Áo Khoác
                  </Link>
                </div>
                <span>&nbsp;|&nbsp;</span>
                <div>
                  <Link className="IhoxL6" to={'/'}>
                    Áo Vest và Blazer
                  </Link>
                </div>
                <span>&nbsp;|&nbsp;</span>
                <div>
                  <Link className="IhoxL6" to={'/'}>
                    Áo Hoodie, Áo Len &amp; Áo Nỉ
                  </Link>
                </div>
                <span>&nbsp;|&nbsp;</span>
                <div>
                  <Link className="IhoxL6" to={'/'}>
                    Quần Jeans
                  </Link>
                </div>
                <span>&nbsp;|&nbsp;</span>
                <div>
                  <Link className="IhoxL6" to={'/'}>
                    Quần Dài/Quần Âu
                  </Link>
                </div>
                <span>&nbsp;|&nbsp;</span>
                <div>
                  <Link className="IhoxL6" to={'/'}>
                    Quần Short
                  </Link>
                </div>
                <span>&nbsp;|&nbsp;</span>
                <div>
                  <Link className="IhoxL6" to={'/'}>
                    Áo
                  </Link>
                </div>
                <span>&nbsp;|&nbsp;</span>
                <div>
                  <Link className="IhoxL6" to={'/'}>
                    Áo Ba Lỗ
                  </Link>
                </div>
                <span>&nbsp;|&nbsp;</span>
                <div>
                  <Link className="IhoxL6" to={'/'}>
                    Đồ Lót
                  </Link>
                </div>
                <span>&nbsp;|&nbsp;</span>
                <div>
                  <Link className="IhoxL6" to={'/'}>
                    Đồ Ngủ
                  </Link>
                </div>
                <span>&nbsp;|&nbsp;</span>
                <div>
                  <Link className="IhoxL6" to={'/'}>
                    Đồ Bộ
                  </Link>
                </div>
                <span>&nbsp;|&nbsp;</span>
                <div>
                  <Link className="IhoxL6" to={'/'}>
                    Vớ/Tất
                  </Link>
                </div>
                <span>&nbsp;|&nbsp;</span>
                <div>
                  <Link className="IhoxL6" to={'/'}>
                    Trang Phục Truyền Thống
                  </Link>
                </div>
                <span>&nbsp;|&nbsp;</span>
                <div>
                  <Link className="IhoxL6" to={'/'}>
                    Đồ Hóa Trang
                  </Link>
                </div>
                <span>&nbsp;|&nbsp;</span>
                <div>
                  <Link className="IhoxL6" to={'/'}>
                    Trang Phục Ngành Nghề
                  </Link>
                </div>
                <span>&nbsp;|&nbsp;</span>
                <div>
                  <Link className="IhoxL6" to={'/'}>
                    Khác
                  </Link>
                </div>
                <span>&nbsp;|&nbsp;</span>
                <div>
                  <Link className="IhoxL6" to={'/'}>
                    Trang Sức Nam
                  </Link>
                </div>
                <span>&nbsp;|&nbsp;</span>
                <div>
                  <Link className="IhoxL6" to={'/'}>
                    Kính Mắt Nam
                  </Link>
                </div>
                <span>&nbsp;|&nbsp;</span>
                <div>
                  <Link className="IhoxL6" to={'/'}>
                    Thắt Lưng Nam
                  </Link>
                </div>
                <span>&nbsp;|&nbsp;</span>
                <div>
                  <Link className="IhoxL6" to={'/'}>
                    Cà vạt &amp; Nơ cổ
                  </Link>
                </div>
                <span>&nbsp;|&nbsp;</span>
                <div>
                  <Link className="IhoxL6" to={'/'}>
                    Phụ Kiện Nam
                  </Link>
                </div>
              </div>
            </div>
            <h3 className={cx('title')}>THỜI TRANG NAM</h3>
            <div className={cx('content')}>
              <div className={cx('product_list')}>
                <div>
                  <Link className="IhoxL6" to={'/'}>
                    Áo Khoác
                  </Link>
                </div>
                <span>&nbsp;|&nbsp;</span>
                <div>
                  <Link className="IhoxL6" to={'/'}>
                    Áo Vest và Blazer
                  </Link>
                </div>
                <span>&nbsp;|&nbsp;</span>
                <div>
                  <Link className="IhoxL6" to={'/'}>
                    Áo Hoodie, Áo Len &amp; Áo Nỉ
                  </Link>
                </div>
                <span>&nbsp;|&nbsp;</span>
                <div>
                  <Link className="IhoxL6" to={'/'}>
                    Quần Jeans
                  </Link>
                </div>
                <span>&nbsp;|&nbsp;</span>
                <div>
                  <Link className="IhoxL6" to={'/'}>
                    Quần Dài/Quần Âu
                  </Link>
                </div>
                <span>&nbsp;|&nbsp;</span>
                <div>
                  <Link className="IhoxL6" to={'/'}>
                    Quần Short
                  </Link>
                </div>
                <span>&nbsp;|&nbsp;</span>
                <div>
                  <Link className="IhoxL6" to={'/'}>
                    Áo
                  </Link>
                </div>
                <span>&nbsp;|&nbsp;</span>
                <div>
                  <Link className="IhoxL6" to={'/'}>
                    Áo Ba Lỗ
                  </Link>
                </div>
                <span>&nbsp;|&nbsp;</span>
                <div>
                  <Link className="IhoxL6" to={'/'}>
                    Đồ Lót
                  </Link>
                </div>
                <span>&nbsp;|&nbsp;</span>
                <div>
                  <Link className="IhoxL6" to={'/'}>
                    Đồ Ngủ
                  </Link>
                </div>
                <span>&nbsp;|&nbsp;</span>
                <div>
                  <Link className="IhoxL6" to={'/'}>
                    Đồ Bộ
                  </Link>
                </div>
                <span>&nbsp;|&nbsp;</span>
                <div>
                  <Link className="IhoxL6" to={'/'}>
                    Vớ/Tất
                  </Link>
                </div>
                <span>&nbsp;|&nbsp;</span>
                <div>
                  <Link className="IhoxL6" to={'/'}>
                    Trang Phục Truyền Thống
                  </Link>
                </div>
                <span>&nbsp;|&nbsp;</span>
                <div>
                  <Link className="IhoxL6" to={'/'}>
                    Đồ Hóa Trang
                  </Link>
                </div>
                <span>&nbsp;|&nbsp;</span>
                <div>
                  <Link className="IhoxL6" to={'/'}>
                    Trang Phục Ngành Nghề
                  </Link>
                </div>
                <span>&nbsp;|&nbsp;</span>
                <div>
                  <Link className="IhoxL6" to={'/'}>
                    Khác
                  </Link>
                </div>
                <span>&nbsp;|&nbsp;</span>
                <div>
                  <Link className="IhoxL6" to={'/'}>
                    Trang Sức Nam
                  </Link>
                </div>
                <span>&nbsp;|&nbsp;</span>
                <div>
                  <Link className="IhoxL6" to={'/'}>
                    Kính Mắt Nam
                  </Link>
                </div>
                <span>&nbsp;|&nbsp;</span>
                <div>
                  <Link className="IhoxL6" to={'/'}>
                    Thắt Lưng Nam
                  </Link>
                </div>
                <span>&nbsp;|&nbsp;</span>
                <div>
                  <Link className="IhoxL6" to={'/'}>
                    Cà vạt &amp; Nơ cổ
                  </Link>
                </div>
                <span>&nbsp;|&nbsp;</span>
                <div>
                  <Link className="IhoxL6" to={'/'}>
                    Phụ Kiện Nam
                  </Link>
                </div>
              </div>
            </div>
            <h3 className={cx('title')}>THỜI TRANG NAM</h3>
            <div className={cx('content')}>
              <div className={cx('product_list')}>
                <div>
                  <Link className="IhoxL6" to={'/'}>
                    Áo Khoác
                  </Link>
                </div>
                <span>&nbsp;|&nbsp;</span>
                <div>
                  <Link className="IhoxL6" to={'/'}>
                    Áo Vest và Blazer
                  </Link>
                </div>
                <span>&nbsp;|&nbsp;</span>
                <div>
                  <Link className="IhoxL6" to={'/'}>
                    Áo Hoodie, Áo Len &amp; Áo Nỉ
                  </Link>
                </div>
                <span>&nbsp;|&nbsp;</span>
                <div>
                  <Link className="IhoxL6" to={'/'}>
                    Quần Jeans
                  </Link>
                </div>
                <span>&nbsp;|&nbsp;</span>
                <div>
                  <Link className="IhoxL6" to={'/'}>
                    Quần Dài/Quần Âu
                  </Link>
                </div>
                <span>&nbsp;|&nbsp;</span>
                <div>
                  <Link className="IhoxL6" to={'/'}>
                    Quần Short
                  </Link>
                </div>
                <span>&nbsp;|&nbsp;</span>
                <div>
                  <Link className="IhoxL6" to={'/'}>
                    Áo
                  </Link>
                </div>
                <span>&nbsp;|&nbsp;</span>
                <div>
                  <Link className="IhoxL6" to={'/'}>
                    Áo Ba Lỗ
                  </Link>
                </div>
                <span>&nbsp;|&nbsp;</span>
                <div>
                  <Link className="IhoxL6" to={'/'}>
                    Đồ Lót
                  </Link>
                </div>
                <span>&nbsp;|&nbsp;</span>
                <div>
                  <Link className="IhoxL6" to={'/'}>
                    Đồ Ngủ
                  </Link>
                </div>
                <span>&nbsp;|&nbsp;</span>
                <div>
                  <Link className="IhoxL6" to={'/'}>
                    Đồ Bộ
                  </Link>
                </div>
                <span>&nbsp;|&nbsp;</span>
                <div>
                  <Link className="IhoxL6" to={'/'}>
                    Vớ/Tất
                  </Link>
                </div>
                <span>&nbsp;|&nbsp;</span>
                <div>
                  <Link className="IhoxL6" to={'/'}>
                    Trang Phục Truyền Thống
                  </Link>
                </div>
                <span>&nbsp;|&nbsp;</span>
                <div>
                  <Link className="IhoxL6" to={'/'}>
                    Đồ Hóa Trang
                  </Link>
                </div>
                <span>&nbsp;|&nbsp;</span>
                <div>
                  <Link className="IhoxL6" to={'/'}>
                    Trang Phục Ngành Nghề
                  </Link>
                </div>
                <span>&nbsp;|&nbsp;</span>
                <div>
                  <Link className="IhoxL6" to={'/'}>
                    Khác
                  </Link>
                </div>
                <span>&nbsp;|&nbsp;</span>
                <div>
                  <Link className="IhoxL6" to={'/'}>
                    Trang Sức Nam
                  </Link>
                </div>
                <span>&nbsp;|&nbsp;</span>
                <div>
                  <Link className="IhoxL6" to={'/'}>
                    Kính Mắt Nam
                  </Link>
                </div>
                <span>&nbsp;|&nbsp;</span>
                <div>
                  <Link className="IhoxL6" to={'/'}>
                    Thắt Lưng Nam
                  </Link>
                </div>
                <span>&nbsp;|&nbsp;</span>
                <div>
                  <Link className="IhoxL6" to={'/'}>
                    Cà vạt &amp; Nơ cổ
                  </Link>
                </div>
                <span>&nbsp;|&nbsp;</span>
                <div>
                  <Link className="IhoxL6" to={'/'}>
                    Phụ Kiện Nam
                  </Link>
                </div>
              </div>
            </div>
            <h3 className={cx('title')}>THỜI TRANG NAM</h3>
            <div className={cx('content')}>
              <div className={cx('product_list')}>
                <div>
                  <Link className="IhoxL6" to={'/'}>
                    Áo Khoác
                  </Link>
                </div>
                <span>&nbsp;|&nbsp;</span>
                <div>
                  <Link className="IhoxL6" to={'/'}>
                    Áo Vest và Blazer
                  </Link>
                </div>
                <span>&nbsp;|&nbsp;</span>
                <div>
                  <Link className="IhoxL6" to={'/'}>
                    Áo Hoodie, Áo Len &amp; Áo Nỉ
                  </Link>
                </div>
                <span>&nbsp;|&nbsp;</span>
                <div>
                  <Link className="IhoxL6" to={'/'}>
                    Quần Jeans
                  </Link>
                </div>
                <span>&nbsp;|&nbsp;</span>
                <div>
                  <Link className="IhoxL6" to={'/'}>
                    Quần Dài/Quần Âu
                  </Link>
                </div>
                <span>&nbsp;|&nbsp;</span>
                <div>
                  <Link className="IhoxL6" to={'/'}>
                    Quần Short
                  </Link>
                </div>
                <span>&nbsp;|&nbsp;</span>
                <div>
                  <Link className="IhoxL6" to={'/'}>
                    Áo
                  </Link>
                </div>
                <span>&nbsp;|&nbsp;</span>
                <div>
                  <Link className="IhoxL6" to={'/'}>
                    Áo Ba Lỗ
                  </Link>
                </div>
                <span>&nbsp;|&nbsp;</span>
                <div>
                  <Link className="IhoxL6" to={'/'}>
                    Đồ Lót
                  </Link>
                </div>
                <span>&nbsp;|&nbsp;</span>
                <div>
                  <Link className="IhoxL6" to={'/'}>
                    Đồ Ngủ
                  </Link>
                </div>
                <span>&nbsp;|&nbsp;</span>
                <div>
                  <Link className="IhoxL6" to={'/'}>
                    Đồ Bộ
                  </Link>
                </div>
                <span>&nbsp;|&nbsp;</span>
                <div>
                  <Link className="IhoxL6" to={'/'}>
                    Vớ/Tất
                  </Link>
                </div>
                <span>&nbsp;|&nbsp;</span>
                <div>
                  <Link className="IhoxL6" to={'/'}>
                    Trang Phục Truyền Thống
                  </Link>
                </div>
                <span>&nbsp;|&nbsp;</span>
                <div>
                  <Link className="IhoxL6" to={'/'}>
                    Đồ Hóa Trang
                  </Link>
                </div>
                <span>&nbsp;|&nbsp;</span>
                <div>
                  <Link className="IhoxL6" to={'/'}>
                    Trang Phục Ngành Nghề
                  </Link>
                </div>
                <span>&nbsp;|&nbsp;</span>
                <div>
                  <Link className="IhoxL6" to={'/'}>
                    Khác
                  </Link>
                </div>
                <span>&nbsp;|&nbsp;</span>
                <div>
                  <Link className="IhoxL6" to={'/'}>
                    Trang Sức Nam
                  </Link>
                </div>
                <span>&nbsp;|&nbsp;</span>
                <div>
                  <Link className="IhoxL6" to={'/'}>
                    Kính Mắt Nam
                  </Link>
                </div>
                <span>&nbsp;|&nbsp;</span>
                <div>
                  <Link className="IhoxL6" to={'/'}>
                    Thắt Lưng Nam
                  </Link>
                </div>
                <span>&nbsp;|&nbsp;</span>
                <div>
                  <Link className="IhoxL6" to={'/'}>
                    Cà vạt &amp; Nơ cổ
                  </Link>
                </div>
                <span>&nbsp;|&nbsp;</span>
                <div>
                  <Link className="IhoxL6" to={'/'}>
                    Phụ Kiện Nam
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className={cx('item')}>
            <h3 className={cx('title')}>THỜI TRANG NAM</h3>
            <div className={cx('content')}>
              <div className={cx('product_list')}>
                <div>
                  <Link className="IhoxL6" to={'/'}>
                    Áo Khoác
                  </Link>
                </div>
                <span>&nbsp;|&nbsp;</span>
                <div>
                  <Link className="IhoxL6" to={'/'}>
                    Áo Vest và Blazer
                  </Link>
                </div>
                <span>&nbsp;|&nbsp;</span>
                <div>
                  <Link className="IhoxL6" to={'/'}>
                    Áo Hoodie, Áo Len &amp; Áo Nỉ
                  </Link>
                </div>
                <span>&nbsp;|&nbsp;</span>
                <div>
                  <Link className="IhoxL6" to={'/'}>
                    Quần Jeans
                  </Link>
                </div>
                <span>&nbsp;|&nbsp;</span>
                <div>
                  <Link className="IhoxL6" to={'/'}>
                    Quần Dài/Quần Âu
                  </Link>
                </div>
                <span>&nbsp;|&nbsp;</span>
                <div>
                  <Link className="IhoxL6" to={'/'}>
                    Quần Short
                  </Link>
                </div>
                <span>&nbsp;|&nbsp;</span>
                <div>
                  <Link className="IhoxL6" to={'/'}>
                    Áo
                  </Link>
                </div>
                <span>&nbsp;|&nbsp;</span>
                <div>
                  <Link className="IhoxL6" to={'/'}>
                    Áo Ba Lỗ
                  </Link>
                </div>
                <span>&nbsp;|&nbsp;</span>
                <div>
                  <Link className="IhoxL6" to={'/'}>
                    Đồ Lót
                  </Link>
                </div>
                <span>&nbsp;|&nbsp;</span>
                <div>
                  <Link className="IhoxL6" to={'/'}>
                    Đồ Ngủ
                  </Link>
                </div>
                <span>&nbsp;|&nbsp;</span>
                <div>
                  <Link className="IhoxL6" to={'/'}>
                    Đồ Bộ
                  </Link>
                </div>
                <span>&nbsp;|&nbsp;</span>
                <div>
                  <Link className="IhoxL6" to={'/'}>
                    Vớ/Tất
                  </Link>
                </div>
                <span>&nbsp;|&nbsp;</span>
                <div>
                  <Link className="IhoxL6" to={'/'}>
                    Trang Phục Truyền Thống
                  </Link>
                </div>
                <span>&nbsp;|&nbsp;</span>
                <div>
                  <Link className="IhoxL6" to={'/'}>
                    Đồ Hóa Trang
                  </Link>
                </div>
                <span>&nbsp;|&nbsp;</span>
                <div>
                  <Link className="IhoxL6" to={'/'}>
                    Trang Phục Ngành Nghề
                  </Link>
                </div>
                <span>&nbsp;|&nbsp;</span>
                <div>
                  <Link className="IhoxL6" to={'/'}>
                    Khác
                  </Link>
                </div>
                <span>&nbsp;|&nbsp;</span>
                <div>
                  <Link className="IhoxL6" to={'/'}>
                    Trang Sức Nam
                  </Link>
                </div>
                <span>&nbsp;|&nbsp;</span>
                <div>
                  <Link className="IhoxL6" to={'/'}>
                    Kính Mắt Nam
                  </Link>
                </div>
                <span>&nbsp;|&nbsp;</span>
                <div>
                  <Link className="IhoxL6" to={'/'}>
                    Thắt Lưng Nam
                  </Link>
                </div>
                <span>&nbsp;|&nbsp;</span>
                <div>
                  <Link className="IhoxL6" to={'/'}>
                    Cà vạt &amp; Nơ cổ
                  </Link>
                </div>
                <span>&nbsp;|&nbsp;</span>
                <div>
                  <Link className="IhoxL6" to={'/'}>
                    Phụ Kiện Nam
                  </Link>
                </div>
              </div>
            </div>
            <h3 className={cx('title')}>THỜI TRANG NAM</h3>
            <div className={cx('content')}>
              <div className={cx('product_list')}>
                <div>
                  <Link className="IhoxL6" to={'/'}>
                    Áo Khoác
                  </Link>
                </div>
                <span>&nbsp;|&nbsp;</span>
                <div>
                  <Link className="IhoxL6" to={'/'}>
                    Áo Vest và Blazer
                  </Link>
                </div>
                <span>&nbsp;|&nbsp;</span>
                <div>
                  <Link className="IhoxL6" to={'/'}>
                    Áo Hoodie, Áo Len &amp; Áo Nỉ
                  </Link>
                </div>
                <span>&nbsp;|&nbsp;</span>
                <div>
                  <Link className="IhoxL6" to={'/'}>
                    Quần Jeans
                  </Link>
                </div>
                <span>&nbsp;|&nbsp;</span>
                <div>
                  <Link className="IhoxL6" to={'/'}>
                    Quần Dài/Quần Âu
                  </Link>
                </div>
                <span>&nbsp;|&nbsp;</span>
                <div>
                  <Link className="IhoxL6" to={'/'}>
                    Quần Short
                  </Link>
                </div>
                <span>&nbsp;|&nbsp;</span>
                <div>
                  <Link className="IhoxL6" to={'/'}>
                    Áo
                  </Link>
                </div>
                <span>&nbsp;|&nbsp;</span>
                <div>
                  <Link className="IhoxL6" to={'/'}>
                    Áo Ba Lỗ
                  </Link>
                </div>
                <span>&nbsp;|&nbsp;</span>
                <div>
                  <Link className="IhoxL6" to={'/'}>
                    Đồ Lót
                  </Link>
                </div>
                <span>&nbsp;|&nbsp;</span>
                <div>
                  <Link className="IhoxL6" to={'/'}>
                    Đồ Ngủ
                  </Link>
                </div>
                <span>&nbsp;|&nbsp;</span>
                <div>
                  <Link className="IhoxL6" to={'/'}>
                    Đồ Bộ
                  </Link>
                </div>
                <span>&nbsp;|&nbsp;</span>
                <div>
                  <Link className="IhoxL6" to={'/'}>
                    Vớ/Tất
                  </Link>
                </div>
                <span>&nbsp;|&nbsp;</span>
                <div>
                  <Link className="IhoxL6" to={'/'}>
                    Trang Phục Truyền Thống
                  </Link>
                </div>
                <span>&nbsp;|&nbsp;</span>
                <div>
                  <Link className="IhoxL6" to={'/'}>
                    Đồ Hóa Trang
                  </Link>
                </div>
                <span>&nbsp;|&nbsp;</span>
                <div>
                  <Link className="IhoxL6" to={'/'}>
                    Trang Phục Ngành Nghề
                  </Link>
                </div>
                <span>&nbsp;|&nbsp;</span>
                <div>
                  <Link className="IhoxL6" to={'/'}>
                    Khác
                  </Link>
                </div>
                <span>&nbsp;|&nbsp;</span>
                <div>
                  <Link className="IhoxL6" to={'/'}>
                    Trang Sức Nam
                  </Link>
                </div>
                <span>&nbsp;|&nbsp;</span>
                <div>
                  <Link className="IhoxL6" to={'/'}>
                    Kính Mắt Nam
                  </Link>
                </div>
                <span>&nbsp;|&nbsp;</span>
                <div>
                  <Link className="IhoxL6" to={'/'}>
                    Thắt Lưng Nam
                  </Link>
                </div>
                <span>&nbsp;|&nbsp;</span>
                <div>
                  <Link className="IhoxL6" to={'/'}>
                    Cà vạt &amp; Nơ cổ
                  </Link>
                </div>
                <span>&nbsp;|&nbsp;</span>
                <div>
                  <Link className="IhoxL6" to={'/'}>
                    Phụ Kiện Nam
                  </Link>
                </div>
              </div>
            </div>
            <h3 className={cx('title')}>THỜI TRANG NAM</h3>
            <div className={cx('content')}>
              <div className={cx('product_list')}>
                <div>
                  <Link className="IhoxL6" to={'/'}>
                    Áo Khoác
                  </Link>
                </div>
                <span>&nbsp;|&nbsp;</span>
                <div>
                  <Link className="IhoxL6" to={'/'}>
                    Áo Vest và Blazer
                  </Link>
                </div>
                <span>&nbsp;|&nbsp;</span>
                <div>
                  <Link className="IhoxL6" to={'/'}>
                    Áo Hoodie, Áo Len &amp; Áo Nỉ
                  </Link>
                </div>
                <span>&nbsp;|&nbsp;</span>
                <div>
                  <Link className="IhoxL6" to={'/'}>
                    Quần Jeans
                  </Link>
                </div>
                <span>&nbsp;|&nbsp;</span>
                <div>
                  <Link className="IhoxL6" to={'/'}>
                    Quần Dài/Quần Âu
                  </Link>
                </div>
                <span>&nbsp;|&nbsp;</span>
                <div>
                  <Link className="IhoxL6" to={'/'}>
                    Quần Short
                  </Link>
                </div>
                <span>&nbsp;|&nbsp;</span>
                <div>
                  <Link className="IhoxL6" to={'/'}>
                    Áo
                  </Link>
                </div>
                <span>&nbsp;|&nbsp;</span>
                <div>
                  <Link className="IhoxL6" to={'/'}>
                    Áo Ba Lỗ
                  </Link>
                </div>
                <span>&nbsp;|&nbsp;</span>
                <div>
                  <Link className="IhoxL6" to={'/'}>
                    Đồ Lót
                  </Link>
                </div>
                <span>&nbsp;|&nbsp;</span>
                <div>
                  <Link className="IhoxL6" to={'/'}>
                    Đồ Ngủ
                  </Link>
                </div>
                <span>&nbsp;|&nbsp;</span>
                <div>
                  <Link className="IhoxL6" to={'/'}>
                    Đồ Bộ
                  </Link>
                </div>
                <span>&nbsp;|&nbsp;</span>
                <div>
                  <Link className="IhoxL6" to={'/'}>
                    Vớ/Tất
                  </Link>
                </div>
                <span>&nbsp;|&nbsp;</span>
                <div>
                  <Link className="IhoxL6" to={'/'}>
                    Trang Phục Truyền Thống
                  </Link>
                </div>
                <span>&nbsp;|&nbsp;</span>
                <div>
                  <Link className="IhoxL6" to={'/'}>
                    Đồ Hóa Trang
                  </Link>
                </div>
                <span>&nbsp;|&nbsp;</span>
                <div>
                  <Link className="IhoxL6" to={'/'}>
                    Trang Phục Ngành Nghề
                  </Link>
                </div>
                <span>&nbsp;|&nbsp;</span>
                <div>
                  <Link className="IhoxL6" to={'/'}>
                    Khác
                  </Link>
                </div>
                <span>&nbsp;|&nbsp;</span>
                <div>
                  <Link className="IhoxL6" to={'/'}>
                    Trang Sức Nam
                  </Link>
                </div>
                <span>&nbsp;|&nbsp;</span>
                <div>
                  <Link className="IhoxL6" to={'/'}>
                    Kính Mắt Nam
                  </Link>
                </div>
                <span>&nbsp;|&nbsp;</span>
                <div>
                  <Link className="IhoxL6" to={'/'}>
                    Thắt Lưng Nam
                  </Link>
                </div>
                <span>&nbsp;|&nbsp;</span>
                <div>
                  <Link className="IhoxL6" to={'/'}>
                    Cà vạt &amp; Nơ cổ
                  </Link>
                </div>
                <span>&nbsp;|&nbsp;</span>
                <div>
                  <Link className="IhoxL6" to={'/'}>
                    Phụ Kiện Nam
                  </Link>
                </div>
              </div>
            </div>
            <h3 className={cx('title')}>THỜI TRANG NAM</h3>
            <div className={cx('content')}>
              <div className={cx('product_list')}>
                <div>
                  <Link className="IhoxL6" to={'/'}>
                    Áo Khoác
                  </Link>
                </div>
                <span>&nbsp;|&nbsp;</span>
                <div>
                  <Link className="IhoxL6" to={'/'}>
                    Áo Vest và Blazer
                  </Link>
                </div>
                <span>&nbsp;|&nbsp;</span>
                <div>
                  <Link className="IhoxL6" to={'/'}>
                    Áo Hoodie, Áo Len &amp; Áo Nỉ
                  </Link>
                </div>
                <span>&nbsp;|&nbsp;</span>
                <div>
                  <Link className="IhoxL6" to={'/'}>
                    Quần Jeans
                  </Link>
                </div>
                <span>&nbsp;|&nbsp;</span>
                <div>
                  <Link className="IhoxL6" to={'/'}>
                    Quần Dài/Quần Âu
                  </Link>
                </div>
                <span>&nbsp;|&nbsp;</span>
                <div>
                  <Link className="IhoxL6" to={'/'}>
                    Quần Short
                  </Link>
                </div>
                <span>&nbsp;|&nbsp;</span>
                <div>
                  <Link className="IhoxL6" to={'/'}>
                    Áo
                  </Link>
                </div>
                <span>&nbsp;|&nbsp;</span>
                <div>
                  <Link className="IhoxL6" to={'/'}>
                    Áo Ba Lỗ
                  </Link>
                </div>
                <span>&nbsp;|&nbsp;</span>
                <div>
                  <Link className="IhoxL6" to={'/'}>
                    Đồ Lót
                  </Link>
                </div>
                <span>&nbsp;|&nbsp;</span>
                <div>
                  <Link className="IhoxL6" to={'/'}>
                    Đồ Ngủ
                  </Link>
                </div>
                <span>&nbsp;|&nbsp;</span>
                <div>
                  <Link className="IhoxL6" to={'/'}>
                    Đồ Bộ
                  </Link>
                </div>
                <span>&nbsp;|&nbsp;</span>
                <div>
                  <Link className="IhoxL6" to={'/'}>
                    Vớ/Tất
                  </Link>
                </div>
                <span>&nbsp;|&nbsp;</span>
                <div>
                  <Link className="IhoxL6" to={'/'}>
                    Trang Phục Truyền Thống
                  </Link>
                </div>
                <span>&nbsp;|&nbsp;</span>
                <div>
                  <Link className="IhoxL6" to={'/'}>
                    Đồ Hóa Trang
                  </Link>
                </div>
                <span>&nbsp;|&nbsp;</span>
                <div>
                  <Link className="IhoxL6" to={'/'}>
                    Trang Phục Ngành Nghề
                  </Link>
                </div>
                <span>&nbsp;|&nbsp;</span>
                <div>
                  <Link className="IhoxL6" to={'/'}>
                    Khác
                  </Link>
                </div>
                <span>&nbsp;|&nbsp;</span>
                <div>
                  <Link className="IhoxL6" to={'/'}>
                    Trang Sức Nam
                  </Link>
                </div>
                <span>&nbsp;|&nbsp;</span>
                <div>
                  <Link className="IhoxL6" to={'/'}>
                    Kính Mắt Nam
                  </Link>
                </div>
                <span>&nbsp;|&nbsp;</span>
                <div>
                  <Link className="IhoxL6" to={'/'}>
                    Thắt Lưng Nam
                  </Link>
                </div>
                <span>&nbsp;|&nbsp;</span>
                <div>
                  <Link className="IhoxL6" to={'/'}>
                    Cà vạt &amp; Nơ cổ
                  </Link>
                </div>
                <span>&nbsp;|&nbsp;</span>
                <div>
                  <Link className="IhoxL6" to={'/'}>
                    Phụ Kiện Nam
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className={cx('item')}>
            <h3 className={cx('title')}>THỜI TRANG NAM</h3>
            <div className={cx('content')}>
              <div className={cx('product_list')}>
                <div>
                  <Link className="IhoxL6" to={'/'}>
                    Áo Khoác
                  </Link>
                </div>
                <span>&nbsp;|&nbsp;</span>
                <div>
                  <Link className="IhoxL6" to={'/'}>
                    Áo Vest và Blazer
                  </Link>
                </div>
                <span>&nbsp;|&nbsp;</span>
                <div>
                  <Link className="IhoxL6" to={'/'}>
                    Áo Hoodie, Áo Len &amp; Áo Nỉ
                  </Link>
                </div>
                <span>&nbsp;|&nbsp;</span>
                <div>
                  <Link className="IhoxL6" to={'/'}>
                    Quần Jeans
                  </Link>
                </div>
                <span>&nbsp;|&nbsp;</span>
                <div>
                  <Link className="IhoxL6" to={'/'}>
                    Quần Dài/Quần Âu
                  </Link>
                </div>
                <span>&nbsp;|&nbsp;</span>
                <div>
                  <Link className="IhoxL6" to={'/'}>
                    Quần Short
                  </Link>
                </div>
                <span>&nbsp;|&nbsp;</span>
                <div>
                  <Link className="IhoxL6" to={'/'}>
                    Áo
                  </Link>
                </div>
                <span>&nbsp;|&nbsp;</span>
                <div>
                  <Link className="IhoxL6" to={'/'}>
                    Áo Ba Lỗ
                  </Link>
                </div>
                <span>&nbsp;|&nbsp;</span>
                <div>
                  <Link className="IhoxL6" to={'/'}>
                    Đồ Lót
                  </Link>
                </div>
                <span>&nbsp;|&nbsp;</span>
                <div>
                  <Link className="IhoxL6" to={'/'}>
                    Đồ Ngủ
                  </Link>
                </div>
                <span>&nbsp;|&nbsp;</span>
                <div>
                  <Link className="IhoxL6" to={'/'}>
                    Đồ Bộ
                  </Link>
                </div>
                <span>&nbsp;|&nbsp;</span>
                <div>
                  <Link className="IhoxL6" to={'/'}>
                    Vớ/Tất
                  </Link>
                </div>
                <span>&nbsp;|&nbsp;</span>
                <div>
                  <Link className="IhoxL6" to={'/'}>
                    Trang Phục Truyền Thống
                  </Link>
                </div>
                <span>&nbsp;|&nbsp;</span>
                <div>
                  <Link className="IhoxL6" to={'/'}>
                    Đồ Hóa Trang
                  </Link>
                </div>
                <span>&nbsp;|&nbsp;</span>
                <div>
                  <Link className="IhoxL6" to={'/'}>
                    Trang Phục Ngành Nghề
                  </Link>
                </div>
                <span>&nbsp;|&nbsp;</span>
                <div>
                  <Link className="IhoxL6" to={'/'}>
                    Khác
                  </Link>
                </div>
                <span>&nbsp;|&nbsp;</span>
                <div>
                  <Link className="IhoxL6" to={'/'}>
                    Trang Sức Nam
                  </Link>
                </div>
                <span>&nbsp;|&nbsp;</span>
                <div>
                  <Link className="IhoxL6" to={'/'}>
                    Kính Mắt Nam
                  </Link>
                </div>
                <span>&nbsp;|&nbsp;</span>
                <div>
                  <Link className="IhoxL6" to={'/'}>
                    Thắt Lưng Nam
                  </Link>
                </div>
                <span>&nbsp;|&nbsp;</span>
                <div>
                  <Link className="IhoxL6" to={'/'}>
                    Cà vạt &amp; Nơ cổ
                  </Link>
                </div>
                <span>&nbsp;|&nbsp;</span>
                <div>
                  <Link className="IhoxL6" to={'/'}>
                    Phụ Kiện Nam
                  </Link>
                </div>
              </div>
            </div>
            <h3 className={cx('title')}>THỜI TRANG NAM</h3>
            <div className={cx('content')}>
              <div className={cx('product_list')}>
                <div>
                  <Link className="IhoxL6" to={'/'}>
                    Áo Khoác
                  </Link>
                </div>
                <span>&nbsp;|&nbsp;</span>
                <div>
                  <Link className="IhoxL6" to={'/'}>
                    Áo Vest và Blazer
                  </Link>
                </div>
                <span>&nbsp;|&nbsp;</span>
                <div>
                  <Link className="IhoxL6" to={'/'}>
                    Áo Hoodie, Áo Len &amp; Áo Nỉ
                  </Link>
                </div>
                <span>&nbsp;|&nbsp;</span>
                <div>
                  <Link className="IhoxL6" to={'/'}>
                    Quần Jeans
                  </Link>
                </div>
                <span>&nbsp;|&nbsp;</span>
                <div>
                  <Link className="IhoxL6" to={'/'}>
                    Quần Dài/Quần Âu
                  </Link>
                </div>
                <span>&nbsp;|&nbsp;</span>
                <div>
                  <Link className="IhoxL6" to={'/'}>
                    Quần Short
                  </Link>
                </div>
                <span>&nbsp;|&nbsp;</span>
                <div>
                  <Link className="IhoxL6" to={'/'}>
                    Áo
                  </Link>
                </div>
                <span>&nbsp;|&nbsp;</span>
                <div>
                  <Link className="IhoxL6" to={'/'}>
                    Áo Ba Lỗ
                  </Link>
                </div>
                <span>&nbsp;|&nbsp;</span>
                <div>
                  <Link className="IhoxL6" to={'/'}>
                    Đồ Lót
                  </Link>
                </div>
                <span>&nbsp;|&nbsp;</span>
                <div>
                  <Link className="IhoxL6" to={'/'}>
                    Đồ Ngủ
                  </Link>
                </div>
                <span>&nbsp;|&nbsp;</span>
                <div>
                  <Link className="IhoxL6" to={'/'}>
                    Đồ Bộ
                  </Link>
                </div>
                <span>&nbsp;|&nbsp;</span>
                <div>
                  <Link className="IhoxL6" to={'/'}>
                    Vớ/Tất
                  </Link>
                </div>
                <span>&nbsp;|&nbsp;</span>
                <div>
                  <Link className="IhoxL6" to={'/'}>
                    Trang Phục Truyền Thống
                  </Link>
                </div>
                <span>&nbsp;|&nbsp;</span>
                <div>
                  <Link className="IhoxL6" to={'/'}>
                    Đồ Hóa Trang
                  </Link>
                </div>
                <span>&nbsp;|&nbsp;</span>
                <div>
                  <Link className="IhoxL6" to={'/'}>
                    Trang Phục Ngành Nghề
                  </Link>
                </div>
                <span>&nbsp;|&nbsp;</span>
                <div>
                  <Link className="IhoxL6" to={'/'}>
                    Khác
                  </Link>
                </div>
                <span>&nbsp;|&nbsp;</span>
                <div>
                  <Link className="IhoxL6" to={'/'}>
                    Trang Sức Nam
                  </Link>
                </div>
                <span>&nbsp;|&nbsp;</span>
                <div>
                  <Link className="IhoxL6" to={'/'}>
                    Kính Mắt Nam
                  </Link>
                </div>
                <span>&nbsp;|&nbsp;</span>
                <div>
                  <Link className="IhoxL6" to={'/'}>
                    Thắt Lưng Nam
                  </Link>
                </div>
                <span>&nbsp;|&nbsp;</span>
                <div>
                  <Link className="IhoxL6" to={'/'}>
                    Cà vạt &amp; Nơ cổ
                  </Link>
                </div>
                <span>&nbsp;|&nbsp;</span>
                <div>
                  <Link className="IhoxL6" to={'/'}>
                    Phụ Kiện Nam
                  </Link>
                </div>
              </div>
            </div>
            <h3 className={cx('title')}>THỜI TRANG NAM</h3>
            <div className={cx('content')}>
              <div className={cx('product_list')}>
                <div>
                  <Link className="IhoxL6" to={'/'}>
                    Áo Khoác
                  </Link>
                </div>
                <span>&nbsp;|&nbsp;</span>
                <div>
                  <Link className="IhoxL6" to={'/'}>
                    Áo Vest và Blazer
                  </Link>
                </div>
                <span>&nbsp;|&nbsp;</span>
                <div>
                  <Link className="IhoxL6" to={'/'}>
                    Áo Hoodie, Áo Len &amp; Áo Nỉ
                  </Link>
                </div>
                <span>&nbsp;|&nbsp;</span>
                <div>
                  <Link className="IhoxL6" to={'/'}>
                    Quần Jeans
                  </Link>
                </div>
                <span>&nbsp;|&nbsp;</span>
                <div>
                  <Link className="IhoxL6" to={'/'}>
                    Quần Dài/Quần Âu
                  </Link>
                </div>
                <span>&nbsp;|&nbsp;</span>
                <div>
                  <Link className="IhoxL6" to={'/'}>
                    Quần Short
                  </Link>
                </div>
                <span>&nbsp;|&nbsp;</span>
                <div>
                  <Link className="IhoxL6" to={'/'}>
                    Áo
                  </Link>
                </div>
                <span>&nbsp;|&nbsp;</span>
                <div>
                  <Link className="IhoxL6" to={'/'}>
                    Áo Ba Lỗ
                  </Link>
                </div>
                <span>&nbsp;|&nbsp;</span>
                <div>
                  <Link className="IhoxL6" to={'/'}>
                    Đồ Lót
                  </Link>
                </div>
                <span>&nbsp;|&nbsp;</span>
                <div>
                  <Link className="IhoxL6" to={'/'}>
                    Đồ Ngủ
                  </Link>
                </div>
                <span>&nbsp;|&nbsp;</span>
                <div>
                  <Link className="IhoxL6" to={'/'}>
                    Đồ Bộ
                  </Link>
                </div>
                <span>&nbsp;|&nbsp;</span>
                <div>
                  <Link className="IhoxL6" to={'/'}>
                    Vớ/Tất
                  </Link>
                </div>
                <span>&nbsp;|&nbsp;</span>
                <div>
                  <Link className="IhoxL6" to={'/'}>
                    Trang Phục Truyền Thống
                  </Link>
                </div>
                <span>&nbsp;|&nbsp;</span>
                <div>
                  <Link className="IhoxL6" to={'/'}>
                    Đồ Hóa Trang
                  </Link>
                </div>
                <span>&nbsp;|&nbsp;</span>
                <div>
                  <Link className="IhoxL6" to={'/'}>
                    Trang Phục Ngành Nghề
                  </Link>
                </div>
                <span>&nbsp;|&nbsp;</span>
                <div>
                  <Link className="IhoxL6" to={'/'}>
                    Khác
                  </Link>
                </div>
                <span>&nbsp;|&nbsp;</span>
                <div>
                  <Link className="IhoxL6" to={'/'}>
                    Trang Sức Nam
                  </Link>
                </div>
                <span>&nbsp;|&nbsp;</span>
                <div>
                  <Link className="IhoxL6" to={'/'}>
                    Kính Mắt Nam
                  </Link>
                </div>
                <span>&nbsp;|&nbsp;</span>
                <div>
                  <Link className="IhoxL6" to={'/'}>
                    Thắt Lưng Nam
                  </Link>
                </div>
                <span>&nbsp;|&nbsp;</span>
                <div>
                  <Link className="IhoxL6" to={'/'}>
                    Cà vạt &amp; Nơ cổ
                  </Link>
                </div>
                <span>&nbsp;|&nbsp;</span>
                <div>
                  <Link className="IhoxL6" to={'/'}>
                    Phụ Kiện Nam
                  </Link>
                </div>
              </div>
            </div>
            <h3 className={cx('title')}>THỜI TRANG NAM</h3>
            <div className={cx('content')}>
              <div className={cx('product_list')}>
                <div>
                  <Link className="IhoxL6" to={'/'}>
                    Áo Khoác
                  </Link>
                </div>
                <span>&nbsp;|&nbsp;</span>
                <div>
                  <Link className="IhoxL6" to={'/'}>
                    Áo Vest và Blazer
                  </Link>
                </div>
                <span>&nbsp;|&nbsp;</span>
                <div>
                  <Link className="IhoxL6" to={'/'}>
                    Áo Hoodie, Áo Len &amp; Áo Nỉ
                  </Link>
                </div>
                <span>&nbsp;|&nbsp;</span>
                <div>
                  <Link className="IhoxL6" to={'/'}>
                    Quần Jeans
                  </Link>
                </div>
                <span>&nbsp;|&nbsp;</span>
                <div>
                  <Link className="IhoxL6" to={'/'}>
                    Quần Dài/Quần Âu
                  </Link>
                </div>
                <span>&nbsp;|&nbsp;</span>
                <div>
                  <Link className="IhoxL6" to={'/'}>
                    Quần Short
                  </Link>
                </div>
                <span>&nbsp;|&nbsp;</span>
                <div>
                  <Link className="IhoxL6" to={'/'}>
                    Áo
                  </Link>
                </div>
                <span>&nbsp;|&nbsp;</span>
                <div>
                  <Link className="IhoxL6" to={'/'}>
                    Áo Ba Lỗ
                  </Link>
                </div>
                <span>&nbsp;|&nbsp;</span>
                <div>
                  <Link className="IhoxL6" to={'/'}>
                    Đồ Lót
                  </Link>
                </div>
                <span>&nbsp;|&nbsp;</span>
                <div>
                  <Link className="IhoxL6" to={'/'}>
                    Đồ Ngủ
                  </Link>
                </div>
                <span>&nbsp;|&nbsp;</span>
                <div>
                  <Link className="IhoxL6" to={'/'}>
                    Đồ Bộ
                  </Link>
                </div>
                <span>&nbsp;|&nbsp;</span>
                <div>
                  <Link className="IhoxL6" to={'/'}>
                    Vớ/Tất
                  </Link>
                </div>
                <span>&nbsp;|&nbsp;</span>
                <div>
                  <Link className="IhoxL6" to={'/'}>
                    Trang Phục Truyền Thống
                  </Link>
                </div>
                <span>&nbsp;|&nbsp;</span>
                <div>
                  <Link className="IhoxL6" to={'/'}>
                    Đồ Hóa Trang
                  </Link>
                </div>
                <span>&nbsp;|&nbsp;</span>
                <div>
                  <Link className="IhoxL6" to={'/'}>
                    Trang Phục Ngành Nghề
                  </Link>
                </div>
                <span>&nbsp;|&nbsp;</span>
                <div>
                  <Link className="IhoxL6" to={'/'}>
                    Khác
                  </Link>
                </div>
                <span>&nbsp;|&nbsp;</span>
                <div>
                  <Link className="IhoxL6" to={'/'}>
                    Trang Sức Nam
                  </Link>
                </div>
                <span>&nbsp;|&nbsp;</span>
                <div>
                  <Link className="IhoxL6" to={'/'}>
                    Kính Mắt Nam
                  </Link>
                </div>
                <span>&nbsp;|&nbsp;</span>
                <div>
                  <Link className="IhoxL6" to={'/'}>
                    Thắt Lưng Nam
                  </Link>
                </div>
                <span>&nbsp;|&nbsp;</span>
                <div>
                  <Link className="IhoxL6" to={'/'}>
                    Cà vạt &amp; Nơ cổ
                  </Link>
                </div>
                <span>&nbsp;|&nbsp;</span>
                <div>
                  <Link className="IhoxL6" to={'/'}>
                    Phụ Kiện Nam
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Container>
  )
}

export default FooterCategory
