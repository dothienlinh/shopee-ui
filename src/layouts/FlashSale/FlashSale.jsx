import { Link } from 'react-router-dom'
import classNames from 'classnames/bind'
import styles from './FlashSale.module.scss'
import { Container } from 'react-bootstrap'
import CountDown from '@/components/CountDown'
import { ArrowRightIcon, FlashIcon } from '@/components/Icons'
import { flashSaleList } from '@/data'
import ArrowNext from '@/components/ArrowNext'
import ArrowPrev from '@/components/ArrowPrev'
import { useEffect, useRef, useState } from 'react'

const cx = classNames.bind(styles)

let widthOfContainer = 0
function FlashSale() {
  const menuRef = useRef()
  const arrowNext = useRef()
  const arrowPrev = useRef()
  const [widthOfMenu, setWidthOfMenu] = useState(0)

  useEffect(() => {
    widthOfContainer = menuRef.current.parentElement.offsetWidth
  }, [])

  const handleOnMouseEnterMenu = () => {
    arrowNext.current.addClass()
    arrowPrev.current.addClass()
  }

  const handleOnMouseLeaveMenu = () => {
    arrowNext.current.removeClass()
    arrowPrev.current.removeClass()
  }

  const handleOnMouseEnterArrow = () => {
    arrowNext.current.addClass()
    arrowPrev.current.addClass()
  }

  const handleOnMouseLeaveArrow = () => {
    arrowNext.current.removeClass()
    arrowPrev.current.removeClass()
  }

  useEffect(() => {
    if (widthOfMenu <= 0) {
      setTimeout(() => {
        arrowPrev.current.hidden()
      }, 500)
    } else {
      setTimeout(() => {
        arrowPrev.current.show()
      }, 500)
    }

    if (widthOfMenu >= 217.5) {
      setTimeout(() => {
        arrowNext.current.hidden()
      }, 500)
    } else {
      setTimeout(() => {
        arrowNext.current.show()
      }, 500)
    }
  }, [widthOfMenu])

  const handleNext = () => {
    setWidthOfMenu(widthOfMenu + (widthOfContainer / 10 / 6) * 5)
  }
  const handlePrev = () => {
    setWidthOfMenu(widthOfMenu - (widthOfContainer / 10 / 6) * 5)
  }

  return (
    <section className={cx('flash_sale')}>
      <Container className={cx('container')}>
        <div className={cx('wrapper')}>
          <div className={cx('header')}>
            <div className={cx('header_left')}>
              <img
                src="https://deo.shopeemobile.com/shopee/shopee-pcmall-live-sg/flashsale/fb1088de81e42c4e538967ec12cb5caa.png"
                alt="Flash Sale"
                className={cx('flash_sale_logo')}
              />

              <CountDown />
            </div>

            <div className={cx('header_right')}>
              <Link to={'/flash_sale'} className={cx('see_all')}>
                <span className={cx('text')}>Xem tất cả</span>
                <ArrowRightIcon className={cx('icon')} />
              </Link>
            </div>
          </div>

          <div className={cx('box')}>
            <div className={cx('product_list')}>
              <ul
                className={cx('menu')}
                ref={menuRef}
                onMouseEnter={handleOnMouseEnterMenu}
                onMouseLeave={handleOnMouseLeaveMenu}
                style={{ transform: `translate(${-widthOfMenu}rem, 0px)` }}
              >
                {flashSaleList.map((item) => (
                  <li className={cx('menu_item')} key={item.id}>
                    <Link className={cx('menu_link')}>
                      <div className={cx('box')}>
                        <div className={cx('product_img')}>
                          <img
                            className={cx('img')}
                            src={item.img}
                            alt="Product Image"
                          />

                          <div className={cx('sale')}>
                            <FlashIcon className={cx('icon')} />
                            <span>{item.sale}</span>
                          </div>

                          <div className={cx('product_label')}>
                            {item.productLabel.id === 'none' ? (
                              true
                            ) : item.productLabel.id === 'mall' ? (
                              <div className={cx('mall')}>
                                <img
                                  src={item.productLabel.content}
                                  alt="Label Image"
                                />
                              </div>
                            ) : (
                              <div className={cx('like')}>
                                <span>{item.productLabel.content}</span>
                              </div>
                            )}
                          </div>
                        </div>

                        <div className={cx('content')}>
                          <div className={cx('price')}>
                            <u>đ</u>
                            <span>{item.price}</span>
                          </div>

                          <div className={cx('status')}>
                            <div className={cx('box')}>
                              <span className={cx('text')}>{item.status}</span>
                              <div className={cx('max')}>
                                <div></div>
                              </div>
                              <div
                                className={cx('percent')}
                                style={{
                                  width: `${item.percent}%`
                                }}
                              ></div>

                              {item.fire && (
                                <div className={cx('fire')}>
                                  <img src={item.fire} alt="Image Fire" />
                                </div>
                              )}
                            </div>
                          </div>
                        </div>
                      </div>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <ArrowNext
              ref={arrowNext}
              onClick={handleNext}
              onMouseLeave={handleOnMouseLeaveArrow}
              onMouseEnter={handleOnMouseEnterArrow}
            />
            <ArrowPrev
              ref={arrowPrev}
              onClick={handlePrev}
              onMouseLeave={handleOnMouseLeaveArrow}
              onMouseEnter={handleOnMouseEnterArrow}
            />
          </div>
        </div>
      </Container>

      <Container>
        <div className={cx('stack_banner')}>
          <Link to={'/focallure'} className={cx('banner_link')}>
            <img
              className={cx('banner_img')}
              src="https://cf.shopee.vn/file/sg-50009109-0f3ac949a498b5ec5af60baab5da09bb"
              alt="Image Banner"
            />
          </Link>
        </div>
      </Container>
    </section>
  )
}

export default FlashSale
