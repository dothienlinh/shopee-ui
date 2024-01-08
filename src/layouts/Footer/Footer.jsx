import classNames from 'classnames/bind'
import styles from './Footer.module.scss'
import FooterSection from './FooterSection/FooterSection'
import FooterCategory from './FooterCategory/FooterCategory'
import FooterMain from './FooterMain/FooterMain'

const cx = classNames.bind(styles)

function Footer() {
  return (
    <footer className={cx('footer')}>
      <FooterSection />
      <FooterCategory />
      <FooterMain />
    </footer>
  )
}

export default Footer
