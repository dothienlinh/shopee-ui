import { useEffect } from 'react'
import classNames from 'classnames/bind'
import styles from './Home.module.scss'
import Slider from '@/layouts/Slider'
import Category from '@/layouts/Category'
import FlashSale from '@/layouts/FlashSale'
import Mall from '@/layouts/Mall'
import TopSearch from '@/layouts/TopSearch'
import ProductList from '@/layouts/ProductList'
import Footer from '@/layouts/Footer'

const cx = classNames.bind(styles)

function Home() {
  useEffect(() => {
    document.title =
      'Shopee Việt Nam | Mua và Bán Trên Ứng Dụng Di Động Hoặc Website'
  }, [])

  return (
    <div className={cx('wrapper')}>
      <Slider />
      <Category />
      <FlashSale />
      <Mall />
      <TopSearch />
      <ProductList />
      <Footer />
    </div>
  )
}

export default Home
