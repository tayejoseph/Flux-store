import React from 'react'
import { LazyLoadImage } from 'react-lazy-load-image-component'
import { MdMoreVert } from 'react-icons/md'
import { toMoney } from '../../../helpers'
import { Button } from '../../../UI'
import Container from './styles'

const StoreItem = ({
  name,
  amount,
  image_url_1,
  publishStatus,
  onClick,
  showActionSheet,
  index,
  onActionClick,
}) => {
  return (
    <Container
      // published={publishStatus.toLowerCase() === 'published'}
      role={'button'}
      onClick={onClick}
    >
      <Button icon className="shop--item__btn" onClick={onActionClick}>
        <MdMoreVert />
      </Button>
      <div className="img--container">
        <LazyLoadImage src={image_url_1} alt={name} effect="blur" />
      </div>
      <div className="text--content">
        <p className="productName">{name}</p>
        <p className="price">₦{toMoney(amount)}</p>
        {/* <p className="u--typo__normal publish--status">{publishStatus}</p> */}
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
