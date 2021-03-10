import React from 'react'
import { useLocation, useHistory } from 'react-router-dom'
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from 'react-icons/md'
import WalletItem from './WalletItem'
import DashboardHeader from '../../Layout/DashboardHeader'
import { Button, Table } from '../../UI'
import Container from './styles'
import wallet1 from '../../assets/wallet1.png'
import wallet2 from '../../assets/wallet2.svg'
import wallet3 from '../../assets/wallet3.svg'

const wallets = [
  {
    balance: '₦48,995.00',
    walletType: 'Flux Wallet',
    title: 'F96B9',
    imgSrc: wallet1,
  },
  {
    balance: '₦48,995.00',
    walletType: 'Crypto Wallet',
    title: 'BTC, ETH',
    imgSrc: wallet2,
  },
  {
    balance: '₦238,395.67',
    walletType: 'Payments Wallet',
    title: 'SALES BALANCE',
    imgSrc: wallet3,
  },
]

const Wallet = () => {
  const location = useLocation()
  const history = useHistory()

  return (
    <Container>
      <DashboardHeader
        title={'Wallet'}
        middleContent={
          <div className="wallet--middle__content">
            {wallets.map((item) => (
              <WalletItem {...item} />
            ))}
          </div>
        }
        sectionAction={
          <div className="wallet--action">
            <Button rounded onClick={() => history.push(`${location.pathname}/addCash`)}>
              Add Cash
            </Button>
            <Button rounded  onClick={() => history.push(`${location.pathname}/withdraw`, {background: location})}>Withdraw</Button>
          </div>
        }
      />

      <div className="transaction--container">
        <div className="table--container">
          <Table
            tableContent={
              <>
                <thead>
                  <tr>
                    <th colSpan="5" className="caption u--typo__title">
                      Recent Transactions
                    </th>
                  </tr>
                  <tr>
                    <th>Recipient</th>
                    <th>Amount</th>
                    <th>Date</th>
                    <th>Transaction Type</th>
                    <th>Status</th>
                  </tr>
                </thead>
                <tbody>
                  {[...Array(10).keys()].map((item, index) => (
                    <tr>
                      <td>FAC16</td>
                      <td>₦48,995.00</td>
                      <td>Jun 20, 2020</td>
                      <td>Transfer</td>
                      <td>{index % 2 === 0 ? 'Success' : 'Pending'}</td>
                    </tr>
                  ))}
                </tbody>
              </>
            }
            tableFooter={
              <div className="table--nav">
                <Button icon>
                  <MdKeyboardArrowLeft />
                </Button>
                <div className="nav--text__container">1/3</div>
                <Button icon>
                  <MdKeyboardArrowRight />
                </Button>
              </div>
            }
          />
        </div>
      </div>
    </Container>
  )
}

export default Wallet
