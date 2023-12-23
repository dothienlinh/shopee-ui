/* eslint-disable react-refresh/only-export-components */
import { forwardRef, useEffect, useImperativeHandle, useRef } from 'react'
import classNames from 'classnames/bind'
import styles from './LanguageMenu.module.scss'
import Popper from '@/components/Popper'
import { useDispatch, useSelector } from 'react-redux'
import { setLanguage } from './languageSlice'

const cx = classNames.bind(styles)

const languages = [
  { id: 'vn', language: 'Tiếng Việt' },
  { id: 'en', language: 'English' }
]

function LanguageMenu(props, ref) {
  const languageRef = useRef()
  const vietnameseRef = useRef()
  const englishRef = useRef()
  const dispatch = useDispatch()

  const language = useSelector((state) => state.language)

  useImperativeHandle(ref, () => ({
    addClass() {
      languageRef.current.classList.add(styles.show)
    },
    removeClass() {
      languageRef.current.classList.remove(styles.show)
    }
  }))

  const languageActive = () => {
    if (language.id === 'vn') {
      vietnameseRef.current.style.color = '#ee4d2d'
      englishRef.current.style.color = '#000000de'
    } else {
      vietnameseRef.current.style.color = '#000000de'
      englishRef.current.style.color = '#ee4d2d'
    }
  }

  useEffect(() => {
    languageActive()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [language])

  const handleSelectLanguage = (language) => {
    dispatch(
      setLanguage({
        id: language.id,
        language: language.language
      })
    )
  }

  const handleMouseEnter = () => {
    vietnameseRef.current.style.color = '#000000de'
    englishRef.current.style.color = '#000000de'
  }

  const handleMouseLeave = () => {
    languageActive()
  }

  return (
    <div className={cx('wrapper')} ref={languageRef}>
      <div
        className={cx('language-tippy')}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <div className={cx('arrow-tippy')}></div>
        <Popper>
          {languages.map((language) => (
            <div className={cx('language-item')} key={language.id}>
              <span
                ref={language.id === 'vn' ? vietnameseRef : englishRef}
                className={cx('')}
                onClick={() => handleSelectLanguage(language)}
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
