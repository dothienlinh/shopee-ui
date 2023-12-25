import classNames from 'classnames/bind'
import styles from './Loading.module.scss'

const cx = classNames.bind(styles)

function Loading() {
  return (
    <div className={cx('loading')}>
      <div className={cx('dot', 'dot1')}></div>
      <div className={cx('dot', 'dot2')}></div>
      <div className={cx('dot', 'dot3')}></div>
    </div>
  )
}

export default Loading
