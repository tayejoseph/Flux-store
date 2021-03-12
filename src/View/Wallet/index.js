import React from 'react'
import { useLocation, useHistory } from 'react-router-dom'
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from 'react-icons/md'
import { IoIosArrowForward } from 'react-icons/io'
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
            <Button
              rounded
              onClick={() => history.push(`${location.pathname}/addCash`)}
            >
              Add Cash
            </Button>
            <Button
              rounded
              onClick={() =>
                history.push(`${location.pathname}/withdraw`, {
                  background: location,
                })
              }
            >
              Withdraw
            </Button>
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
                    <th colSpan="5" className="caption">
                      <header>
                        <h2 className="u--typo__title">Recent Transactions</h2>
                        <Button
                          iconRight
                          rounded
                          onClick={() =>
                            history.push('/dashboard/wallet/transactions')
                          }
                        >
                          View All Transactions
                          <IoIosArrowForward />
                        </Button>
                      </header>
                    </th>
                  </tr>
                  <tr>
                    <th>Amount</th>
                    <th>Recipient</th>
                    <th>Date</th>
                    <th>Transaction Type</th>
                    <th className="u--typo__center">Status</th>
                  </tr>
                </thead>
                <tbody>
                  {[...Array(10).keys()].map((item, index) => (
                    <tr>
                      <td>₦48,995.00</td>
                      <td>Julia Bradley</td>
                      <td>Jun 20, 2020 4:55 AM</td>
                      <td>Transfer</td>
                      <td className="u--typo__center">
                        {index % 2 === 0 ? 'Success' : 'Pending'}
                      </td>
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
