import { useContext, useEffect, useRef, useState } from 'react'
import { PiShoppingCartSimpleBold } from 'react-icons/pi'
import { Link } from 'react-router-dom'
import styles from './CartMenu.module.scss'
import Popper from '@/components/Popper'
import CartItem from '../CartItem'
import { getCartServices } from '@/apiServices'
import { useDispatch, useSelector } from 'react-redux'
import { cx } from './CartMenu'

export function CartMenu() {
  const menuCartRef = useRef()
  const [carts, setCarts] = useState([])
  const isLogin = useSelector((state) => state.login.login)
  const user = useSelector((state) => state.auth)
  const cart = useSelector((state) => state.cart)
  const dispatch = useDispatch()

  const handleMouseEnter = () => {
    menuCartRef.current.classList.add(styles.show)
  }

  const handleMouseLeave = () => {
    menuCartRef.current.classList.remove(styles.show)
  }

  useEffect(() => {
    const idUser = user.id

    const fetchApi = async () => {
      try {
        const response = await getCartServices(idUser)
        setCarts(response[0].products)
        dispatch(cart(response[0].products))
      } catch (error) {
        // eslint-disable-next-line no-console
        console.log(error)
      }
    }

    if (isLogin) {
      fetchApi()
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const cart = useContext(carts)

  return (
    <>
      <div className={cx('cart')}>
        <Link
          to={isLogin ? '/cart' : '/login'}
          className={cx('cart_link')}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <PiShoppingCartSimpleBold className={cx('cart_icon')} />
          {isLogin &&
            (carts.length === 0 ? (
              true
            ) : (
              <div className={cx('number_badge')}>
                <span>{carts.length}</span>
              </div>
            ))}
        </Link>

        <div className={cx('tippy-box')} ref={menuCartRef}>
          <div className={cx('content')}>
            <div className={cx('arrow-tippy')}></div>
            <Popper>
              {isLogin ? (
                <>
                  <h3 className={cx('title')}>
                    <span className="test">Sản phẩm mới thêm</span>
                  </h3>

                  <div className={cx('cart_list')}>
                    {carts
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
                    {carts.length <= 5 ? (
                      true
                    ) : (
                      <p className={cx('text')}>
                        <span>{carts.length - 5} </span>
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
