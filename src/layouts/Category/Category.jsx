import { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import classNames from 'classnames/bind'
import styles from './Category.module.scss'
import { Container } from 'react-bootstrap'
import { category } from '@/data'
import ArrowNext from '@/components/ArrowNext/ArrowNext'
import ArrowPrev from '@/components/ArrowPrev/ArrowPrev'

const cx = classNames.bind(styles)

// Convert to rem by /10 (1rem = 10px)
let widthOfContainer = 0

function Category() {
  const [showArrow, setShowArrow] = useState(false)
  const menuRef = useRef()
  const arrowNext = useRef()
  const arrowPrev = useRef()

  useEffect(() => {
    widthOfContainer = menuRef.current.parentElement.offsetWidth / 10
  }, [])

  const handleMenuEnter = () => {
    arrowNext.current.addClass()
    arrowPrev.current.addClass()
  }

  const handleMenuLeave = () => {
    arrowNext.current.removeClass()
    arrowPrev.current.removeClass()
  }

  useEffect(() => {
    if (!showArrow) {
      arrowPrev.current.hidden()
      arrowNext.current.show()
    } else {
      arrowPrev.current.show()
      arrowNext.current.hidden()
    }
  }, [showArrow])

  const handlePrev = () => {
    menuRef.current.style.transform = `translate(${0}rem, 0px)`

    setTimeout(() => {
      setShowArrow(false)
    }, 500)
  }

  const handleNext = () => {
    menuRef.current.style.transform = `translate(${
      -(widthOfContainer / 10) * 4
    }rem, 0px)`

    setTimeout(() => {
      setShowArrow(true)
    }, 500)
  }

  const handleMouseEnter = () => {
    arrowNext.current.addClass()
    arrowPrev.current.addClass()
  }
  const handleMouseLeave = () => {
    arrowNext.current.removeClass()
    arrowPrev.current.removeClass()
  }

  return (
    <section className={cx('category')}>
      <Container className={cx('container')}>
        <div className={cx('wrapper')}>
          <div className={cx('header')}>
            <span>Danh Mục</span>
          </div>

          <div className={cx('box')}>
            <div className={cx('content')}>
              <ul
                className={cx('menu')}
                ref={menuRef}
                onMouseEnter={handleMenuEnter}
                onMouseLeave={handleMenuLeave}
              >
                {category.map((item) => (
                  <li className={cx('menu_item')} key={item.id}>
                    <Link to={item.url} className={cx('menu_link')}>
                      <img
                        className={cx('img')}
                        src={item.img}
                        alt={item.title}
                      />
                      <span className={cx('title')}>{item.title}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <ArrowPrev
              ref={arrowPrev}
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
              onClick={handlePrev}
            />

            <ArrowNext
              ref={arrowNext}
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
              onClick={handleNext}
            />
          </div>
        </div>
      </Container>
    </section>
  )
}

export default Category
