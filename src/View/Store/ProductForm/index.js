import React, { useState, useMemo } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useRouteMatch, useHistory, useLocation } from 'react-router-dom'
import { addCatalog, updateCatalog } from '../../../store/actions/user'
import { formValidator } from '../../../helpers'
import { Modal, Button } from '../../../UI'
import SideNav from './SideNav'
import InfoForm from './InfoForm'
import UploadForm from './UploadForm'
import Container from './styles'

const ProductForm = () => {
  const dispatch = useDispatch()
  const { catalogues } = useSelector((s) => s.user)
  const {
    params: { productId },
  } = useRouteMatch()
  const [loading, setLoading] = useState(false)
  const activeProduct = catalogues[productId] ? catalogues[productId] : {}
  const [formData, setFormState] = useState({
    name: '',
    description: '',
    amount: '',
    quantity: 0,
    delivery: '',
    ...activeProduct,
  })
  const { state, pathname } = useLocation()

  const disabled = useMemo(() => {
    const { name, description, amount, quantity } = formData
    return !name || !description || !amount || quantity === ''
  }, [formData])
  const history = useHistory()

  const handleFormInput = ({ target }) => {
    setFormState({
      ...formData,
      [target.name]: target.value,
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (
      formValidator(
        document.forms['catalog--form'].getElementsByTagName('input'),
      )
    ) {
      try {
        setLoading(true)
        const { status, data: response } = productId
          ? dispatch(updateCatalog(formData))
          : dispatch(addCatalog(formData))
      } finally {
        setLoading(false)
      }
    }
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
            <SideNav disabled={disabled} />
            <form
              id={'productForm'}
              name={'catalog--form'}
              onSubmit={handleSubmit}
              noValidate
            >
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
                  <Button
                    rounded
                    type="submit"
                    form={'productForm'}
                    loading={loading}
                  >
                    Publish
                  </Button>
                </div>
              </>
            ) : (
              <div className="next--container">
                <Button
                  rounded
                  disabled={disabled}
                  onClick={() => {
                    if (
                      formValidator(
                        document.forms['catalog--form'].getElementsByTagName(
                          'input',
                        ),
                      )
                    ) {
                      history.push(pathname, { section: 'uploadForm' })
                    }
                  }}
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
