import React from 'react'
import Container from './styles'

const StoreItem = ({ productName, price, publishStatus }) => {
  return (
    <Container published={publishStatus.toLowerCase() === 'published'}>
      <div className="img--container">{/* <img src="" /> */}</div>
      <div className="text--content">
        <p className="productName">{productName}</p>
        <p className="price">{price}</p>
        <p className="publish--status">{publishStatus}</p>
      </div>
    </Container>
  )
}

export default StoreItem
