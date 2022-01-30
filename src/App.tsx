import React, { useState, useEffect } from 'react'

import { MuiThemeProvider } from '@material-ui/core'
import ListGrid from 'components/ListGrid'
import Nav from 'components/Nav'
import VideoGrid from 'components/VideoGrid'
import VideoPage from 'components/VideoPage'
import Login from 'components/Login'
import SignUp from 'components/SignUp'
import { theme } from 'css/theme'
import history from 'CreateHistory'
import { Provider } from 'react-redux'
import { Router, Route, Redirect } from 'react-router'
import { store } from 'services/store'
import authStorage from 'helpers/authStorage'

import authenticationActions from 'services/authentication/actions'

import './css/utilities/index.css'
import './css/base/reset.css'
import './css/base/font.css'

const PrivateRoute = ({ component: Component, ...rest }) => {
  const isAuthenticated = () => {
    return !!authStorage.getUser()
  }

  return (
    <Route
      {...rest}
      render={(props) =>
        isAuthenticated() ? (
          <>
            <Nav />
            <Component {...props} />
          </>
        ) : (
          <Redirect to="/login" />
        )
      }
    />
  )
}

const App = () => {
  const [loading, setLoading] = useState(false)

  const checkAuth = async () => {
    const params = new URL(window.location.href.replace(/#/g, '?'))
    const accessToken = params.searchParams.get('access_token')

    if (accessToken) {
      console.log(accessToken, 'entrou')
      setLoading(true)
      await authenticationActions.validateToken(accessToken as string)
      setLoading(false)
    }
  }

  const isRoutePublic = () => {
    return (
      window.location.pathname === '/signup' ||
      window.location.pathname === '/login'
    )
  }

  useEffect(() => {
    if (!isRoutePublic()) {
      checkAuth()
    }
  }, [])

  if (loading) {
    return <div>Loading..</div>
  }

  return (
    <Provider store={store}>
      <MuiThemeProvider theme={theme}>
        <Router history={history}>
          <PrivateRoute exact path="/" component={ListGrid} />
          <PrivateRoute exact path="/list/:listId" component={VideoGrid} />
          <PrivateRoute
            exact
            path="/list/:listId/video/:videoId"
            component={VideoPage}
          />
          <Route exact path="/login" component={Login} />
          <Route exact path="/signup" component={SignUp} />
        </Router>
      </MuiThemeProvider>
    </Provider>
  )
}

export default App
