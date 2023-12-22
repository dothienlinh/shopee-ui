/* eslint-disable react-refresh/only-export-components */
import { forwardRef, useImperativeHandle, useRef } from 'react'
import classNames from 'classnames/bind'
import styles from './LanguageMenu.module.scss'
import Popper from '@/components/Popper'
import { useDispatch } from 'react-redux'
import { setLanguage } from './languageSlice'

const cx = classNames.bind(styles)

const languages = [
  { id: 'vn', language: 'Tiếng Việt' },
  { id: 'en', language: 'English' }
]

function LanguageMenu(props, ref) {
  const languageRef = useRef()
  const dispatch = useDispatch()

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
          {languages.map((language) => (
            <div className={cx('language-item')} key={language.id}>
              <span
                onClick={() => {
                  dispatch(
                    setLanguage({
                      id: language.id,
                      language: language.language
                    })
                  )
                }}
              >
                {language.language}
              </span>
            </div>
          ))}
        </Popper>
      </div>
    </div>
  )
}

export default forwardRef(LanguageMenu)
