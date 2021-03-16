import React from 'react'
import Container from './styles'
import { MdMoreVert } from 'react-icons/md'
import { Button } from '../../../UI'

const StoreItem = ({
  productName,
  price,
  publishStatus,
  onClick,
  showActionSheet,
  index,
  onActionClick,
}) => {
  return (
    <Container
      published={publishStatus.toLowerCase() === 'published'}
      role={'button'}
      onClick={onClick}
    >
      <Button icon className="shop--item__btn" onClick={onActionClick}>
        <MdMoreVert />
      </Button>
      <div className="img--container">{/* <img src="" /> */}</div>
      <div className="text--content">
        <p className="productName">{productName}</p>
        <p className="price">{price}</p>
        <p className="u--typo__normal publish--status">{publishStatus}</p>
      </div>
      {showActionSheet === index && (
        <div className="storeItem--action__container">
          <ol className="u--typo__btn">
            <li>Copy Link</li>
            <li>Edit</li>
            <li>Unpublish</li>
            <li className="status--txt__failed2">Delete Permanently</li>
          </ol>
        </div>
      )}
    </Container>
  )
}

export default StoreItem
