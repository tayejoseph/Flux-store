import React from 'react'
import { Route, useRouteMatch, Switch } from 'react-router'
import SideNav from '../SideNav'
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
} from '../../View'
import Container from './styles'

const DashBoard = () => {
  const { path } = useRouteMatch()

  return (
    <Container>
      <SideNav />
      <main className="dashboard--main">
        <Route path={`${path}/wallet`} exact={true} component={Wallet} />
        <Route path={`${path}/wallet/addCash`} component={AddCash} />
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
