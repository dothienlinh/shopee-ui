import { useEffect, useRef, useState } from 'react'
import { PiShoppingCartSimpleBold } from 'react-icons/pi'
import { Link } from 'react-router-dom'
import classNames from 'classnames/bind'
import styles from './CartMenu.module.scss'
import Popper from '@/components/Popper'
import CartItem from '../CartItem'
import { getCart } from '@/apiServices'

const cx = classNames.bind(styles)

function CartMenu() {
  const menuCartRef = useRef()
  const [carts, setCarts] = useState([])

  const handleMouseEnter = () => {
    menuCartRef.current.classList.add(styles.show)
  }

  const handleMouseLeave = () => {
    menuCartRef.current.classList.remove(styles.show)
  }

  useEffect(() => {
    const idUser = 15

    const fetchApi = async () => {
      try {
        const response = await getCart(idUser)
        setCarts(response[0].products)
      } catch (error) {
        // eslint-disable-next-line no-console
        console.log(error)
      }
    }

    fetchApi()
  }, [])

  return (
    <>
      <div className={cx('cart')}>
        <Link
          to={'/cart'}
          className={cx('cart_link')}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <PiShoppingCartSimpleBold className={cx('cart_icon')} />
          <div className={cx('number_badge')}>
            <span>{carts.length}</span>
          </div>
        </Link>

        <div className={cx('tippy-box')} ref={menuCartRef}>
          <div className={cx('content')}>
            <div className={cx('arrow-tippy')}></div>
            <Popper>
              <h3 className={cx('title')}>
                <span className="test">Sản phẩm mới thêm</span>
              </h3>

              <div className={cx('cart_list')}>
                {carts.map((cart) => (
                  <CartItem
                    key={cart.id}
                    id={cart.id}
                    img={cart.thumbnail}
                    title={cart.title}
                    price={cart.price}
                  />
                ))}
              </div>

              <div className={cx('footer')}>
                <p className={cx('text')}>
                  <span>{carts.length - 5} </span>
                  <span>Thêm hàng vào giỏ</span>
                </p>

                <Link to={'/cart'} className={cx('btn')}>
                  <span>Xem Giỏ hàng</span>
                </Link>
              </div>
            </Popper>
          </div>
        </div>
      </div>
    </>
  )
}

export default CartMenu
