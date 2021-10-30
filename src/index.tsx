import React, { Suspense } from 'react'

import { MuiThemeProvider, CircularProgress } from '@material-ui/core'
import ListGrid from 'components/ListGrid'
import { createBrowserHistory } from 'history'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { Router, Route } from 'react-router'

import Nav from 'components/Nav'
import VideoGrid from 'components/VideoGrid'
import VideoPage from 'components/VideoPage'
import { theme } from 'css/theme'
import VideoSingleProvider from 'providers/videosingle'
import { store } from 'redux/store'

import './css/utilities/index.css'
import './css/base/reset.css'
import './css/base/font.css'

render(
  <Provider store={store}>
    <MuiThemeProvider theme={theme}>
      <VideoSingleProvider>
        <Nav />
        {/* <Suspense fallback={<CircularProgress size={100} />}> */}
        <Router history={createBrowserHistory()}>
          <Route exact path="/" component={ListGrid} />
          <Route exact path="/list/:listId" component={VideoGrid} />
          <Route
            exact
            path="/list/:listId/video/:videoId"
            component={VideoPage}
          />
        </Router>
        {/* </Suspense> */}
      </VideoSingleProvider>
    </MuiThemeProvider>
  </Provider>,
  document.getElementById('root')
)
