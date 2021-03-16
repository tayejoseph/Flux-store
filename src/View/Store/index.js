import React, { useState, useEffect, useCallback } from 'react'
import { IoMdAdd, IoIosArrowDown } from 'react-icons/io'
import { useHistory } from 'react-router-dom'
import { Button } from '../../UI'
import StoreItem from './StoreItem'
import DashboardHeader from '../../Layout/DashboardHeader'
import Container from './styles'

const content = {
  productName: 'PS4 Pro 1TB + FIFA 20 and 2 Controllers',
  price: '₦175,499.99',
  publishStatus: 'Published',
  imgSrc: '',
  productDetail:
    'The PlayStation 4 (PS4) is an eighth-generation home video game console developed by Sony Computer Entertainment. Announced as the successor to the PlayStation 3 in February 2013.',
  qtyAvailable: '34',
  delivery: 'Nationwide Delivery',
  sales: '345 Sold (₦175,499,234)',
}

const Store = () => {
  const [showActionSheet, setDisplay] = useState(null)
  const history = useHistory()

  const handleBodyClick = useCallback(
    (e) => {
      console.log(showActionSheet)
      if (
        !e.target.classList.contains('shop--item__btn') &&
        typeof showActionSheet === 'number'
      ) {
        setDisplay(null)
      }
    },
    [showActionSheet],
  )

  useEffect(() => {
    const handleKeyPress = (e) => {}
    window.addEventListener('keypress', handleKeyPress)
    return () => {
      window.removeEventListener('keypress', handleKeyPress)
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
          {[...Array(40).keys()].map((item, index) => (
            <StoreItem
              key={index}
              {...{ ...content, showActionSheet, index }}
              onActionClick={(e) => {
                e.stopPropagation()
                setDisplay(index)
              }}
              onClick={() => history.push(`/dashboard/store/${index}/details`)}
            />
          ))}
        </div>
        <footer />
      </div>
    </Container>
  )
}

export default Store
