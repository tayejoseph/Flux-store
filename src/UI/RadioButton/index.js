import React from 'react'
import Container from './styles'

const RadioButton = ({ name, checked }) => {
  return (
    <Container className="radio__input">
      <input type="radio" name={name ? name : 'radio'} checked = {checked}/>
      <span className="radio__control" />
    </Container>
  )
}

export default RadioButton
