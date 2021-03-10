import React from 'react'
import { IoMdAdd, IoIosArrowDown } from 'react-icons/io'
import { Button } from '../../UI'
import StoreItem from './StoreItem'
import DashboardHeader from '../../Layout/DashboardHeader'
import Container from './styles'

const content = {
  productName: 'PS4 Pro 1TB + FIFA 20 and 2 Controllers',
  price: '₦175,499.99',
  publishStatus: 'published',
  imgSrc: '',
  productDetail:
    'The PlayStation 4 (PS4) is an eighth-generation home video game console developed by Sony Computer Entertainment. Announced as the successor to the PlayStation 3 in February 2013.',
  qtyAvailable: '34',
  delivery: 'Nationwide Delivery',
  sales: '345 Sold (₦175,499,234)',
}

const Store = () => {
  return (
    <Container>
      <DashboardHeader
        title={'Flux Store'}
        sectionAction={
          <div className="wallet--actions__container">
            <div className="flux--row">
              <Button rounded iconRight>
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
          {[...Array(10).keys()].map((item, index) => (
            <StoreItem key={index} {...content} />
          ))}
        </div>
        <footer />
      </div>
    </Container>
  )
}

export default Store
