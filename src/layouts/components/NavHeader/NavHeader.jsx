import { useEffect, useRef } from 'react'
import classNames from 'classnames/bind'
import styles from './NavHeader.module.scss'
import { Container } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import Tippy from '@tippyjs/react/headless'

import {
  NotificationIcon,
  HelpIcon,
  ChevronDownIcon,
  LanguageIcon
} from '@/components/Icons/Icons'
import Popper from '@/components/Popper/Popper'
import NotificationMenu from '@/components/NotificationMenu/NotificationMenu'
import LanguageMenu from '@/components/LanguageMenu/LanguageMenu'
import MenuUser from '@/components/MenuUser/MenuUser'
import { useDispatch, useSelector } from 'react-redux'
import { useCookies } from 'react-cookie'
import { addAuth } from '../../../components/FormLogin/authSlice'

const cx = classNames.bind(styles)

function NavHeader() {
  const notificationMenuRef = useRef()
  const languageMenuRef = useRef()
  const menuUserRef = useRef()

  const dispatch = useDispatch()

  const [cookie] = useCookies(['user'])

  useEffect(() => {
    if (cookie.user) {
      dispatch(addAuth(cookie.user))
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const user = useSelector((state) => state.auth)
  const language = useSelector((state) => state.language)

  const handleNotificationMouseEnter = () => {
    notificationMenuRef.current.addClass()
  }

  const handleNotificationMouseLeave = () => {
    notificationMenuRef.current.removeClass()
  }

  const handleLanguageMouseEnter = () => {
    languageMenuRef.current.addClass()
  }

  const handleLanguageMouseLeave = () => {
    languageMenuRef.current.removeClass()
  }

  const handleMouseLeaveMenuUser = () => {
    menuUserRef.current.removeClass()
  }

  const handleMouseEnterMenuUser = () => {
    menuUserRef.current.addClass()
  }

  return (
    <nav className={cx('nav')}>
      <Container>
        <nav className={cx('navbar')}>
          <ul className={cx('menu')}>
            <li className={cx('menu-item')}>
              <Link to="/" className={cx('menu-link')}>
                Kênh Người Bán
              </Link>
              <span className={cx('separation')}></span>
            </li>
            <li className={cx('menu-item')}>
              <div>
                <Tippy
                  interactive
                  placement="bottom-start"
                  render={(attrs) => {
                    return (
                      <div className="box" tabIndex="-1" {...attrs}>
                        <div className={cx('download')}>
                          <Popper className={cx('download-wrapper')}>
                            <img
                              className={cx('qr-code')}
                              src="https://deo.shopeemobile.com/shopee/shopee-pcmall-live-sg/assets/d91264e165ed6facc6178994d5afae79.png"
                              alt="QR code"
                            />

                            <div className={cx('app-img')}>
                              <img
                                src="https://deo.shopeemobile.com/shopee/shopee-pcmall-live-sg/assets/39f189e19764dab688d3850742f13718.png"
                                alt="App Store"
                              />
                              <img
                                src="https://deo.shopeemobile.com/shopee/shopee-pcmall-live-sg/assets/f4f5426ce757aea491dce94201560583.png"
                                alt="Google Play"
                              />
                              <img
                                src="https://deo.shopeemobile.com/shopee/shopee-pcmall-live-sg/assets/1ae215920a31f2fc75b00d4ee9ae8551.png"
                                alt="App Gallery"
                              />
                            </div>
                          </Popper>
                        </div>
                      </div>
                    )
                  }}
                >
                  <Link to="/" className={cx('menu-link')}>
                    Tải ứng dụng
                  </Link>
                </Tippy>
              </div>
              <span className={cx('separation')}></span>
            </li>
            <li className={cx('menu-item')}>
              <span className={cx('menu-text')}>Kết nối</span>
            </li>
            <li className={cx('menu-item')}>
              <Link
                to="https://www.facebook.com/ShopeeVN"
                rel="noreferrer"
                target="_blank"
                className={cx('menu-link', 'facebook-icon')}
              ></Link>
              <Link
                to="https://www.instagram.com/Shopee_VN/"
                rel="noreferrer"
                target="_blank"
                className={cx('menu-link', 'instagram-icon')}
              ></Link>
            </li>
          </ul>

          <ul className={cx('menu')}>
            <li className={cx('menu-item')}>
              <div className="position-relative">
                <Link
                  to={'/'}
                  className={cx('menu-link', 'notification_link')}
                  onMouseEnter={handleNotificationMouseEnter}
                  onMouseLeave={handleNotificationMouseLeave}
                >
                  <NotificationIcon
                    className={cx('menu-icon', 'notification-icon')}
                  />
                  <span className={cx('menu-right-text')}>Thông báo</span>
                </Link>
                <NotificationMenu
                  ref={notificationMenuRef}
                  onMouseEnter={() => {
                    notificationMenuRef.current.mouseEvent()
                  }}
                  onMouseLeave={() => {
                    notificationMenuRef.current.mouseLeave()
                  }}
                />
              </div>
            </li>
            <li className={cx('menu-item')}>
              <Link to={'/'} className={cx('menu-link', 'menu-help')}>
                <HelpIcon className={cx('menu-icon-help', 'menu-icon')} />
                <span className={cx('menu-right-text')}>Hỗ Trợ</span>
              </Link>
            </li>
            <li className={cx('menu-item')}>
              <div className={cx('menu-language')}>
                <div
                  className={cx('menu-link', 'menu-language-link')}
                  onMouseEnter={handleLanguageMouseEnter}
                  onMouseLeave={handleLanguageMouseLeave}
                >
                  <LanguageIcon className={cx('menu-icon')} />
                  <span className={cx('menu-right-text', 'menu-language-text')}>
                    {language.language}
                  </span>
                  <ChevronDownIcon className={cx('menu-icon')} />

                  <LanguageMenu ref={languageMenuRef} />
                </div>
              </div>
            </li>
            {cookie.user?.id ? (
              <li className={cx('menu-item', 'menu-user')}>
                <div className={cx('user-name')}>
                  <Link
                    to={'/user/account/profile'}
                    className={cx('menu-right-text', 'name', 'account')}
                    onMouseEnter={handleMouseEnterMenuUser}
                    onMouseLeave={handleMouseLeaveMenuUser}
                  >
                    <div className={cx('avatar')}>
                      <img
                        className={cx('avatar-img')}
                        src={user.image}
                        alt="Avatar"
                      />
                    </div>
                    <span>{user.username}</span>
                  </Link>
                  <MenuUser ref={menuUserRef} />
                </div>
              </li>
            ) : (
              <>
                <li className={cx('menu-item')}>
                  <Link to={'/signup'} className={cx('menu-link')}>
                    <span>Đăng ký</span>
                  </Link>
                  <span className={cx('separation')}></span>
                </li>
                <li className={cx('menu-item')}>
                  <Link to={'/login'} className={cx('menu-link')}>
                    <span>Đăng nhập</span>
                  </Link>
                </li>
              </>
            )}
          </ul>
        </nav>

        <div></div>
      </Container>
    </nav>
  )
}

export default NavHeader
