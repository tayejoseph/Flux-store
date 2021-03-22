import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { IoMdAdd, IoMdTrash } from 'react-icons/io'
import { Helmet } from 'react-helmet'
import { Button, Table, TabNav } from '../../UI'
import { getGiftLists } from '../../store/actions/User'
import DashboardHeader from '../../Layout/DashboardHeader'
import Container from './styles'

const Gift = () => {
  const dispatch = useDispatch()
  const { giftLists } = useSelector((s) => s.user)

  useEffect(() => {
    dispatch(getGiftLists())
  }, [dispatch])

  return (
    <Container>
      <Helmet>
        <title>Flux Gifts</title>
      </Helmet>
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
      <div className="gift--content">
        <header>
          <TabNav tabItems={['Created', 'Sent', 'Received']} />
        </header>
        <div className="gift--table__container">
          <Table
            tableHeader={
              <thead>
                <tr>
                  <th>Title</th>
                  <th>Description</th>
                  <th className="action--cell">Action</th>
                </tr>
              </thead>
            }
            tableContent={
              <>
                {[...Array(10).keys()].map((item, index) => (
                  <tr key={`table-${index}`}>
                    <td>Jackson Doe</td>
                    <td>Shopping List for Jason's</td>
                    <td className="action--cell">
                      <Button icon className="btn--delete">
                        <IoMdTrash />
                      </Button>
                    </td>
                  </tr>
                ))}
              </>
            }
          />
        </div>
      </div>
    </Container>
  )
}

export default Gift
