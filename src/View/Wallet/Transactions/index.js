import React from 'react'
import DashboardHeader from '../../../Layout/DashboardHeader'
import { TiFilter } from 'react-icons/ti'
// import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from 'react-icons/md'
import { Button, InputGroup, Table } from '../../../UI'
import Container from './styles'

const getStatus = (index, result, section) => {
  switch (result) {
    case 'className':
      return index % 2 === 0
        ? `status--${section}__success`
        : index % 3 === 0
        ? `status--${section}__pending`
        : `status--${section}__failed`
    case 'status':
      return index % 2 === 0
        ? 'Success'
        : index % 3 === 0
        ? 'Pending'
        : 'Failed'
  }
}

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
                    <th>Recipient</th>
                    <th>Date</th>
                    <th>Transaction type</th>
                    <th className={'u--typo__center'}>Status</th>
                  </tr>
                </thead>
                <tbody>
                  {[...Array(50).keys()].map((item, index) => (
                    <tr key={index}>
                      <td className={getStatus(index, 'className', 'txt')}>
                        ₦48,995.00
                      </td>
                      <td>Julia Bradley</td>
                      <td>Jun 20, 2020 4:55 AM</td>
                      <td>Transfer</td>
                      <td className={'u--typo__center'}>
                        <span
                          className={`status--container ${getStatus(
                            index,
                            'className',
                            'container',
                          )}`}
                        >
                          {getStatus(index, 'status')}
                        </span>
                      </td>
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
