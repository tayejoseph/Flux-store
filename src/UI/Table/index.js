import React from 'react'
import Container from './styles'

const Table = ({ tableContent, tableFooter = true }) => {
  return (
    <Container>
      <table className="flux--table">{tableContent && tableContent}</table>
      {tableFooter && (
        <footer className="flux--table__footer">{tableFooter}</footer>
      )}
    </Container>
  )
}

export default Table
