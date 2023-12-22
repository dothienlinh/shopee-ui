import classNames from 'classnames/bind'
import styles from './CountDown.module.scss'
import { useEffect, useState } from 'react'

const cx = classNames.bind(styles)

function CountDown() {
  const COUNTDOWN_TARGET = new Date('2023-12-20 00:00:00')

  const getTimeLeft = () => {
    const totalTimeLeft = COUNTDOWN_TARGET.getTime() - new Date().getTime()
    const days = Math.floor(totalTimeLeft / 1000 / 60 / 60 / 24)
    const hours = Math.floor((totalTimeLeft / 1000 / 60 / 60) % 24) + days * 24
    const minutes = Math.floor((totalTimeLeft / 1000 / 60) % 60)
    const seconds = Math.floor((totalTimeLeft / 1000) % 60)

    return { totalTimeLeft, hours, minutes, seconds }
  }

  const [timeLeft, setTimeLeft] = useState(getTimeLeft())

  useEffect(() => {
    const idInterval = setInterval(() => {
      if (timeLeft.totalTimeLeft <= 0) {
        clearInterval(idInterval)
      }

      setTimeLeft(getTimeLeft())
    }, 1000)

    return () => clearInterval(idInterval)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <div className={cx('count_down_timer')}>
      <div className={cx('hour', 'count_down_timer_number')}>
        {timeLeft.totalTimeLeft <= 0 ? (
          <span className={cx('number')}>00</span>
        ) : timeLeft.hours > 9 ? (
          <span className={cx('number')}>{timeLeft.hours}</span>
        ) : (
          <span className={cx('number')}>0{timeLeft.hours}</span>
        )}
      </div>
      <div className={cx('minute', 'count_down_timer_number')}>
        {timeLeft.totalTimeLeft <= 0 ? (
          <span className={cx('number')}>00</span>
        ) : timeLeft.minutes > 9 ? (
          <span className={cx('number')}>{timeLeft.minutes}</span>
        ) : (
          <span className={cx('number')}>0{timeLeft.minutes}</span>
        )}
      </div>
      <div className={cx('second', 'count_down_timer_number')}>
        {timeLeft.totalTimeLeft <= 0 ? (
          <span className={cx('number')}>00</span>
        ) : timeLeft.seconds > 9 ? (
          <span className={cx('number')}>{timeLeft.seconds}</span>
        ) : (
          <span className={cx('number')}>0{timeLeft.seconds}</span>
        )}
      </div>
    </div>
  )
}

export default CountDown
