import React from 'react'
import { NavLink } from 'react-router-dom'
import DashboardHeader from '../../Layout/DashboardHeader'
import Container from './styles'

const Transactions = () => {
  return (
    <Container>
      <header className="transaction--header">
        <DashboardHeader navType="small" />
        <div className="notification--header__row">
          <h1 className="u--typo__headline">Notifications</h1>
        </div>
      </header>

      <div className="notification--container">
        <header />
        <div className="content--container">
          <aside>
            <nav>
              <NavLink to={'/dashboard/notification/fluxWallet'}>
                Flux Wallet
              </NavLink>
              <NavLink to={'/dashboard/notification/crypto'}>Crypto</NavLink>
              <NavLink to={'/dashboard/notification/fluxStorer'}>
                Flux Store
              </NavLink>
            </nav>
          </aside>
          <main>
            {[...Array(10).keys()].map((item) => (
              <div className="notification--item u--typo__normal">
                <div className="top--item">
                  <p>Receipt</p>
                  <p>23/08/2020</p>
                </div>
                <p>
                  <strong>FB6CD</strong> sent you a total of{' '}
                  <strong>0.2341BTC.</strong>
                </p>
              </div>
            ))}
          </main>
        </div>
        <footer />
      </div>
    </Container>
  )
}

export default Transactions
