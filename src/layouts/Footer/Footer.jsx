import classNames from 'classnames/bind'
import styles from './Footer.module.scss'
import FooterSection from './FooterSection'
import FooterCategory from './FooterCategory'
import FooterMain from './FooterMain'

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
