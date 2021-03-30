import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { useLocation, useHistory } from 'react-router-dom'
import { Helmet } from 'react-helmet'
// import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from 'react-icons/md'
import { IoIosArrowForward } from 'react-icons/io'
import { useDispatch } from 'react-redux'
import { getCurrency, toMoney } from '../../helpers'
import {
  fetchAllTransactions,
  getPersonalBankInfo,
} from '../../store/actions/User'
import WalletItem from './WalletItem'
import DashboardHeader from '../../Layout/DashboardHeader'
import { Button, Table } from '../../UI'
import Container from './styles'

const wallets = (userData) => [
  {
    balance: `₦4${toMoney(userData.balance)}`,
    walletType: 'Flux Wallet',
    title: userData.flux_id,
    background: 'rgb(135,168,192)',
    gradient:
      'linear-gradient(211deg, rgba(135,168,192,1) 20%, rgba(123,34,159,1) 70%)',
  },
  {
    balance: '₦48,995.00',
    walletType: 'Crypto Wallet',
    title: 'BTC, ETH',
    background: 'rgb(135,168,192)',
    gradient:
      'linear-gradient(17deg, rgba(135,168,192,1) 20%, rgba(122,55,164,1) 70%)',
  },
  {
    balance: '₦238,395.67',
    walletType: 'Payments Wallet',
    background: 'rgb(142,16,149)',
    gradient:
      'linear-gradient(342deg, rgba(142,16,149,1) 20%, rgba(222,97,142,1) 70%)',
    title: 'SALES BALANCE',
  },
]

const Wallet = () => {
  const { transactionLists, userData } = useSelector((s) => s.user)
  const dispatch = useDispatch()
  const location = useLocation()
  const history = useHistory()
  console.log(transactionLists.length)

  useEffect(() => {
    dispatch(fetchAllTransactions())
    dispatch(getPersonalBankInfo())
  }, [dispatch])

  return (
    <Container>
      <Helmet>
        <title>Flux Wallet</title>
      </Helmet>
      <DashboardHeader
        title={'Wallet'}
        middleContent={
          <div className="wallet--middle__content">
            {wallets(userData).map((item) => (
              <WalletItem key={item.walletType} {...item} />
            ))}
          </div>
        }
        sectionAction={
          <div className="wallet--action">
            <Button
              rounded
              onClick={() => history.push(`/dashboard/wallet/addCash`)}
            >
              Add Cash
            </Button>
            <Button
              rounded
              onClick={() =>
                history.push(`/dashboard/wallet/withdraw`, {
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
        <header className="transaction--header">
          <h2 className="u--typo__title">Recent Transactions</h2>
          <Button
            iconRight
            rounded
            className="all--transactions"
            onClick={() => history.push('/dashboard/wallet/transactions')}
          >
            View All Transactions
            <IoIosArrowForward />
          </Button>
        </header>
        <div className="table--container">
          <Table
            data={transactionLists}
            emptyMessage="Oop, no transaction lists at this time"
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
                {transactionLists &&
                  transactionLists.length > 0 &&
                  transactionLists.map((item, index) => (
                    <tr key={`table-${index}`}>
                      <td
                        className={`status--txt__${item.status.toLowerCase()}`}
                      >
                        {getCurrency(item.currency)}
                        {toMoney(item.amount)}
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
          />
        </div>
      </div>
    </Container>
  )
}

export default Wallet
