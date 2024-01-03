import { useEffect, useRef } from 'react'
import { PiShoppingCartSimpleBold } from 'react-icons/pi'
import { Link } from 'react-router-dom'
import classNames from 'classnames/bind'
import styles from './CartMenu.module.scss'
import Popper from '@/components/Popper'
import CartItem from '../CartItem'
import { getCartServices } from '@/apiServices'
import { useDispatch, useSelector } from 'react-redux'
import { setCart } from '../../components/CartMenu/cartSlice'
import { useCookies } from 'react-cookie'
import { addAuth } from '../FormLogin/authSlice'

const cx = classNames.bind(styles)

function CartMenu() {
  const dispatch = useDispatch()

  const menuCartRef = useRef()
  const cart = useSelector((state) => state.cart.cartList)

  const [cookie] = useCookies(['user'])

  const handleMouseEnter = () => {
    menuCartRef.current.classList.add(styles.show)
  }

  const handleMouseLeave = () => {
    menuCartRef.current.classList.remove(styles.show)
  }

  useEffect(() => {
    const fetchApi = async () => {
      try {
        const response = await getCartServices(cookie.user.id)

        const res = () => {
          return response[0].products.map((item) => {
            return {
              ...item,
              discountedPrice:
                item.total - (item.total * item.discountPercentage) / 100
            }
          })
        }

        if (!response.length) {
          if (!localStorage.getItem('cart')) {
            localStorage.setItem('cart', JSON.stringify(response))
            dispatch(setCart(response))
          }
        } else if (!localStorage.getItem('cart')) {
          localStorage.setItem('cart', JSON.stringify(res()))
          dispatch(setCart(res()))
        }
      } catch (error) {
        // eslint-disable-next-line no-console
        console.log(error)
      }
    }

    if (cookie.user) {
      fetchApi()
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  useEffect(() => {
    if (cookie.user) {
      dispatch(addAuth(cookie.user))
    }

    if (localStorage.getItem('cart')) {
      dispatch(setCart(JSON.parse(localStorage.getItem('cart'))))
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <>
      <div className={cx('cart')}>
        <Link
          to={cookie.user ? '/cart' : '/login'}
          className={cx('cart_link')}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <PiShoppingCartSimpleBold className={cx('cart_icon')} />
          {cookie.user &&
            (cart.length === 0 ? (
              true
            ) : (
              <div className={cx('number_badge')}>
                <span>{cart.length}</span>
              </div>
            ))}
        </Link>

        <div className={cx('tippy-box')} ref={menuCartRef}>
          <div className={cx('content')}>
            <div className={cx('arrow-tippy')}></div>
            <Popper>
              {cookie.user ? (
                <>
                  <h3 className={cx('title')}>
                    <span className="test">Sản phẩm mới thêm</span>
                  </h3>

                  <div className={cx('cart_list')}>
                    {cart
                      .filter((cart, index) => index < 5)
                      .map((cart) => (
                        <CartItem
                          key={cart.id}
                          img={cart.thumbnail}
                          title={cart.title}
                          price={
                            cart.price -
                            (cart.price * cart.discountPercentage) / 100
                          }
                        />
                      ))}
                  </div>

                  <div className={cx('footer')}>
                    {cart.length <= 5 ? (
                      true
                    ) : (
                      <p className={cx('text')}>
                        <span>{cart.length - 5} </span>
                        <span>Thêm hàng vào giỏ</span>
                      </p>
                    )}

                    <Link to={'/cart'} className={cx('btn')}>
                      <span>Xem Giỏ hàng</span>
                    </Link>
                  </div>
                </>
              ) : (
                <>
                  <div className={cx('box')}>
                    <div className={cx('img')}>
                      <img
                        src="https://deo.shopeemobile.com/shopee/shopee-pcmall-live-sg/9bdd8040b334d31946f49e36beaf32db.png"
                        alt="Image"
                      />
                      <p className={cx('text')}>Chưa có sản phẩm</p>
                    </div>
                  </div>
                </>
              )}
            </Popper>
          </div>
        </div>
      </div>
    </>
  )
}

export default CartMenu
