import React, { Suspense } from 'react'

import { MuiThemeProvider, CircularProgress } from '@material-ui/core'
import { createBrowserHistory } from 'history'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { Router, Route } from 'react-router'

import ListGrid from './components/ListGrid'
import Nav from './components/Nav'
import VideoGrid from './components/VideoGrid'
import VideoPage from './components/VideoPage'
import { theme } from './css/theme'
import AnnotationsProvider from './providers/annotations'
import ListsProvider from './providers/lists'
import VideosProvider from './providers/videos'
import VideoSingleProvider from './providers/videosingle'
import { store } from './redux/store'

import './css/utilities/index.css'
import './css/base/reset.css'
import './css/base/font.css'

render(
  <Provider store={store}>
    <MuiThemeProvider theme={theme}>
      <ListsProvider>
        <VideosProvider>
          <VideoSingleProvider>
            <AnnotationsProvider>
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
            </AnnotationsProvider>
          </VideoSingleProvider>
        </VideosProvider>
      </ListsProvider>
    </MuiThemeProvider>
  </Provider>,
  document.getElementById('root')
)
