import { useEffect, useRef, useState } from 'react'
import classNames from 'classnames/bind'
import styles from './Mall.module.scss'
import { Container, Carousel } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { ArrowRightIcon } from '@/components/Icons/Icons'
import { carouselMall, trademarkList } from '@/data'
import ArrowNext from '@/components/ArrowNext/ArrowNext'
import ArrowPrev from '@/components/ArrowPrev/ArrowPrev'

const cx = classNames.bind(styles)

function Mall() {
  const menuRef = useRef()
  const nextRef = useRef()
  const prevRef = useRef()
  const [showNext, setShowNext] = useState(true)

  useEffect(() => {
    const dots = document.querySelectorAll('.carousel-indicators')[1].childNodes

    dots.forEach((dot) => {
      dot.style.width = '1rem'
      dot.style.height = '1rem'
      dot.style.border = '1px solid #89898966'
      dot.style.borderRadius = '50%'
    })
  }, [])

  useEffect(() => {
    if (showNext) {
      nextRef.current.show()
      prevRef.current.hidden()
    } else {
      nextRef.current.hidden()
      prevRef.current.show()
    }
  }, [showNext])

  const handleMouseEnter = () => {
    nextRef.current.addClass()
    prevRef.current.addClass()
  }

  const handleMouseLeave = () => {
    nextRef.current.removeClass()
    prevRef.current.removeClass()
  }

  const handleNext = () => {
    menuRef.current.style.transform = 'translateX(-50%)'
    setTimeout(() => {
      setShowNext(false)
    }, 500)
  }

  const handlePrev = () => {
    menuRef.current.style.transform = 'translateX(0)'
    setTimeout(() => {
      setShowNext(true)
    }, 500)
  }

  return (
    <section className={cx('shopee_mall')}>
      <Container className={cx('container')}>
        <div className={cx('wrapper')}>
          <div className={cx('header')}>
            <div className={cx('logo_mall')}>
              <Link to={'/mall'} className={cx('logo_link')}>
                <span className={cx('text')}>Shopee Mall</span>
              </Link>
            </div>

            <div className={cx('seperate')}></div>

            <div className={cx('info_list')}>
              <div className={cx('item')}>
                <img
                  src="https://deo.shopeemobile.com/shopee/shopee-pcmall-live-sg/homepagefe/6c502a2641457578b0d5f5153b53dd5d.png"
                  alt="7 Ngày Miễn Phí Trả Hàng"
                />
                <span>7 Ngày Miễn Phí Trả Hàng</span>
              </div>
              <div className={cx('item')}>
                <img
                  src="https://deo.shopeemobile.com/shopee/shopee-pcmall-live-sg/homepagefe/511aca04cc3ba9234ab0e4fcf20768a2.png"
                  alt="Hàng chính hãng 100%"
                />
                <span>Hàng chính hãng 100%</span>
              </div>
              <div className={cx('item')}>
                <img
                  src="https://deo.shopeemobile.com/shopee/shopee-pcmall-live-sg/homepagefe/16ead7e0a68c3cff9f32910e4be08122.png"
                  alt="7 Ngày Miễn Phí Trả Hàng"
                />
                <span>Miễn phí vận chuyển</span>
              </div>
            </div>

            <Link to={'/mall'} className={cx('see_all')}>
              <span>Xem tất cả </span>
              <div className={cx('arrow_icon')}>
                <ArrowRightIcon className={cx('icon')} />
              </div>
            </Link>
          </div>

          <div className={cx('content')}>
            <div className={cx('carousel')}>
              <Carousel>
                {carouselMall.map((item) => (
                  <Carousel.Item key={item.id}>
                    <Link to={item.url} className={cx('img_link')}>
                      <img src={item.img} className={cx('img')} />
                    </Link>
                  </Carousel.Item>
                ))}
              </Carousel>
            </div>

            <div className={cx('trademark')}>
              <div className={cx('trademark_list')}>
                <ul
                  className={cx('menu')}
                  ref={menuRef}
                  onMouseEnter={handleMouseEnter}
                  onMouseLeave={handleMouseLeave}
                >
                  {trademarkList.map((item) => (
                    <li key={item.id} className={cx('menu_item')}>
                      <div className="w-100">
                        <div className={cx('box')}>
                          <Link to={item.url} className={cx('menu_link')}>
                            <img src={item.img} alt={item.voucher} />
                            <span className={cx('text')}>{item.voucher}</span>
                          </Link>
                        </div>
                      </div>
                    </li>
                  ))}
                  <li className={cx('menu_item')}>
                    <div>
                      <div className={cx('box')}>
                        <Link to={'/mall'} className={cx('see_all')}>
                          <span>Xem tất cả </span>
                          <div className={cx('arrow_icon')}>
                            <ArrowRightIcon className={cx('icon')} />
                          </div>
                        </Link>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>

              <ArrowNext
                ref={nextRef}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
                onClick={handleNext}
              />
              <ArrowPrev
                ref={prevRef}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
                onClick={handlePrev}
              />
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}

export default Mall
