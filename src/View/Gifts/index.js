import React from 'react'
import { IoMdAdd, IoMdTrash } from 'react-icons/io'
import { Button, Table, TabNav } from '../../UI'
import DashboardHeader from '../../Layout/DashboardHeader'
import Container from './styles'

const Gift = () => {
  return (
    <Container>
      <DashboardHeader
        title={'Flux Lists'}
        sectionAction={
          <div className="card--action">
            <Button rounded iconRight>
              <IoMdAdd />
              Create
            </Button>
          </div>
        }
      />
      <div className="gift--table__container">
        <Table
          tableContent={
            <>
              <thead>
                <tr>
                  <th colSpan="5" className="caption table--tab__container">
                    <TabNav tabItems={['Created', 'Sent', 'Received']} />
                  </th>
                </tr>
                <tr>
                  <th>Title</th>
                  <th>Description</th>
                  <th className="action--cell">Action</th>
                </tr>
              </thead>
              <tbody>
                {[...Array(10).keys()].map((item, index) => (
                  <tr>
                    <td>Jackson Doe</td>
                    <td>Shopping List for Jason's</td>
                    <td className="action--cell">
                      <Button icon className="btn--delete">
                        <IoMdTrash />
                      </Button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </>
          }
        />
      </div>
    </Container>
  )
}

export default Gift
