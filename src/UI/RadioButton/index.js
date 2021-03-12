import React from 'react'
import Container from './styles'

const RadioButton = ({ name, checked, onChange }) => {
  return (
    <Container className="radio__input">
      <input
        type="radio"
        name={name ? name : 'radio'}
        checked={checked}
        onChange={() => {
          if (typeof onChange === 'function') {
            onChange()
          }
        }}
      />
      <span className="radio__control" />
    </Container>
  )
}

export default RadioButton
