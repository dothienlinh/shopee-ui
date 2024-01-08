import FooterMain from '../Footer/FooterMain/FooterMain'
import Header from '../components/Header/Header'

function DefaultLayout({ children, defaultHeader, defaultFooter }) {
  return (
    <>
      {defaultHeader && <Header />}
      {children}
      {defaultFooter && <FooterMain />}
    </>
  )
}

export default DefaultLayout
