import React from 'react'
import { IoMdAdd } from 'react-icons/io'
import { useHistory } from 'react-router-dom'
import { Button, TabNav, Table } from '../../UI'
import { useQuery } from '../../hooks'
import DashboardHeader from '../../Layout/DashboardHeader'
import ModalSendMoney from './ModalSendMoney'
import Container from './styles'

const RequestMoney = () => {
  const showModal = useQuery().get('modal')
  const history = useHistory()
  return (
    <Container>
      <DashboardHeader
        title={'Money Request'}
        sectionAction={
          <Button
            rounded
            iconRight
            onClick={() =>
              history.push('/dashboard/requestMoney/send?modal=true')
            }
          >
            <IoMdAdd />
            Send
          </Button>
        }
      />
      {showModal && <ModalSendMoney />}
      <div className="transaction--container">
        <Table
          tableContent={
            <>
              <thead>
                <tr>
                  <th colSpan="5" className="caption table--tab__container">
                    <TabNav tabItems={['Sent', 'Received']} />
                  </th>
                </tr>
                <tr>
                  <th>Recipient</th>
                  <th>Description</th>
                  <th>Amount</th>
                </tr>
              </thead>
              <tbody>
                {[...Array(10).keys()].map((item, index) => (
                  <tr key={index}>
                    <td>Jackson Doe</td>
                    <td>Shopping List for Jason's</td>
                    <td>₦ 4,354,955.23</td>
                  </tr>
                ))}
              </tbody>
            </>
          }
        />
      </div>
    </Container>
  )
}

export default RequestMoney
