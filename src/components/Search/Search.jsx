import { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import classNames from 'classnames/bind'
import styles from './Search.module.scss'
import { SearchIcon, ShopIcon } from '../Icons'
import Popper from '@/components/Popper'
import * as searchServices from '@/apiServices'
import * as getCategories from '@/apiServices'

const cx = classNames.bind(styles)

function Search({ className }) {
  const outlineRef = useRef()
  const [searchResult, setSearchResult] = useState([])
  const searchResultRef = useRef()
  const [valueInput, setValueInput] = useState('')
  const [categories, setCategories] = useState([])

  const handleFocus = () => {
    outlineRef.current.style.display = 'block'
    searchResultRef.current.style.display = 'block'
  }

  const handleBlur = () => {
    outlineRef.current.style.display = 'none'
    searchResultRef.current.style.display = 'none'
  }

  useEffect(() => {
    const fetchApi = async () => {
      const searchResult = await searchServices.searchServices(valueInput)
      setSearchResult(searchResult)
    }

    fetchApi()
  }, [valueInput])

  useEffect(() => {
    const fetchApi = async () => {
      try {
        const response = await getCategories.getCategoriesServices()

        setCategories(response)
      } catch (error) {
        // eslint-disable-next-line no-console
        console.log(error)
      }
    }

    fetchApi()
  }, [])

  return (
    <div className={cx('wrapper', className)}>
      <form className={cx('searchbar')}>
        <div className={cx('searchbar_input')}>
          <div className={cx('box_input')}>
            <input
              className={cx('search_input')}
              type="text"
              placeholder="VŨ TRỤ MỸ PHẨM"
              value={valueInput}
              onFocus={handleFocus}
              onBlur={handleBlur}
              onChange={(e) => {
                setValueInput(e.target.value)
              }}
            />

            <div
              className={cx('search_result')}
              ref={searchResultRef}
              onMouseDown={(e) => {
                e.preventDefault()
              }}
            >
              <Popper>
                {valueInput ? (
                  <>
                    <Link to={'/'} className={cx('find_shop')}>
                      <ShopIcon className={cx('shop_icon')} />{' '}
                      <span>Tìm Shop {`"${valueInput}"`}</span>
                    </Link>
                    <div className={cx('search_result_list')}>
                      {searchResult.map((item) => (
                        <Link
                          to={'/' + item.id}
                          key={item.id}
                          className={cx('result')}
                        >
                          {item.title}
                        </Link>
                      ))}
                    </div>
                  </>
                ) : (
                  <Link
                    to={'/chotdealcungcrisphan'}
                    className={cx('list_result')}
                  >
                    <span>VŨ TRỤ MỸ PHẨM</span>
                    <img
                      className={cx('img')}
                      src="https://down-vn.img.susercontent.com/file/c971dba3feb0386ae5f4e41539c92306"
                      alt="VŨ TRỤ MỸ PHẨM"
                    />
                  </Link>
                )}
              </Popper>
            </div>
          </div>
          <div className={cx('outline')} ref={outlineRef}></div>
        </div>

        <button className={cx('btn_search')} type="submit">
          <SearchIcon className={cx('btn_icon')} />
        </button>
      </form>

      <div className={cx('search_list')}>
        {categories.map((item, index) => (
          <Link
            to={`/products/category/${item}`}
            key={index}
            className={cx('featured_search')}
          >
            {item}
          </Link>
        ))}
      </div>
    </div>
  )
}

export default Search
