/* eslint-disable react-refresh/only-export-components */
import { forwardRef, useImperativeHandle, useRef } from 'react'
import classNames from 'classnames/bind'
import styles from './LanguageMenu.module.scss'
import Popper from '@/components/Popper'

const cx = classNames.bind(styles)

function LanguageMenu({ props }, ref) {
  const languageRef = useRef()

  useImperativeHandle(ref, () => ({
    addClass() {
      languageRef.current.classList.add(styles.show)
    },
    removeClass() {
      languageRef.current.classList.remove(styles.show)
    }
  }))
  return (
    <div className={cx('wrapper')} ref={languageRef}>
      <div className={cx('language-tippy')}>
        <div className={cx('arrow-tippy')}></div>
        <Popper>
          <div className={cx('language-item')}>
            <span className={cx('active_language')}>Tiếng Việt</span>
          </div>
          <div className={cx('language-item')}>
            <span>English</span>
          </div>
        </Popper>
      </div>
    </div>
  )
}

export default forwardRef(LanguageMenu)
