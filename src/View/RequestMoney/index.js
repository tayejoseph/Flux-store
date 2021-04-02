import React, { useEffect } from 'react'
import { IoMdAdd } from 'react-icons/io'
import { useHistory } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { getRequestLists } from '../../store/actions/user'
import { Button, TabNav, Table } from '../../UI'
import { useQuery } from '../../hooks'
import DashboardHeader from '../../Layout/DashboardHeader'
import ModalRequestMoney from './ModalRequestMoney'
import Container from './styles'

const RequestMoney = () => {
  const { requestLists } = useSelector((s) => s.user)
  const dispatch = useDispatch()
  const showModal = useQuery().get('modal')
  const history = useHistory()

  useEffect(() => {
    dispatch(getRequestLists())
  }, [dispatch])

  console.log(requestLists, 'Sdjskdjsdkj')

  return (
    <Container>
      <DashboardHeader
        title={'Money Request'}
        sectionAction={
          <Button
            rounded
            iconRight
            onClick={() =>
              history.push('/dashboard/requestMoney/send?modal=true')
            }
          >
            <IoMdAdd />
            Send
          </Button>
        }
      />
      {showModal && <ModalRequestMoney />}
      <div className="transaction--container">
        <header>
          <TabNav tabItems={['Sent', 'Received']} />
        </header>
        <div className="transaction--table__container">
          <Table
            data={requestLists}
            tableHeader={
              <thead>
                <tr>
                  <th>Recipient</th>
                  <th>Description</th>
                  <th>Amount</th>
                </tr>
              </thead>
            }
            tableContent={
              <>
                {[...Array(10).keys()].map((item, index) => (
                  <tr key={index}>
                    <td>Jackson Doe</td>
                    <td>Shopping List for Jason's</td>
                    <td>₦ 4,354,955.23</td>
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

export default RequestMoney
