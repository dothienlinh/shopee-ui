import classNames from 'classnames/bind'
import styles from './AccountPayment.module.scss'
import UserAccountMenu from '@/components/UserAccountMenu/UserAccountMenu'
import { Container } from 'react-bootstrap'
import { PlusIcon, ProtectIcon, HelpCVVIcon } from '@/components/Icons/Icons'
import CustomizationInput from '@/components/CustomizationInput/CustomizationInput'
import { useRef, useState } from 'react'

const cx = classNames.bind(styles)

function AccountPayment() {
  const [openAddCard, setOpenAddCard] = useState(false)
  const overlayRef = useRef()

  const [openUserInfo, setOpenUserInfo] = useState(false)
  const overlayUserInfoRef = useRef()

  window.addEventListener('click', (e) => {
    if (e.target === overlayRef.current) {
      setOpenAddCard(false)
    }

    if (e.target === overlayUserInfoRef.current) {
      setOpenUserInfo(false)
    }
  })
  return (
    <>
      {openUserInfo && (
        <div className={cx('form_user_info')} ref={overlayUserInfoRef}>
          <form className={cx('form')} onSubmit={(e) => e.preventDefault()}>
            <div className={cx('heading')}>
              <h2>Thông Tin Người Dùng</h2>
            </div>

            <div className={cx('main_user_info')}>
              <div className={cx('input')}>
                <CustomizationInput
                  label={'Tên'}
                  fullWidth={true}
                  size={'small'}
                />
              </div>
              <div className={cx('input')}>
                <CustomizationInput
                  label={'Số CMND'}
                  fullWidth={true}
                  size={'small'}
                />
              </div>

              <div className={cx('btn_user_info')}>
                <button
                  className={cx('go_back_user_info')}
                  onClick={() => setOpenUserInfo(false)}
                >
                  Trở Lại
                </button>
                <button className={cx('success_user_info')}>Hoàn thành</button>
              </div>
            </div>
          </form>
        </div>
      )}
      {openAddCard && (
        <div className={cx('form_add_card')} ref={overlayRef}>
          <form className={cx('form')} onSubmit={(e) => e.preventDefault()}>
            <div className={cx('heading')}>
              <h2>Thêm thẻ</h2>
            </div>
            <div className={cx('text')}>
              <div className={cx('content')}>
                <div className={cx('icon')}>
                  <ProtectIcon />
                </div>
                <div className={cx('description')}>
                  <span className={cx('title')}>
                    Thông tin thẻ của bạn được bảo mật.
                  </span>
                  <p>
                    Chúng tôi hợp tác với CyberSource để đảm bảo thông tin thẻ
                    của bạn được an toàn và bảo mật tuyệt đối. Shopee sẽ không
                    được cấp quyền truy cập vào thông tin thẻ của bạn.
                  </p>
                </div>
              </div>
            </div>

            <div className={cx('card_details')}>
              <span className={cx('title')}>Chi tiết thẻ</span>
              <div className={cx('images')}>
                <div className={cx('img1')}></div>
                <div className={cx('img2')}></div>
                <div className={cx('img3')}></div>
                <div className={cx('img4')}></div>
              </div>
            </div>

            <div className={cx('input')}>
              <CustomizationInput
                fullWidth={true}
                label={'Số thẻ'}
                size={'small'}
              />
            </div>
            <div className={cx('input', 'input_row2')}>
              <CustomizationInput
                className={cx('input_date')}
                fullWidth={true}
                label={'Ngày hết hạn MM/YY'}
                size={'small'}
              />
              <div className={cx('cvv')}>
                <CustomizationInput
                  className={cx('input_cvv')}
                  fullWidth={true}
                  label={'Mã CVV'}
                  size={'small'}
                  type={'password'}
                />
                <HelpCVVIcon className={cx('icon_help')} />
              </div>
            </div>
            <div className={cx('input')}>
              <CustomizationInput
                fullWidth={true}
                label={'Họ và tên chủ thẻ'}
                size={'small'}
              />
            </div>

            <div className={cx('address')}>
              <p>Địa chỉ đăng ký thẻ Tín dụng/Ghi nợ</p>
              <div className={cx('input')}>
                <CustomizationInput
                  fullWidth={true}
                  label={'Địa chỉ'}
                  size={'small'}
                  type={'search'}
                />
              </div>
            </div>
            <div className={cx('input')}>
              <CustomizationInput
                fullWidth={true}
                label={'Mã bưu chính'}
                size={'small'}
                type={'search'}
              />
            </div>

            <div className={cx('btn')}>
              <button
                className={cx('go_back')}
                onClick={() => {
                  setOpenAddCard(false)
                }}
              >
                Trở Lại
              </button>
              <button className={cx('submit')}>Submit</button>
            </div>
          </form>
        </div>
      )}
      <div className={cx('payment')}>
        <Container className={cx('container')}>
          <UserAccountMenu />
          <div className={cx('main')}>
            <div className={cx('main_top')}>
              <div className={cx('heading')}>
                <h2 className={cx('title')}>Thẻ Tín Dụng/Ghi Nợ</h2>

                <button
                  className={cx('btn_add_card')}
                  onClick={() => {
                    setOpenAddCard(true)
                  }}
                >
                  <PlusIcon className={cx('plus_icon')} />
                  <span>Thêm thẻ mới</span>
                </button>
              </div>

              <div className={cx('content')}>
                <span>Bạn chưa liên kết thẻ.</span>
              </div>
            </div>

            <div className={cx('main_bottom')}>
              <div className={cx('heading')}>
                <h2 className={cx('title')}>Tài Khoản Ngân Hàng Của Tôi</h2>

                <button
                  className={cx('btn_add_card')}
                  onClick={() => setOpenUserInfo(true)}
                >
                  <PlusIcon className={cx('plus_icon')} />
                  <span>Thêm tài khoản ngân hàng</span>
                </button>
              </div>

              <div className={cx('content')}>
                <span>Bạn chưa có tài khoản ngân hàng.</span>
              </div>
            </div>
          </div>
        </Container>
      </div>
    </>
  )
}

export default AccountPayment
