import React from 'react'
import { Switch, Route, useLocation } from 'react-router-dom'
import { IconContext } from 'react-icons'
import { ThemeProvider } from 'styled-components'
import DashBoard from './Layout/DashBoard'
import { AirtimeTopUp, DataTopUp, WithDraw } from './View'
import theme from './base/theme'
import GlobalStyle from './base/globalStyles'

const App = () => {
  const location = useLocation()
  const background = location.state && location.state.background

  return (
    <ThemeProvider theme={theme()}>
      <GlobalStyle />
      <IconContext.Provider value={{ className: 'icon' }}>
        <Switch location={background || location}>
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
