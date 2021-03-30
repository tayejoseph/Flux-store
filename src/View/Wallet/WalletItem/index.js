import React from 'react'
import Container from './styles'

const WalletItem = ({ balance, gradient, background, walletType, title }) => {
  return (
    <Container
      className="wallet--item"
      style={{
        background: gradient,
      }}
    >
      <div>
        <h3 className="wallet--title">{title}</h3>
        <h1 className="wallet--balance">{balance}</h1>
      </div>
      <h3 className="wallet--type">{walletType}</h3>
    </Container>
  )
}

export default WalletItem
