import classNames from 'classnames/bind'
import styles from './ProductSinglePage.module.scss'
import { useParams } from 'react-router-dom'
import { useEffect, useRef, useState } from 'react'
import { getAProduct } from '@/apiServices/'
import { Container } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { setProduct } from './productSlice'
import { FaMinus, FaPlus, FaCartPlus } from 'react-icons/fa'

const cx = classNames.bind(styles)

function ProductSinglePage() {
  const { id } = useParams()
  const [quantity, setQuantity] = useState(1)
  const listImgRef = useRef()
  const thumbnailImgRef = useRef()

  const dispatch = useDispatch()
  const product = useSelector((state) => state.product)
  const user = useSelector((state) => state.auth)

  useEffect(() => {
    const fetchApi = async () => {
      try {
        const res = await getAProduct(id)

        dispatch(setProduct(res))

        document.title = res.description
      } catch (error) {
        // eslint-disable-next-line no-console
        console.log(error)
      }
    }
    document.body.scrollTop = 0
    document.documentElement.scrollTop = 0

    fetchApi()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const handleAdds = () => {
    setQuantity((prev) => prev + 1)
  }

  const handleMinus = () => {
    if (quantity === 1) {
      setQuantity(quantity)
    } else {
      setQuantity((prev) => prev - 1)
    }
  }

  const handleAddToCart = () => {}

  return (
    <div className={cx('product')}>
      <Container>
        <section className={cx('wrapper')}>
          <div className={cx('image')}>
            <div className={cx('thumbnail')}>
              <img src={product.thumbnail} ref={thumbnailImgRef} />
            </div>
            <div className={cx('img_list')} ref={listImgRef}>
              {product.images.map((image, index) => (
                <div
                  className={cx('img')}
                  key={index}
                  onMouseEnter={(e) => {
                    thumbnailImgRef.current.src = e.target.src
                    e.target.classList.add(styles.activeImg)
                  }}
                  onMouseLeave={(e) => {
                    e.target.classList.remove(styles.activeImg)
                  }}
                >
                  <img src={image} />
                </div>
              ))}
            </div>
          </div>
          <div className={cx('info')}>
            <div className={cx('title')}>
              <span>{product.title}</span>
            </div>
            <div className={cx('description')}>
              <span>{product.description}</span>
            </div>

            <div className={cx('options')}>
              <div className="rating">
                <span className={cx('title')}>Rating:</span>
                <span className={cx('content')}>{product.rating}</span>
              </div>
              <div className={cx('vert-line')} />
              <div className="brand">
                <span className={cx('title')}>Brand:</span>
                <span className={cx('content')}>{product.brand}</span>
              </div>
              <div className={cx('vert-line')} />
              <div className="brand">
                <span className={cx('title')}>Category:</span>
                <span className={cx('content')}>{product.category}</span>
              </div>
            </div>

            <div className={cx('price')}>
              <div className={cx('oll_price')}>
                <span className={cx('number')}>
                  ${product.price.toFixed(2)}
                </span>
                <span className={cx('text')}>Inclusive of all taxes</span>
              </div>
              <div className={cx('new_price')}>
                <span className={cx('number')}>
                  $
                  {(
                    product.price -
                    (product.price * product.discountPercentage) / 100
                  ).toFixed(2)}
                </span>
                <span className={cx('text')}>
                  {product.discountPercentage}% OFF
                </span>
              </div>
            </div>

            <div className={cx('quantity')}>
              <span className={cx('qty-title')}>Quantity:</span>
              <div className={cx('qty-change')}>
                <button
                  className={cx('qty-decrease', 'btn')}
                  onClick={handleMinus}
                >
                  <FaMinus />
                </button>
                <span className={cx('qty-value')}>{quantity}</span>
                <button
                  className={cx('qty-increase', 'btn')}
                  onClick={handleAdds}
                >
                  <FaPlus />
                </button>
              </div>
            </div>

            <div className={cx('btns')}>
              <button className={cx('add_cart')} onClick={handleAddToCart}>
                <FaCartPlus className={cx('icon_cart')} />
                <span>Add To Cart</span>
              </button>
              <button className={cx('buy_now')}>
                <span>Buy Now</span>
              </button>
            </div>
          </div>
        </section>
      </Container>
    </div>
  )
}

export default ProductSinglePage
