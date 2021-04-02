import React from 'react'
import { useSelector } from 'react-redux'
import { useHistory } from 'react-router'
import { Button, Modal, Card } from '../../../UI'
import Container from './styles'

const CardView = ({ handleInput, formData, handleCreateCard }) => {
  const { userData } = useSelector((s) => s.user)
  const history = useHistory()

  return (
    <Container>
      <Modal
        className="modal--size__sm modal--close__relative"
        modalTitle={'Here’s what your card looks like'}
        showModal={true}
        onClose={() => history.push('/dashboard/virtualCard/')}
      >
        <div className="content--container">
          <section>
            <Card
              {...{
                cardNo: '',
                name: '',
                date: '',
                amount: '',
                card_style: formData.card_style,
              }}
            />
          </section>
          <footer>
            <Button rounded loading={true} onClick={handleCreateCard}>
              I Like it, Finish
            </Button>
          </footer>
        </div>
      </Modal>
    </Container>
  )
}

export default CardView
