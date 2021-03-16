import React from 'react'
import Container from './styles'

const Table = ({ tableContent, tableFooter = true }) => {
  return (
    <Container className="flux--table__container">
      <table className="flux--table">{tableContent && tableContent}</table>
      {tableFooter && (
        <footer className="flux--table__footer">{tableFooter}</footer>
      )}
    </Container>
  )
}

export default Table
