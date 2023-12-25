import FooterMain from '../Footer/FooterMain'
import Header from '../components/Header'

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
