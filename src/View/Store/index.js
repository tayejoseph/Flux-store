import React, { useState, useEffect, useCallback } from 'react'
import { IoMdAdd, IoIosArrowDown } from 'react-icons/io'
import { useHistory } from 'react-router-dom'
import { Helmet } from 'react-helmet'
import { Button, Spinner } from '../../UI'
import StoreItem from './StoreItem'
import { useDispatch, useSelector } from 'react-redux'
import { trackWindowScroll } from 'react-lazy-load-image-component'
import { fetchCatalog } from '../../store/actions/User'
import DashboardHeader from '../../Layout/DashboardHeader'
import Container from './styles'

const Store = () => {
  const dispatch = useDispatch()
  const { catalogues } = useSelector((s) => s.user)
  const [showActionSheet, setDisplay] = useState(null)
  const history = useHistory()

  useEffect(() => {
    dispatch(fetchCatalog())
  }, [dispatch])

  const handleBodyClick = useCallback(
    (e) => {
      if (
        !e.target.classList.contains('shop--item__btn') &&
        typeof showActionSheet === 'number'
      ) {
        e.preventDefault()
        setDisplay(null)
      }
    },
    [showActionSheet],
  )

  useEffect(() => {
    const handleKeyPress = (e) => {}
    window.addEventListener('keypress', handleKeyPress, true)
    return () => {
      window.removeEventListener('keypress', handleKeyPress, true)
    }
  })
  useEffect(() => {
    document.addEventListener('click', handleBodyClick)
    return () => {
      document.removeEventListener('click', handleBodyClick)
    }
  }, [handleBodyClick])
  return (
    <Container>
      <Helmet>
        <title>Flux Store</title>
      </Helmet>
      <DashboardHeader
        title={'Flux Store'}
        sectionAction={
          <div className="wallet--actions__container">
            <div className="flux--row">
              <Button
                rounded
                iconRight
                onClick={() =>
                  history.push('/dashboard/store/add', { section: 'infoForm' })
                }
              >
                <IoMdAdd />
                Add Product
              </Button>
              <Button rounded secondary>
                Get Store Link
              </Button>
            </div>
            <Button rounded iconLeft secondary>
              All
              <IoIosArrowDown />
            </Button>
          </div>
        }
      />
      <div className="store--container">
        <div className="store--content">
          {catalogues === '' ? (
            <Spinner />
          ) : (
            catalogues.map((item, index) => (
              <StoreItem
                key={index}
                {...{ ...item, showActionSheet, index }}
                onActionClick={(e) => {
                  e.stopPropagation()
                  setDisplay(index)
                }}
                onClick={() =>
                  history.push(`/dashboard/store/${index}/details`)
                }
              />
            ))
          )}
        </div>
        <footer />
      </div>
    </Container>
  )
}

export default trackWindowScroll(Store)
