import { useEffect, useRef } from 'react'
import { Container } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import classNames from 'classnames/bind'
import styles from './TopSearch.module.scss'
import { ArrowRightIcon } from '@/components/Icons/Icons'
import { topSearch } from '@/data'
import ArrowNext from '@/components/ArrowNext/ArrowNext'
import ArrowPrev from '@/components/ArrowPrev/ArrowPrev'

const cx = classNames.bind(styles)

function TopSearch() {
  const searchListRef = useRef()
  const nextRef = useRef()
  const prevRef = useRef()

  const handleMouseEnter = () => {
    nextRef.current.addClass()
    prevRef.current.addClass()
  }

  const handleMouseLeave = () => {
    nextRef.current.removeClass()
    prevRef.current.removeClass()
  }

  useEffect(() => {
    prevRef.current.hidden()
    nextRef.current.show()
  }, [])

  const handleNext = () => {
    searchListRef.current.scrollBy(1305, 0)
  }

  const handlePrev = () => {
    searchListRef.current.scrollBy(-1000, 0)
  }

  const handleScroll = (e) => {
    if (
      Math.round(e.target.scrollLeft) ===
      e.target.scrollWidth - e.target.offsetWidth
    ) {
      nextRef.current.hidden()
    } else {
      nextRef.current.show()
    }

    if (Math.round(e.target.scrollLeft) === 0) {
      prevRef.current.hidden()
    } else {
      prevRef.current.show()
    }
  }

  return (
    <div className={cx('top_search')}>
      <Container>
        <div className={cx('wrapper')}>
          <div className={cx('header')}>
            <p className={cx('title')}>tìm kiếm hàng đầu</p>
            <Link className={cx('see_all')} to={'/top_products'}>
              <span>xem tất cả</span>
              <ArrowRightIcon className={cx('icon')} />
            </Link>
          </div>

          <div className={cx('content')}>
            <div
              ref={searchListRef}
              className={cx('top_search_list')}
              onScroll={handleScroll}
            >
              <ul
                className={cx('menu')}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
              >
                {topSearch.map((item) => {
                  return (
                    <li key={item.id} className={cx('menu_item')}>
                      <Link className={cx('menu_link')} to={'/top_product'}>
                        <div className={cx('img')}>
                          <img src={item.img} alt={item.name} />

                          <div className={cx('sell')}>
                            <span>Bán {item.sell}k+ / tháng</span>
                          </div>

                          <div className={cx('top')}>
                            <img
                              src="https://deo.shopeemobile.com/shopee/shopee-pcmall-live-sg/rcmd/06720e49514cbd94b7552496b4de454a.png"
                              alt="Image Top"
                            />
                          </div>
                        </div>

                        <div className={cx('name')}>{item.name}</div>
                      </Link>
                    </li>
                  )
                })}
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
      </Container>
    </div>
  )
}

export default TopSearch
