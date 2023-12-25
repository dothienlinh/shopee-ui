import { useEffect } from 'react'
import NavHeader from '@/layouts/components/NavHeader'
import classNames from 'classnames/bind'
import styles from './Cart.module.scss'
import { Container } from 'react-bootstrap'
import Search from '@/components/Search/Search'
import { ShopeeLogo } from '../../components/Icons'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { FaMinus, FaPlus } from 'react-icons/fa'
import {
  deleteCart,
  addQuantity,
  reduceQuantity
} from '../../components/CartMenu/cartSlice'

const cx = classNames.bind(styles)

function Cart() {
  const dispatch = useDispatch()

  useEffect(() => {
    document.title = 'Giỏ Hàng'
  }, [])

  const carts = useSelector((state) => state.cart)

  const handleAdds = (index, value = 1) => {
    dispatch(addQuantity({ index, value }))
  }

  const handleMinus = (cart, index, value = 1) => {
    if (cart.quantity === 1) {
      dispatch(reduceQuantity({ index, value: 0 }))
    } else {
      dispatch(reduceQuantity({ index, value }))
    }
  }

  const handleDelete = (index) => {
    dispatch(deleteCart(index))
  }

  return (
    <div>
      <div className={cx('header')}>
        <NavHeader />
        <section className={cx('content_header')}>
          <Container>
            <div className={cx('container')}>
              <div className={cx('logo')}>
                <Link to={'/'}>
                  <ShopeeLogo className={cx('shopee_logo')} />
                </Link>

                <div className={cx('cart_pag_name')}>
                  <span>Giỏ Hàng</span>
                </div>
              </div>

              <Search className={cx('search')} />
            </div>
          </Container>
        </section>
      </div>

      <section className={cx('main')}>
        <Container>
          {carts.cartList.length === 0 ? (
            <div className={cx('go_back_home')}>
              <div className={cx('content')}>
                <img src="https://deo.shopeemobile.com/shopee/shopee-pcmall-live-sg/9bdd8040b334d31946f49e36beaf32db.png" />
                <p className={cx('text')}>Your shopping cart is empty.</p>
                <Link to={'/'} className={cx('btn_buy_now')}>
                  Go shopping Now
                </Link>
              </div>
            </div>
          ) : (
            <>
              <div className={cx('guide')}>
                <img src="https://deo.shopeemobile.com/shopee/shopee-pcmall-live-sg/d9e992985b18d96aab90969636ebfd0e.png" />
                <span>
                  Nhấn vào mục Mã giảm giá ở cuối trang để hưởng miễn phí vận
                  chuyển bạn nhé!
                </span>
              </div>

              <div className={cx('heading')}>
                <label className={cx('checkbox')}>
                  <input type="checkbox" /> Sản Phẩm
                </label>
                <div className={cx('price')}>
                  <span>Đơn Giá</span>
                </div>
                <div className={cx('quantity')}>
                  <span>Số Lượng</span>
                </div>
                <div className={cx('total_price')}>
                  <span>Số Tiền</span>
                </div>
                <div className={cx('operation')}>
                  <span>Thao Tác</span>
                </div>
              </div>

              <div className={cx('content')}>
                {carts.cartList.map((cart, index) => (
                  <div key={cart.id} className={cx('box')}>
                    <div className={cx('content_left')}>
                      <div className={cx('check')}>
                        <input type="checkbox" />
                      </div>

                      <div className={cx('info_product')}>
                        <img className={cx('img')} src={cart.thumbnail} />
                        <div className={cx('title')}>{cart.title}</div>
                      </div>
                    </div>

                    <div className={cx('price')}>
                      <span className={cx('oll_price')}>
                        ${cart.price.toFixed(2)}
                      </span>
                      <span className={cx('new_price')}>
                        $
                        {(
                          cart.price -
                          (cart.price * cart.discountPercentage) / 100
                        ).toFixed(2)}
                      </span>
                    </div>

                    <div className={cx('qty-change')}>
                      <button
                        className={cx('qty-decrease', 'btn')}
                        onClick={() => handleMinus(cart, index, 1)}
                      >
                        <FaMinus />
                      </button>
                      <div className={cx('qty-value')}>
                        <span>{cart.quantity}</span>
                      </div>
                      <button
                        className={cx('qty-increase', 'btn')}
                        onClick={() => handleAdds(index, 1)}
                      >
                        <FaPlus />
                      </button>
                    </div>

                    <div className={cx('money')}>
                      $
                      {(
                        (cart.price -
                          (cart.price * cart.discountPercentage) / 100) *
                        cart.quantity
                      ).toFixed(2)}
                    </div>

                    <div className={cx('option')}>
                      <span
                        className={cx('delete')}
                        onClick={() => {
                          handleDelete(index)
                        }}
                      >
                        Delete
                      </span>
                      <span className={cx('but_now')}>Buy Now</span>
                    </div>
                  </div>
                ))}
              </div>
            </>
          )}
        </Container>
      </section>
    </div>
  )
}

export default Cart
