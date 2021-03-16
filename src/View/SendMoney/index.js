import React from 'react'
import { IoMdAdd } from 'react-icons/io'
import { Button, Table, TabNav } from '../../UI'
import DashboardHeader from '../../Layout/DashboardHeader'
import Container from './styles'

const SendMoney = () => {
  return (
    <Container>
      <DashboardHeader
        title={'Money Request'}
        sectionAction={
          <Button rounded iconRight>
            <IoMdAdd />
            Send
          </Button>
        }
      />
      <div className="transaction--container">
        <header>
          <TabNav tabItems={['Sent', 'Received']} />
        </header>
        <div className="transaction--table__container">
          <Table
            tableContent={
              <>
                <thead>
                  <tr>
                    <th>Recipient</th>
                    <th>Description</th>
                    <th>Amount</th>
                  </tr>
                </thead>
                <tbody>
                  {[...Array(10).keys()].map((item, index) => (
                    <tr key={`table-${index}`}>
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
      </div>
    </Container>
  )
}

export default SendMoney
