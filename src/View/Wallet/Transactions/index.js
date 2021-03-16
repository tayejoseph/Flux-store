import React from 'react'
import DashboardHeader from '../../../Layout/DashboardHeader'
import { TiFilter } from 'react-icons/ti'
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from 'react-icons/md'
import { Button, InputGroup, Table } from '../../../UI'
import Container from './styles'

const Transactions = () => {
  return (
    <Container>
      <header>
        <DashboardHeader navType="small" />
        <div className="transaction--header__row">
          <h1 className="u--typo__headline">Recent Wallet Transactions</h1>
          <div>
            <Button icon iconRight secondary rounded>
              Filter <TiFilter />
            </Button>
            <hr />
            <InputGroup>
              <input placeholder={'Search Recipient/Amount'} />
            </InputGroup>
          </div>
        </div>
      </header>

      <div className="transaction--container">
        <div className="table--container">
          <Table
            tableContent={
              <>
                <thead>
                  <tr>
                    <th>Amount</th>
                    <th>Date</th>
                    <th>Transaction Type</th>
                    <th>Status</th>
                  </tr>
                </thead>
                <tbody>
                  {[...Array(50).keys()].map((item, index) => (
                    <tr key={index}>
                      <td>₦48,995.00</td>
                      <td>Jun 20, 2020</td>
                      <td>Transfer</td>
                      <td>{index % 2 === 0 ? 'Success' : 'Pending'}</td>
                    </tr>
                  ))}
                </tbody>
              </>
            }
            // tableFooter={
            //   <div className="table--nav">
            //     <Button icon>
            //       <MdKeyboardArrowLeft />
            //     </Button>
            //     <div className="nav--text__container">1/3</div>
            //     <Button icon>
            //       <MdKeyboardArrowRight />
            //     </Button>
            //   </div>
            // }
          />
        </div>
      </div>
    </Container>
  )
}

export default Transactions
