import React, { useState, useEffect, useCallback } from 'react'
import { IoMdAdd, IoIosArrowDown } from 'react-icons/io'
import { useHistory } from 'react-router-dom'
import { notify } from 'react-notify-toast'
import { Helmet } from 'react-helmet'
import { Button, Spinner } from '../../UI'
import StoreItem from './StoreItem'
import { useDispatch, useSelector } from 'react-redux'
import { trackWindowScroll } from 'react-lazy-load-image-component'
import { fetchCatalog } from '../../store/actions/user'
import DashboardHeader from '../../Layout/DashboardHeader'
import Container from './styles'

const Store = () => {
  const dispatch = useDispatch()
  const { catalogues, userData } = useSelector((s) => s.user)
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

  const copyTextToClip = () => {
    const link = `https://iflux.store/store/${userData.business.name_slug}/`
    const elem = document.createElement('textarea')
    elem.value = link
    document.body.appendChild(elem)
    elem.select()
    document.execCommand('copy')
    document.body.removeChild(elem)
    notify.show(`Copied Link`, 'success')
  }

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
              <Button rounded secondary onClick={copyTextToClip}>
                Get Store Link
              </Button>
            </div>
            <Button rounded iconLeft secondary className="viewall--btn">
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
            catalogues.map(({ ref, ...item }, index) => (
              <StoreItem
                key={index}
                {...{ ...item, showActionSheet, index, cataloguesRef: ref }}
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
