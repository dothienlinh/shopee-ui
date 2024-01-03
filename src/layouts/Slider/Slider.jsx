import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Carousel, Col, Container, Row } from 'react-bootstrap'
import classNames from 'classnames/bind'
import styles from './Slider.module.scss'
import { slider, optionList } from '@/data'

const cx = classNames.bind(styles)

function Slider() {
  useEffect(() => {
    const dots = document.querySelector('.carousel-indicators').childNodes

    dots.forEach((dot) => {
      dot.style.width = '1rem'
      dot.style.height = '1rem'
      dot.style.border = '1px solid #89898966'
      dot.style.borderRadius = '50%'
    })
  }, [])

  return (
    <Container>
      <aside className={cx('slider')}>
        <Container className={cx('container')}>
          <Row>
            <Col lg={8} className="px-2">
              <Carousel className={cx('slider_left')}>
                {slider.map((item) => (
                  <Carousel.Item key={item.id}>
                    <Link to={'/'} className={cx('img_link')}>
                      <img src={item.url} alt="Image" />
                    </Link>
                  </Carousel.Item>
                ))}
              </Carousel>
            </Col>
            <Col lg={4} className="px-2">
              <div className={cx('slider_right')}>
                <Link to={'/'} className={cx('img_link')}>
                  <img
                    src="https://cf.shopee.vn/file/vn-50009109-9c6900b5557dd99f2abad2ae354bc9f6_xhdpi"
                    alt="Image Banner"
                    className={cx('img_top')}
                  />
                </Link>
                <Link to={'/'} className={cx('img_link')}>
                  <img
                    src="https://cf.shopee.vn/file/vn-50009109-ed8aeb9d5ab3654ce0bf1aeb857bb5a3_xhdpi"
                    alt="Image Banner"
                  />
                </Link>
              </div>
            </Col>
          </Row>
        </Container>
      </aside>

      <section className={cx('option_list')}>
        <ul className={cx('menu')}>
          {optionList.map((item) => (
            <li key={item.id} className={cx('menu_item')}>
              <Link to={item.url} className={cx('menu_link')}>
                <img src={item.img} alt={item.title} className={cx('img')} />
                <p className={cx('title')}>{item.title}</p>
              </Link>
            </li>
          ))}
        </ul>
      </section>
    </Container>
  )
}

export default Slider
