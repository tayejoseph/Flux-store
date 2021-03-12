import React from 'react'
import { IoClose } from 'react-icons/io5'
import { MdFileUpload } from 'react-icons/md'
import { Button } from '../../../../UI'
import Container from './styles'

const SmImg = () => {
  return (
    <div className="smImg--container">
      <Button type="button" icon onClick={console.log}>
        <IoClose />
      </Button>
    </div>
  )
}

const UploadForm = () => {
  return (
    <Container>
      <label className="upload-container" id="productImg">
        <input type="file" accept="image/png, image/jpeg" multiple />
        <MdFileUpload />
        <p>Upload Image. Max 2MB</p>
      </label>
      <div className="smImg--row">
        {[...Array(3).keys()].map((i) => (
          <SmImg ke={`smImg-${i}`} />
        ))}
      </div>
      <p className="upload--instruction">
        You are allowed to upload only 3 images
      </p>
    </Container>
  )
}

export default UploadForm
