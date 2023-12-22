/* eslint-disable react-refresh/only-export-components */
import { forwardRef, useImperativeHandle, useRef } from 'react'
import classNames from 'classnames/bind'
import 'tippy.js/dist/tippy.css'
import styles from './NotificationMenu.module.scss'
import Popper from '@/components/Popper'
import { notification as data } from '@/data/notification'
import NotificationItem from '../NotificationItem/NotificationItem'

const cx = classNames.bind(styles)

function NotificationMenu({ onMouseEnter, onMouseLeave }, ref) {
  const popperRef = useRef()
  useImperativeHandle(ref, () => ({
    addClass() {
      popperRef.current.classList.add(styles.show)
    },
    removeClass() {
      popperRef.current.classList.remove(styles.show)
    },
    mouseEvent() {
      popperRef.current.classList.add(styles.mouseEnter)
    },
    mouseLeave() {
      popperRef.current.classList.remove(styles.mouseEnter)
    }
  }))

  return (
    <div
      className={cx('wrapper')}
      ref={popperRef}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      <div className={cx('box')}>
        <div className={cx('arrow')}></div>
        <Popper className={cx('popper')}>
          <div className={cx('title')}>
            <p>Thông báo mới nhận</p>
          </div>
          <div>
            {data.map((item) => (
              <NotificationItem props={item} key={item.id} />
            ))}
          </div>
        </Popper>
      </div>
    </div>
  )
}

export default forwardRef(NotificationMenu)
