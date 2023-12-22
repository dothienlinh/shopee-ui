/* eslint-disable react-refresh/only-export-components */
import { forwardRef, useRef, useImperativeHandle } from 'react'
import classNames from 'classnames/bind'
import styles from './ArrowNext.module.scss'
import { ArrowRightIcon } from '@/components/Icons'

const cx = classNames.bind(styles)

function ArrowNext({ className, onClick, onMouseEnter, onMouseLeave }, ref) {
  const arrowRef = useRef()

  useImperativeHandle(ref, () => ({
    addClass() {
      arrowRef.current.classList.add(styles.hover)
    },
    removeClass() {
      arrowRef.current.classList.remove(styles.hover)
    },
    show() {
      arrowRef.current.style.display = 'flex'
    },
    hidden() {
      arrowRef.current.style.display = 'none'
    }
  }))

  return (
    <div
      className={cx('arrow_next', className)}
      ref={arrowRef}
      onClick={onClick}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      <ArrowRightIcon className={cx('icon')} />
    </div>
  )
}

export default forwardRef(ArrowNext)
