import React from 'react'

import { MuiThemeProvider } from '@material-ui/core'
import { createBrowserHistory } from 'history'
import { render } from 'react-dom'
import { Router, Route } from 'react-router'

import ListGrid from './components/ListGrid'
import Main from './components/Main'
import VideoGrid from './components/VideoGrid'
import VideoPage from './components/VideoPage'
import { theme } from './css/theme'
import AnnotationsProvider from './providers/annotations'
import ListsProvider from './providers/lists'
import VideosProvider from './providers/videos'
import VideoSingleProvider from './providers/videosingle'

import 'tachyons'
import './css/base/reset.css'
import './css/base/font.css'

render(
  <MuiThemeProvider theme={theme}>
    <ListsProvider>
      <VideosProvider>
        <VideoSingleProvider>
          <AnnotationsProvider>
            <Main>
              <Router history={createBrowserHistory()}>
                <Route exact path="/" component={ListGrid} />
                <Route exact path="/list/:listId" component={VideoGrid} />
                <Route
                  exact
                  path="/list/:listId/video/:videoId"
                  component={VideoPage}
                />
              </Router>
            </Main>
          </AnnotationsProvider>
        </VideoSingleProvider>
      </VideosProvider>
    </ListsProvider>
  </MuiThemeProvider>,
  document.getElementById('root')
)
/*
function App() {
  return (
    <ThemeProvider>
      <AuthenticationProvider>
        <Router>
          <Home path="/" />
          <About path="/about" />
          <UserPage path="/:userId" />
          <UserSettings path="/settings" />
          <Notifications path="/notifications" />
        </Router>
      </AuthenticationProvider>
    </ThemeProvider>
  )
}
function Notifications() {
  return (
    <NotificationsProvider>
      <NotificationsTab />
      <NotificationsTypeList />
      <NotificationsList />
    </NotificationsProvider>
  )
}
function UserPage({username}) {
  return (
    <UserProvider username={username}>
      <UserInfo />
      <UserNav />
      <UserActivity />
    </UserProvider>
  )
}
*/
