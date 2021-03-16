import React, { useState } from 'react'
import { useRouteMatch, useHistory, useLocation } from 'react-router-dom'
import { Modal, Button } from '../../../UI'
import SideNav from './SideNav'
import InfoForm from './InfoForm'
import UploadForm from './UploadForm'
import Container from './styles'

const ProductForm = () => {
  const [formData, setFormState] = useState({
    title: '',
    description: '',
    amount: '',
    quantity: '',
    delivery: '',
  })
  const {
    params: { productId },
  } = useRouteMatch()
  const { state, pathname } = useLocation()
  const history = useHistory()

  const handleFormInput = ({ target }) => {
    setFormState({
      ...formData,
      [target.name]: target.value,
    })
  }
  return (
    <Container>
      <Modal
        showModal={true}
        onClose={() => history.push('/dashboard/store')}
        className="modal--size__md modal--close__relative"
      >
        <div className="productForm--container">
          <header>
            <h2 className="u--typo__title">
              {productId ? 'Edit' : 'Add'} Product
            </h2>
          </header>
          <main>
            <SideNav />
            <form>
              <div className={state?.section !== 'infoForm' && 'hide--section'}>
                <InfoForm {...{ handleFormInput, formData }} />
              </div>
              <div
                className={state?.section !== 'uploadForm' && 'hide--section'}
              >
                <UploadForm {...{ handleFormInput, formData }} />
              </div>
            </form>
          </main>
          <footer>
            {state?.section === 'uploadForm' ? (
              <>
                <Button tertiary>Save and publish later</Button>{' '}
                <div>
                  <Button
                    secondary
                    rounded
                    onClick={() =>
                      history.push(pathname, { section: 'infoForm' })
                    }
                  >
                    Back
                  </Button>
                  <Button rounded>Publish</Button>
                </div>
              </>
            ) : (
              <div className="next--container">
                <Button
                  rounded
                  onClick={() =>
                    history.push(pathname, { section: 'uploadForm' })
                  }
                >
                  Next
                </Button>
              </div>
            )}
          </footer>
        </div>
      </Modal>
    </Container>
  )
}

export default ProductForm
