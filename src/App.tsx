import React, { useState, useEffect } from 'react'

import { MuiThemeProvider } from '@material-ui/core'
import ListGrid from 'components/ListGrid'
import Nav from 'components/Nav'
import VideoGrid from 'components/VideoGrid'
import VideoPage from 'components/VideoPage'
import Login from 'components/Login'
import SignUp from 'components/SignUp'
import { theme } from 'css/theme'
import { createBrowserHistory } from 'history'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { Router, Route, Redirect } from 'react-router'
import { store } from 'services/store'

import authenticationActions from 'services/authentication/actions'

import './css/utilities/index.css'
import './css/base/reset.css'
import './css/base/font.css'

const PrivateRoute = ({ component: Component, ...rest }) => {
  const isAuthenticated = () => {
    if (localStorage.getItem('user_data')) {
      console.log('entrou true')
      return true
    }
    console.log('entrou false')
    return false
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
    console.log('entrou checkAuth')
    const params = new URLSearchParams(window.location.search)
    const access_token = params.get('access_token')

    if (access_token) {
      console.log('entrou no if do App')
      setLoading(true)
      const userData = await authenticationActions.validateToken(
        access_token as string
      )
      console.log(userData, 'oia so')
      setLoading(false)

      localStorage.setItem('user_data', userData)
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
        <Router history={createBrowserHistory()}>
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
