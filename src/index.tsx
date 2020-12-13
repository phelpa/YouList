import React from 'react';
import { render } from 'react-dom';
import { MuiThemeProvider } from '@material-ui/core';
import { createBrowserHistory } from 'history';

import Single from './components/Single';
import VideoGrid from './components/VideoGrid';
import ListGrid from './components/ListGrid';
import Main from './components/Main';

import { Router, Route } from 'react-router';
import ListsProvider from './providers/lists';
import VideosProvider from './providers/videos';
import VideoSingleProvider from './providers/videosingle';
import AnnotationsProvider from './providers/annotations';
import { theme } from './assets/theme/';
import { defaultFont } from './assets/theme';

import 'tachyons';
import './reset.css';
import './index.css';

render(
  <MuiThemeProvider theme={defaultFont}>
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
                    component={Single}
                  />
                </Router>
              </Main>
            </AnnotationsProvider>
          </VideoSingleProvider>
        </VideosProvider>
      </ListsProvider>
    </MuiThemeProvider>
  </MuiThemeProvider>,
  document.getElementById('root')
);
