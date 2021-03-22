import React from 'react'
import { IoMdAdd } from 'react-icons/io'
import { useHistory } from 'react-router-dom'
import { useQuery } from '../../hooks'
import { Button, Table, TabNav } from '../../UI'
import DashboardHeader from '../../Layout/DashboardHeader'
import ModalSendMoney from './ModalSendMoney'
import Container from './styles'

const SendMoney = () => {
  const showModal = useQuery().get('modal')
  const history = useHistory()
  return (
    <Container>
      <DashboardHeader
        title={'Send Money'}
        sectionAction={
          <Button
            rounded
            iconRight
            onClick={() => history.push('/dashboard/sendMoney/send?modal=true')}
          >
            <IoMdAdd />
            Send
          </Button>
        }
      />
      {showModal && <ModalSendMoney />}
      <div className="transaction--container">
        <header>
          <TabNav tabItems={['Sent', 'Received']} />
        </header>
        <div className="transaction--table__container">
          <Table
            tableHeader={
              <thead>
                <tr>
                  <th>Recipient</th>
                  <th>Description</th>
                  <th>Amount</th>
                </tr>
              </thead>
            }
            tableContent={
              <tbody>
                {[...Array(10).keys()].map((item, index) => (
                  <tr key={`table-${index}`}>
                    <td>Jackson Doe</td>
                    <td>Shopping List for Jason's</td>
                    <td>₦ 4,354,955.23</td>
                  </tr>
                ))}
              </tbody>
            }
          />
        </div>
      </div>
    </Container>
  )
}

export default SendMoney
