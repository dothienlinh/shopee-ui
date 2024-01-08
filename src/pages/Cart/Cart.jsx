import { useEffect, useState } from 'react'
import classNames from 'classnames/bind'
import styles from './Cart.module.scss'
import { Col, Container, Row } from 'react-bootstrap'
import { Link, useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import {
  addQuantity,
  deleteCart,
  reduceQuantity,
  setCart,
  changeTotal,
  discountedPrice,
  deleteMultipleProducts
} from '../../components/CartMenu/cartSlice'
import CartPageItem from '@/components/CartPageItem/CartPageItem'
import Button from '@/components/Button/Button'
import Checkbox from '@mui/material/Checkbox'
import { FormControlLabel } from '@mui/material'
import ModalCartPage from '@/components/ModalCartPage/ModalCartPage'
import ModalBuyNow from '@/components/ModalBuyNow/ModalBuyNow'
import HeaderCart from '../../layouts/HeaderCart/HeaderCart'

const cx = classNames.bind(styles)

function Cart() {
  const dispatch = useDispatch()
  const cart = useSelector((state) => state.cart.cartList)
  const [checked, setChecked] = useState([])
  const [totalPayment, setTotalPayment] = useState(0)
  const [checkedSelectAll, setCheckedSelectAll] = useState(false)
  const [idProducts, setIdProducts] = useState([])
  const [isToast, setIsToast] = useState(true)
  const [isModalBuyNow, setIsModalBuyNow] = useState(true)

  useEffect(() => {
    dispatch(setCart(JSON.parse(localStorage.getItem('cart'))))

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  useEffect(() => {
    document.title = 'Giỏ Hàng'
  }, [])

  const handleAdds = (index) => {
    dispatch(addQuantity({ index, value: 1 }))
    dispatch(changeTotal({ index }))
    dispatch(discountedPrice({ index }))
  }

  const handleMinus = (currentProduct, index) => {
    if (currentProduct.quantity <= 1) {
      dispatch(reduceQuantity({ index, value: 0 }))
    } else {
      dispatch(reduceQuantity({ index, value: 1 }))
    }

    dispatch(changeTotal({ index }))
    dispatch(discountedPrice({ index }))
  }

  const handleDelete = (index) => {
    dispatch(deleteCart({ index, amount: 1 }))
  }

  const handleCheck = (index) => {
    setChecked((prev) => {
      if (prev.includes(index)) {
        const newPrev = prev.filter((item) => index !== item)
        return newPrev
      } else {
        const newPrev = [...prev, index]
        return newPrev
      }
    })
  }

  const handleTotalPayment = () => {
    setTotalPayment(
      checked.reduce((result, currentValue) => {
        if (!cart[currentValue]) {
          return result + 0
        }

        return result + cart[currentValue].discountedPrice
      }, 0)
    )
  }

  const handleSelectAll = (e) => {
    if (e.target.checked) {
      cart.forEach((element, index) => {
        setChecked((prev) => [...prev, index])
      })
      setCheckedSelectAll(!checkedSelectAll)
    } else {
      setChecked([])
      setCheckedSelectAll(!checkedSelectAll)
    }
  }

  const handleSelectDelete = () => {
    if (!checked.length) {
      setIsToast(false)
      setTimeout(() => {
        setIsToast(true)
      }, 2000)
    } else if (checkedSelectAll) {
      dispatch(deleteCart({ index: 0, amount: checked.length }))
      setChecked([])
    } else {
      dispatch(deleteMultipleProducts(idProducts))
      setChecked([])
    }
  }

  useEffect(() => {
    // eslint-disable-next-line no-console

    checked.forEach((item) => {
      setIdProducts((prev) => {
        const newPrev = new Set([...prev, cart[item].id])

        return Array.from(newPrev)
      })
    })

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [checked])

  useEffect(() => {
    handleTotalPayment()

    checked.length === cart.length
      ? setCheckedSelectAll(true)
      : setCheckedSelectAll(false)

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [checked, cart])

  const checkout = useNavigate()

  const handleModalBuyNow = () => {
    if (!checked.length) {
      setIsModalBuyNow(false)
    } else {
      checkout('/checkout')
    }
  }

  return (
    <div>
      <ModalCartPage hidden={isToast} />
      <ModalBuyNow
        isModalBuyNow={isModalBuyNow}
        setIsModalBuyNow={setIsModalBuyNow}
      />
      <HeaderCart title={'Giỏ Hàng'} search />

      <section className={cx('main')}>
        <Container>
          {cart.length === 0 ? (
            <div className={cx('go_back_home')}>
              <div className={cx('content')}>
                <img src="https://deo.shopeemobile.com/shopee/shopee-pcmall-live-sg/9bdd8040b334d31946f49e36beaf32db.png" />
                <p className={cx('text')}>Your shopping cart is empty.</p>
                <Link to={'/'} className={cx('btn_buy_now')}>
                  Go shopping Now
                </Link>
              </div>
            </div>
          ) : (
            <>
              <div className={cx('guide')}>
                <img src="https://deo.shopeemobile.com/shopee/shopee-pcmall-live-sg/d9e992985b18d96aab90969636ebfd0e.png" />
                <span>
                  Nhấn vào mục Mã giảm giá ở cuối trang để hưởng miễn phí vận
                  chuyển bạn nhé!
                </span>
              </div>

              <div className={cx('heading')}>
                <div className={cx('checkbox')}>
                  <FormControlLabel
                    sx={{
                      '& .MuiFormControlLabel-label': {
                        fontSize: '1.4rem'
                      }
                    }}
                    value="end"
                    control={
                      <Checkbox
                        checked={checkedSelectAll}
                        onChange={handleSelectAll}
                        sx={{
                          margin: '0 1.2rem 0 1.1rem',
                          color: '#00000024',
                          '&.Mui-checked': {
                            color: '#ee4d2d'
                          },
                          '& .MuiSvgIcon-fontSizeMedium': {
                            width: '2.1rem',
                            height: '2.1rem'
                          }
                        }}
                      />
                    }
                    label="Sản Phẩm"
                    labelPlacement="end"
                  />
                </div>
                <div className={cx('price')}>
                  <span>Đơn Giá</span>
                </div>
                <div className={cx('quantity')}>
                  <span>Số Lượng</span>
                </div>
                <div className={cx('total_price')}>
                  <span>Số Tiền</span>
                </div>
                <div className={cx('operation')}>
                  <span>Thao Tác</span>
                </div>
              </div>

              <div className={cx('content')}>
                {cart.map((cart, index) => (
                  <CartPageItem
                    key={cart.id}
                    id={cart.id}
                    thumbnail={cart.thumbnail}
                    title={cart.title}
                    price={cart.price}
                    discountPercentage={cart.discountPercentage}
                    discountedPrice={cart.discountedPrice}
                    quantity={cart.quantity}
                    cart={cart}
                    index={index}
                    checked={checked}
                    handleAdds={handleAdds}
                    handleMinus={handleMinus}
                    handleDelete={handleDelete}
                    handleCheck={handleCheck}
                  />
                ))}

                <Container fluid className={cx('footer')}>
                  <Row className={cx('row')}>
                    <Col className={cx('col')}>
                      <div className={cx('select_all')}>
                        <FormControlLabel
                          className={cx('label')}
                          onChange={handleSelectAll}
                          sx={{
                            '& .MuiFormControlLabel-label': {
                              fontSize: '1.8rem'
                            }
                          }}
                          value="end"
                          control={
                            <Checkbox
                              checked={checkedSelectAll}
                              size="large"
                              sx={{
                                margin: '0 1.2rem 0 2rem',
                                color: '#00000024',
                                '&.Mui-checked': {
                                  color: '#ee4d2d'
                                }
                              }}
                            />
                          }
                          label={`Select All (${cart.length})`}
                          labelPlacement="end"
                        />
                        <div
                          className={cx('delete')}
                          onClick={handleSelectDelete}
                        >
                          Delete
                        </div>
                      </div>
                    </Col>
                    <Col className={cx('col')}>
                      <div className={cx('buy_now')}>
                        <span className={cx('text')}>
                          Total payment ({checked.length} Product):
                        </span>

                        <span className={cx('total')}>
                          ${totalPayment.toFixed(2)}
                        </span>

                        <Button
                          text={'Buy Now'}
                          handleModalBuyNow={handleModalBuyNow}
                        />
                      </div>
                    </Col>
                  </Row>
                </Container>
              </div>
            </>
          )}
        </Container>
      </section>
    </div>
  )
}

export default Cart
