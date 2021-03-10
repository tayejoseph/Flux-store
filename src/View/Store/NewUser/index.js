import React from 'react'
import { useHistory } from 'react-router-dom'
import { Modal, Button } from '../../../UI'
import Container from './styles'

const NewUser = () => {
  const history = useHistory()
  return (
    <Container>
      <Modal
        showModal={true}
        className="modal--size__md modal--close__relative"
        modalTitle={'Airtime Topup'}
      >
        <div className="carousel">
          <p>
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            nonumy eirmod tempor invidunt ut labore et dolore magna.
          </p>
        </div>
        <footer>
          <Button tertiary onClick={() => history.replace('/dashboard/store')}>
            Skip
          </Button>
        </footer>
      </Modal>
    </Container>
  )
}

export default NewUser
