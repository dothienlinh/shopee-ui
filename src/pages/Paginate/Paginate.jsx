import { useEffect, useState } from 'react'
import classNames from 'classnames/bind'
import styles from './Paginate.module.scss'
import { Container } from 'react-bootstrap'
import * as getProductsServices from '@/apiServices'
import Product from '../../components/Product/Product'
import Pagination from '@mui/material/Pagination'
import Loading from '@/components/Loading/Loading'

const cx = classNames.bind(styles)
const limit = 48

function Paginate() {
  const [products, setProducts] = useState([])
  const totalPages = Math.ceil(100 / 48)
  const [skip, setSkip] = useState(0)
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    document.body.scrollTop = 0
    document.documentElement.scrollTop = 0
    setIsLoading(true)
    const fetchApi = async () => {
      const products = await getProductsServices.getProductsServices(
        limit,
        skip
      )

      setProducts(products)
      setIsLoading(false)
    }

    fetchApi()
  }, [skip])

  const handleChange = (event, value) => {
    setSkip(48 * (value - 1))
    document.body.scrollTop = 0
    document.documentElement.scrollTop = 0
  }

  return (
    <>
      {isLoading && <Loading />}
      <div className={cx('pagination')}>
        <Container>
          <div className={cx('wrapper')}>
            <div className={cx('heading')}>
              <h1>GỢI Ý HÔM NAY</h1>
              <hr />
            </div>

            <div className={cx('main')}>
              <div className={cx('product_list')}>
                {products.map((item) => (
                  <Product
                    id={item.id}
                    thumbnail={item.thumbnail}
                    title={item.title}
                    discountPercentage={item.discountPercentage}
                    category={item.category}
                    brand={item.brand}
                    price={item.price}
                    key={item.id}
                  />
                ))}
              </div>

              <Pagination
                sx={{
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',

                  '& .MuiPaginationItem-root': {
                    minWidth: '4.6rem'
                  },
                  '& .MuiPaginationItem-text': {
                    fontSize: '2rem'
                  },
                  '& .MuiButtonBase-root.Mui-selected': {
                    backgroundColor: 'primary.main',
                    color: 'white',
                    '&:hover': {
                      backgroundColor: '#f05d40'
                    }
                  }
                }}
                count={totalPages}
                shape="rounded"
                onChange={handleChange}
              />
            </div>
          </div>
        </Container>
      </div>
    </>
  )
}

export default Paginate
