import classNames from 'classnames/bind'
import styles from './Profile.module.scss'
import { Container } from 'react-bootstrap'
import UserAccountMenu from '@/components/UserAccountMenu/UserAccountMenu'
import { useCookies } from 'react-cookie'
import { useEffect, useRef, useState } from 'react'
import { getASingleUser } from '@/apiServices'
import { FormControlLabel, Radio, RadioGroup } from '@mui/material'
import { ArrowDownIcon, UpdateSuccessfullyIcon } from '@/components/Icons/Icons'

const cx = classNames.bind(styles)

let yearsArray = []
let monthArray = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]
let daysArray = []

for (let year = new Date().getFullYear(); year >= 1910; year--) {
  yearsArray.push(year)
}

for (let day = 1; day <= 31; day++) {
  daysArray.push(day)
}

function Profile() {
  const [cookie] = useCookies('user')
  const [user, setUser] = useState({})
  const [fullName, setFullName] = useState('')
  const [gender, setGender] = useState('')
  const inputFileRef = useRef()
  const [avatar, setAvatar] = useState(cookie.user.image)
  const [birthDate, setBirthDate] = useState('')

  const [openMenuDay, setOpenMenuDay] = useState(false)
  const [openMenuMonth, setOpenMenuMonth] = useState(false)
  const [openMenuYear, setOpenMenuYear] = useState(false)

  const dayRef = useRef()
  const menuDayRef = useRef()
  const monthRef = useRef()
  const menuMonthRef = useRef()
  const yearRef = useRef()
  const menuYearRef = useRef()

  const [openUpdateSuccessfully, setOpenUpdateSuccessfully] = useState(false)
  const updateSuccessfullyRef = useRef()

  useEffect(() => {
    const fetchApi = async () => {
      try {
        const res = await getASingleUser(cookie.user.id)
        setFullName(`${res.firstName} ${res.lastName}`)
        setGender(res.gender)
        setUser(res)
        setBirthDate(new Date(res.birthDate))
      } catch (error) {
        // eslint-disable-next-line no-console
        console.log(error)
      }
    }

    fetchApi()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  useEffect(() => {
    return () => URL.revokeObjectURL(avatar)
  }, [avatar])

  const handleChangeFile = (e) => {
    const file = e.target.files[0]

    if (e.target.files[0]) {
      setAvatar(URL.createObjectURL(file))
    }
  }

  const handleOpenDropDownDay = () => {
    setOpenMenuDay(!openMenuDay)

    if (openMenuMonth) {
      setOpenMenuMonth(false)
    }

    if (openMenuYear) {
      setOpenMenuYear(false)
    }
  }

  const handleOpenDropDownMonth = () => {
    setOpenMenuMonth(!openMenuMonth)

    if (openMenuDay) {
      setOpenMenuDay(false)
    }

    if (openMenuYear) {
      setOpenMenuYear(false)
    }
  }

  const handleOpenDropDownYear = () => {
    setOpenMenuYear(!openMenuYear)

    if (openMenuDay) {
      setOpenMenuDay(false)
    }

    if (openMenuMonth) {
      setOpenMenuMonth(false)
    }
  }

  const handleChangeDay = (e) => {
    setBirthDate(new Date(birthDate.setDate(+e.target.innerText)))
  }

  const handleChangeMonth = (e) => {
    setBirthDate(new Date(birthDate.setMonth(+e.target.innerText - 1)))
  }

  const handleChangeYear = (e) => {
    setBirthDate(new Date(birthDate.setFullYear(+e.target.innerText)))
  }

  window.addEventListener('click', (e) => {
    if (e.target !== menuDayRef.current && e.target !== dayRef.current) {
      setOpenMenuDay(false)
    }

    if (e.target !== menuMonthRef.current && e.target !== monthRef.current) {
      setOpenMenuMonth(false)
    }

    if (e.target !== menuYearRef.current && e.target !== yearRef.current) {
      setOpenMenuYear(false)
    }

    if (e.target !== updateSuccessfullyRef.current) {
      setOpenUpdateSuccessfully(false)
    }
  })

  const handleSubmit = (e) => {
    e.preventDefault()
    setOpenUpdateSuccessfully(true)

    setTimeout(() => {
      setOpenUpdateSuccessfully(false)
    }, 5000)
  }

  return (
    <>
      {openUpdateSuccessfully && (
        <div className={cx('updated_successfully')}>
          <div className={cx('content')} ref={updateSuccessfullyRef}>
            <UpdateSuccessfullyIcon className={cx('icon')} />
            <p className={cx('text')}>Cập nhật hồ sơ</p>
          </div>
        </div>
      )}
      <div className={cx('profile')}>
        <Container className={cx('container')}>
          <UserAccountMenu />
          <div className={cx('content')}>
            <div className={cx('heading')}>
              <h2>Hồ Sơ Của Tôi</h2>
              <p>Quản lý thông tin hồ sơ để bảo mật tài khoản</p>
            </div>

            <div className={cx('main')}>
              <div className={cx('main_left')}>
                <form onSubmit={handleSubmit}>
                  <div className={cx('form_row')}>
                    <div className={cx('form_col-title')}>
                      <span>Tên đăng nhập</span>
                    </div>
                    <div className={cx('form_col-content')}>
                      <span>{user.username}</span>
                    </div>
                  </div>
                  <div className={cx('form_row')}>
                    <div className={cx('form_col-title')}>
                      <span>Tên</span>
                    </div>
                    <div className={cx('form_col-content')}>
                      <div className={cx('form_input_content')}>
                        <input
                          className={cx('input')}
                          value={fullName}
                          onChange={(e) => setFullName(e.target.value)}
                        />
                      </div>
                    </div>
                  </div>
                  <div className={cx('form_row')}>
                    <div className={cx('form_col-title')}>
                      <span>Email</span>
                    </div>
                    <div className={cx('form_col-content')}>
                      <span>
                        {user.email &&
                          user.email.replace(
                            /(\w{2})[\w.-]+@([\w.]+\w)/,
                            '$1***@$2'
                          )}
                      </span>
                      <span className={cx('change')}>Thay đổi</span>
                    </div>
                  </div>
                  <div className={cx('form_row')}>
                    <div className={cx('form_col-title')}>
                      <span>Số điện thoại</span>
                    </div>
                    <div className={cx('form_col-content')}>
                      <span>
                        {user.phone &&
                          user.phone.replace(
                            /[^\d](?=(.*\d){2})|\d(?=(.*\d){2})/g,
                            '*'
                          )}
                      </span>
                      <span className={cx('change')}>Thay đổi</span>
                    </div>
                  </div>
                  <div className={cx('form_row')}>
                    <div className={cx('form_col-title')}>
                      <span>Giới tính</span>
                    </div>
                    <div className={cx('form_col-content')}>
                      <RadioGroup
                        row
                        aria-labelledby="demo-controlled-radio-buttons-group"
                        name="controlled-radio-buttons-group"
                        value={gender}
                        onChange={(e) => setGender(e.target.value)}
                        sx={{
                          '& .MuiFormControlLabel-label': {
                            fontSize: '1.4rem'
                          }
                        }}
                      >
                        <FormControlLabel
                          value="male"
                          control={<Radio />}
                          label="Nam"
                        />
                        <FormControlLabel
                          value="female"
                          control={<Radio />}
                          label="Nữ"
                        />
                        <FormControlLabel
                          value="other"
                          control={<Radio />}
                          label="Khác"
                        />
                      </RadioGroup>
                    </div>
                  </div>
                  <div className={cx('form_row')}>
                    <div className={cx('form_col-title')}>
                      <span>Ngày sinh</span>
                    </div>
                    <div className={cx('form_col-content')}>
                      <div className={cx('birth_date')}>
                        <div
                          ref={dayRef}
                          className={cx('date')}
                          onClick={handleOpenDropDownDay}
                        >
                          {birthDate && birthDate.getDate()}
                          <ArrowDownIcon
                            className={cx(
                              'arrow_down',
                              openMenuDay ? 'arrowDownOpen' : null
                            )}
                          />

                          <div
                            className={cx(
                              'list_date',
                              openMenuDay ? 'listDateOpen' : null
                            )}
                            ref={menuDayRef}
                          >
                            <ul className={cx('menu')}>
                              {daysArray.map((day, index) => (
                                <li className={cx('menu_item')} key={index}>
                                  <span onClick={handleChangeDay}>{day}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>
                        <div
                          className={cx('date')}
                          ref={monthRef}
                          onClick={handleOpenDropDownMonth}
                        >
                          Tháng {birthDate && birthDate.getMonth() + 1}
                          <ArrowDownIcon
                            className={cx(
                              'arrow_down',
                              openMenuMonth ? 'arrowDownOpen' : null
                            )}
                          />
                          <div
                            className={cx(
                              'list_date',
                              openMenuMonth ? 'listDateOpen' : null
                            )}
                            ref={menuMonthRef}
                          >
                            <ul className={cx('menu')}>
                              {monthArray.map((day, index) => (
                                <li className={cx('menu_item')} key={index}>
                                  <span onClick={handleChangeMonth}>
                                    {day + 1}
                                  </span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>
                        <div
                          ref={yearRef}
                          className={cx('date')}
                          onClick={handleOpenDropDownYear}
                        >
                          {birthDate && birthDate.getFullYear()}
                          <ArrowDownIcon
                            className={cx(
                              'arrow_down',
                              openMenuYear ? 'arrowDownOpen' : null
                            )}
                          />

                          <div
                            ref={menuYearRef}
                            className={cx(
                              'list_date',
                              openMenuYear ? 'listDateOpen' : null
                            )}
                          >
                            <ul className={cx('menu')}>
                              {yearsArray.map((day, index) => (
                                <li className={cx('menu_item')} key={index}>
                                  <span onClick={handleChangeYear}>{day}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className={cx('form_row')}>
                    <div className={cx('form_col-title')}></div>
                    <div className={cx('form_col-content')}>
                      <button className={cx('btn_save')}>Lưu</button>
                    </div>
                  </div>
                </form>
              </div>
              <div className={cx('main_right')}>
                <div className={cx('change_avatar')}>
                  <div className={cx('avatar')}>
                    <img src={avatar} alt="Avatar" />
                  </div>
                  <input
                    ref={inputFileRef}
                    type="file"
                    accept=".jpg,.jpeg,.png"
                    className={cx('input_file')}
                    onChange={handleChangeFile}
                  />
                  <button
                    className={cx('btn_select_file')}
                    onClick={() => {
                      inputFileRef.current.click()
                    }}
                  >
                    Chọn Ảnh
                  </button>

                  <div className={cx('text')}>
                    <p>Dụng lượng file tối đa 1 MB</p>
                    <p>Định dạng:.JPEG, .PNG</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </div>
    </>
  )
}

export default Profile
