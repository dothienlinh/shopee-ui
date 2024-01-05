import config from '../config'

import Home from '../pages/Home'
import Cart from '../pages/Cart'
import Login from '../pages/Login'
import Signup from '../pages/Signup'
import ProductSinglePage from '../pages/ProductSinglePage'
import Checkout from '../pages/Checkout'
import AccountPayment from '../pages/AccountPayment'
import Profile from '../pages/Profile'
import AccountNotification from '../pages/AccountNotification'
import Paginate from '../pages/Paginate'

const publicRoutes = [
  {
    path: config.routes.home,
    component: Home,
    defaultHeader: true,
    defaultFooter: true
  },
  {
    path: config.routes.cart,
    component: Cart,
    defaultHeader: false,
    defaultFooter: true
  },
  {
    path: config.routes.login,
    component: Login,
    defaultHeader: false,
    defaultFooter: true
  },
  {
    path: config.routes.signup,
    component: Signup,
    defaultHeader: false,
    defaultFooter: true
  },
  {
    path: config.routes.productSinglePage,
    component: ProductSinglePage,
    defaultHeader: true,
    defaultFooter: true
  },
  {
    path: config.routes.checkout,
    component: Checkout,
    defaultHeader: false,
    defaultFooter: true
  },
  {
    path: config.routes.profile,
    component: Profile,
    defaultHeader: true,
    defaultFooter: true
  },
  {
    path: config.routes.payment,
    component: AccountPayment,
    defaultHeader: true,
    defaultFooter: true
  },
  {
    path: config.routes.notification,
    component: AccountNotification,
    defaultHeader: true,
    defaultFooter: true
  },
  {
    path: config.routes.pagination,
    component: Paginate,
    defaultHeader: true,
    defaultFooter: true
  }
]

export { publicRoutes }
