import { PiShoppingCartSimpleBold } from 'react-icons/pi'
import { Link } from 'react-router-dom'
import classNames from 'classnames/bind'
import styles from './CartMenu.module.scss'
import Popper from '@/components/Popper'
import { cartList } from '@/data'
import Tippy from '@tippyjs/react/headless'

const cx = classNames.bind(styles)

function CartMenu() {
  return (
    <div>
      <div className={cx('cart')}>
        <Tippy
          interactive
          placement="bottom-end"
          offset={[16, 10]}
          // How to add animation here?
          //...
          render={(attrs) => (
            <div className={cx('tippy-box')} {...attrs}>
              <div className={cx('content')}>
                <div className={cx('arrow-tippy')} data-popper-arrow=""></div>
                <Popper>
                  <h3 className={cx('title')}>
                    <span className="test">Sản phẩm mới thêm</span>
                  </h3>

                  <div className={cx('cart_list')}>
                    {cartList.map((item) => (
                      <div key={item.id} className={cx('cart_item')}>
                        <div className={cx('item_img')}>
                          <img src={item.img} alt={item.title} />
                        </div>

                        <div className={cx('box_content')}>
                          <div className={cx('item_content')}>
                            {item.promotion && (
                              <span className={cx('item_promotion')}>
                                {item.promotion}
                              </span>
                            )}
                            <p className={cx('item_title')}>
                              <span>{item.title}</span>
                            </p>
                            <p className={cx('item_price')}>
                              <span>{item.price}</span>
                            </p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className={cx('footer')}>
                    <p className={cx('text')}>
                      <span>15 </span>
                      <span>Thêm hàng vào giỏ</span>
                    </p>

                    <Link to={'/cart'} className={cx('btn')}>
                      <span>Xem Giỏ hàng</span>
                    </Link>
                  </div>
                </Popper>
              </div>
            </div>
          )}
        >
          <Link to={'/cart'} className={cx('cart_link')}>
            <PiShoppingCartSimpleBold className={cx('cart_icon')} />
            <div className={cx('number_badge')}>
              <span>20</span>
            </div>
          </Link>
        </Tippy>
      </div>
    </div>
  )
}

export default CartMenu
