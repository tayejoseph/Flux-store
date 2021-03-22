import React, { useState } from 'react'
import { Helmet } from 'react-helmet'
import { LazyLoadImage } from 'react-lazy-load-image-component'
import { useHistory, useRouteMatch } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { MdEdit } from 'react-icons/md'
import { HiLink } from 'react-icons/hi'
import { IoMdTrash } from 'react-icons/io'
import { toMoney } from '../../../helpers'
import { Modal, Button } from '../../../UI'
import Container from './styles'

const ProductDetails = () => {
  const { catalogues } = useSelector((s) => s.user)
  const {
    params: { productId },
  } = useRouteMatch()
  const {
    name,
    amount,
    description,
    quantity,
    image_url_1,
    image_url_2,
    image_url_3,
  } = catalogues[productId]
  const images = [image_url_1, image_url_2, image_url_3]
  const [activeIndex, setState] = useState(0)
  const history = useHistory()
  return (
    <Container>
      <Helmet>
        <title>Flux Store | {name}</title>
      </Helmet>
      <Modal
        showModal={true}
        className="modal--size__md modal--close__relative"
      >
        <div className="productDetails--container">
          <main className="flux--row">
            <div className="flux--col">
              <div className="img--container">
                <LazyLoadImage
                  src={images[activeIndex]}
                  alt={name}
                  effect="blur"
                />
              </div>
            </div>
            <div className="flux--col">
              <h2 className="u--typo__title productDetails--title">
                Product Details
              </h2>

              <h3 className="u--typo__title">{name}</h3>
              <p className="product--details">{description}</p>
              <div className="action--row">
                <div className="action--label__row">
                  <h2 className="u--typo__title product--price">
                    ₦{toMoney(amount)}
                  </h2>
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
                  <p className="u--color__dark">{quantity}</p>
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
              {[...Array(3).keys()].map((item, index) => (
                <div
                  className={`sm--img ${index === activeIndex ? 'active' : ''}`}
                  onClick={() => setState(index)}
                >
                  <LazyLoadImage src={images[index]} alt={name} effect="blur" />
                </div>
              ))}
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
