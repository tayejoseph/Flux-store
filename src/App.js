import React from 'react'
import { Switch, Route, useLocation, Redirect } from 'react-router-dom'
import { IconContext } from 'react-icons'
import { ThemeProvider } from 'styled-components'
import DashBoard from './Layout/DashBoard'
import { AirtimeTopUp, DataTopUp, WithDraw } from './View'
import theme from './base/theme'
import GlobalStyle from './base/globalStyles'

const App = () => {
  const location = useLocation()
  const background = location.state?.background && {
    ...location.state.background,
    state: {
      background: location?.state.background
        ? location.pathname.split('/')[location.pathname.split('/').length - 1]
        : false,
    },
  }

  return (
    <ThemeProvider theme={theme()}>
      <GlobalStyle />
      <IconContext.Provider value={{ className: 'icon' }}>
        <Switch location={background || location}>
          <Route path="/" exact>
            <Redirect to="/dashboard/wallet" />
          </Route>
          <Route path="/dashboard" component={DashBoard} />
        </Switch>

        {/* Switch for modals with background routes */}
        <Switch>
          <Route path={`/dashboard/airTimeTopUp`} component={AirtimeTopUp} />
          <Route path={`/dashboard/dataTopUp`} component={DataTopUp} />
          <Route path={`/dashboard/wallet/withdraw`} component={WithDraw} />
        </Switch>
      </IconContext.Provider>
    </ThemeProvider>
  )
}

export default App
