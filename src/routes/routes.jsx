import config from '../config'

import Home from '../pages/Home'
import Notification from '../pages/Notification'
import Product from '../pages/Product'
import Purchase from '../pages/Purchase/'
import Profile from '../pages/Profile'
import Cart from '../pages/Cart'

const publicRoutes = [
  { path: config.routes.home, component: Home },
  { path: config.routes.product, component: Product },
  { path: config.routes.notification, component: Notification },
  { path: config.routes.purchase, component: Purchase },
  { path: config.routes.profile, component: Profile },
  { path: config.routes.cart, component: Cart }
]

export { publicRoutes }
