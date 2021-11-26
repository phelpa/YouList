import React from 'react'

import { MuiThemeProvider } from '@material-ui/core'
import ListGrid from 'components/ListGrid'
import Nav from 'components/Nav'
import VideoGrid from 'components/VideoGrid'
import VideoPage from 'components/VideoPage'
import Login from 'components/Login'
import { theme } from 'css/theme'
import { createBrowserHistory } from 'history'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { Router, Route } from 'react-router'
import { store } from 'redux/store'

import './css/utilities/index.css'
import './css/base/reset.css'
import './css/base/font.css'

const NavRoute = ({ exact, path, component: Component }) => (
  <Route
    exact={exact}
    path={path}
    render={(props) => (
      <>
        <Nav />
        <Component {...props} />
      </>
    )}
  />
)

render(
  <Provider store={store}>
    <MuiThemeProvider theme={theme}>
      <Router history={createBrowserHistory()}>
        <NavRoute exact path="/" component={ListGrid} />
        <NavRoute exact path="/list/:listId" component={VideoGrid} />
        <NavRoute
          exact
          path="/list/:listId/video/:videoId"
          component={VideoPage}
        />
        <Route exact path="/login" component={Login} />
      </Router>
    </MuiThemeProvider>
  </Provider>,
  document.getElementById('root')
)
