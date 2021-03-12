import React from 'react'
import { useHistory, useRouteMatch } from 'react-router-dom'
import { MdEdit } from 'react-icons/md'
import { HiLink } from 'react-icons/hi'
import { IoMdTrash } from 'react-icons/io'
import { Modal, Button } from '../../../UI'
import Container from './styles'

const ProductDetails = () => {
  const {
    params: { productId },
  } = useRouteMatch()
  const history = useHistory()
  return (
    <Container>
      <Modal
        showModal={true}
        className="modal--size__md modal--close__relative"
      >
        <div className="productDetails--container">
          <main className="flux--row">
            <div className="flux--col">
              <div className="img--container"></div>
            </div>
            <div className="flux--col">
              <h2 className="u--typo__title productDetails--title">
                Product Details
              </h2>

              <h3 className="u--typo__title">
                PS4 Pro 1TB + FIFA 20 and 2 Controllers
              </h3>
              <p>
                The PlayStation 4 (PS4) is an eighth-generation home video game
                console developed by Sony Computer Entertainment. Announced as
                the successor to the PlayStation 3 in February 2013.
              </p>
              <div className="action--row">
                <div className="action--label__row">
                  <h2 className="u--typo__title product--price">₦175,499.99</h2>
                  <span className="dot">&#8226;</span>
                  <p className="product--status">Published</p>
                </div>
                <Button className="btn--delete btn--unpublish">
                  Unpublish
                </Button>
              </div>
              <hr />

              <div className="product--summary">
                <div className="flux--row">
                  <p>Items remaining</p>
                  <p className="u--color__dark">34</p>
                </div>
                <div className="flux--row">
                  <p>Delivery</p>
                  <p>Nationwide Delivery</p>
                </div>
                <div className="flux--row">
                  <p>Sales</p>
                  <p>345 Sold (₦175,499,234)</p>
                </div>
              </div>
            </div>
          </main>

          <footer className="flux--row">
            <div className="img--container__row">
              <div className="sm--img active" />
              <div className="sm--img" />
              <div className="sm--img" />
            </div>
            <div className="action--tray">
              <Button
                icon
                className="btn--edit"
                onClick={() =>
                  history.push(`/dashboard/store/${productId}/edit`, {
                    section: 'infoForm',
                  })
                }
              >
                <MdEdit />
              </Button>
              <Button icon className="btn--copy">
                <HiLink />
              </Button>
              <Button icon className="btn--delete">
                <IoMdTrash />
              </Button>
            </div>
          </footer>
        </div>
      </Modal>
    </Container>
  )
}

export default ProductDetails
