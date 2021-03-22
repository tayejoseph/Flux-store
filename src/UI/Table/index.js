import React from 'react'
import { Spinner } from '../../UI'
import Container from './styles'

const Table = ({
  tableContent,
  data,
  tableHeader,
  emptyMessage,
  tableFooter = true,
}) => {
  return (
    <Container className="flux--table__container">
      <table className="flux--table">
        {tableHeader}
        <tbody>
          {data === '' ? (
            <div className="spinner--container">
              <Spinner />
            </div>
          ) : data && data.length === 0 ? (
            <p className="error--msg">{emptyMessage}</p>
          ) : (
            tableContent
          )}
        </tbody>
      </table>
      {tableFooter && (
        <footer className="flux--table__footer">{tableFooter}</footer>
      )}
    </Container>
  )
}

export default Table
