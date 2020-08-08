import React from 'react';
import { render } from 'react-dom';
import { MuiThemeProvider } from '@material-ui/core';

// Import Components
import App from './components/App';
import Single from './components/Single';
import VideoGrid from './components/VideoGrid';
import CourseGrid from './components/CourseGrid';

// Import react router deps
import { Router, Route, IndexRoute } from 'react-router';
import { Provider } from 'react-redux';
import store, { history } from './store';
import ModalProvider from './providers/modal';
import CoursesProvider from './providers/courses';
import { theme } from './assets/theme/';
import { defaultFont} from './assets/theme';

import 'tachyons';
import './reset.css';
import './index.css';

render(
  <Provider store={store}>
    <MuiThemeProvider theme={defaultFont}>
    <MuiThemeProvider theme={theme}>
    <ModalProvider>
    <CoursesProvider>
    <Router history={history}>
      <Route path="/" component={App}>
        <IndexRoute component={CourseGrid} />
        <Route path="/course/:courseId" component={VideoGrid}></Route>
        <Route path='/course/:courseId/video/:videoId' component={Single}></Route>
      </Route>
    </Router>
    </CoursesProvider>
    </ModalProvider>
    </MuiThemeProvider>
    </MuiThemeProvider>
  </Provider>,
  document.getElementById('root')
);
