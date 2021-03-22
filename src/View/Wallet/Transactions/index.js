import React from 'react'
import { useSelector } from 'react-redux'
import DashboardHeader from '../../../Layout/DashboardHeader'
import { TiFilter } from 'react-icons/ti'
import { getCurrency } from '../../../helpers'
// import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from 'react-icons/md'
import { Button, InputGroup, Table } from '../../../UI'
import Container from './styles'

const Transactions = () => {
  const { transactionLists } = useSelector((s) => s.user)

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
            data={transactionLists}
            tableHeader={
              <thead>
                <tr>
                  <th>Amount</th>
                  <th>Recipient</th>
                  <th>Date</th>
                  <th>Transaction Type</th>
                  <th className="u--typo__center">Status</th>
                </tr>
              </thead>
            }
            tableContent={
              <>
                {transactionLists.map((item, index) => (
                  <tr key={`table-${index}`}>
                    <td className={`status--txt__${item.status.toLowerCase()}`}>
                      {getCurrency(item.currency)}
                      {item.amount}
                    </td>
                    <td>{item.receiver_name}</td>
                    <td>
                      {new Date(item.updated_at).toLocaleDateString('en-US', {
                        weekday: 'short',
                        year: 'numeric',
                        month: 'short',
                        day: 'numeric',
                      })}
                    </td>
                    <td className={'transaction--type'}>
                      {item.action.replace('_', ' ')}
                    </td>
                    <td className={'u--typo__center'}>
                      <span
                        className={`status--container status--container__${item.status.toLowerCase()}`}
                      >
                        {item.status}
                      </span>
                    </td>
                  </tr>
                ))}
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
