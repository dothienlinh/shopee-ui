import config from '../config'

import Home from '../pages/Home'
import Profile from '../pages/Profile'
import Cart from '../pages/Cart'
import Login from '../pages/Login'
import Signup from '../pages/Signup'
import ProductSinglePage from '../pages/ProductSinglePage'

const publicRoutes = [
  {
    path: config.routes.home,
    component: Home,
    defaultHeader: true,
    defaultFooter: true
  },
  {
    path: config.routes.profile,
    component: Profile,
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
  }
]

export { publicRoutes }
