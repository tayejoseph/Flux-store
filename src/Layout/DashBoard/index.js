import React, { useState, useEffect } from 'react'
import { Route, useRouteMatch, Switch } from 'react-router'
import { IoMdMenu } from 'react-icons/io'
import { Button } from '../../UI'
import DashboardSideNav from '../DashboardSideNav'
import {
  Wallet,
  Cards,
  Gifts,
  Store,
  RequestMoney,
  AddCash,
  SendMoney,
  NewUser,
  ProductDetails,
  ProductForm,
  Transactions,
  Notification,
} from '../../View'
import Container from './styles'

const DashBoard = () => {
  const [showMenu, setDisplay] = useState(false)
  const { path } = useRouteMatch()

  const handleHideDrawer = (e) => {
    e.stopPropagation()
    setDisplay(false)
  }

  useEffect(() => {
    const handleResize = () => {
      setDisplay(false)
    }
    window.addEventListener('resize', handleResize)
    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  return (
    <Container>
      <header className={'nav--mobile'}>
        <Button icon onClick={() => setDisplay(!showMenu)}>
          <IoMdMenu />
        </Button>
      </header>
      <aside
        className={`side--nav ${showMenu ? 'open--menu__mobile' : ''}`}
        onClick={handleHideDrawer}
      >
        <DashboardSideNav />
      </aside>
      <main className="dashboard--main">
        <Route path={`${path}/notification`} component={Notification} />
        <Route path={`${path}/wallet/summary`} component={Wallet} />
        <Route path={`${path}/wallet/addCash`} component={AddCash} />
        <Route path={`${path}/wallet/transactions`} component={Transactions} />
        <Route path={`${path}/cards`} component={Cards} />
        <Route path={`${path}/gifts`} component={Gifts} />
        <Route path={`${path}/store`} component={Store} />
        <Route path={`${path}/store/add`} component={ProductForm} />
        <Route path={`${path}/store/:productId/:action`}>
          <Switch>
            <Route
              path={`${path}/store/:productId/details`}
              component={ProductDetails}
            />
            <Route
              path={`${path}/store/:productId/edit`}
              component={ProductForm}
            />
          </Switch>
        </Route>
        <Route path={`${path}/store/newUser`} component={NewUser} />
        <Route path={`${path}/requestMoney`} component={RequestMoney} />
        <Route path={`${path}/sendMoney`} component={SendMoney} />
      </main>
    </Container>
  )
}

export default DashBoard
