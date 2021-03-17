import React from 'react'
import DashboardHeader from '../../Layout/DashboardHeader'
import { TiFilter } from 'react-icons/ti'
import { Button, InputGroup } from '../../UI'
import Container from './styles'

const Transactions = () => {
  return (
    <Container>
      <header>
        <DashboardHeader navType="small" />
        <div className="transaction--header__row">
          <h1 className="u--typo__headline">Notifications</h1>
        </div>
      </header>

      <div className="transaction--container"></div>
    </Container>
  )
}

export default Transactions
