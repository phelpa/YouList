import React from 'react';
import { render } from 'react-dom';

// Import Components
import App from './components/App';
import Single from './components/Single';
import VideoGrid from './components/VideoGrid';
import CourseGrid from './components/CourseGrid';

// Import react router deps
import { Router, Route, IndexRoute } from 'react-router';
import { Provider } from 'react-redux';
import store, { history } from './store';
import ModalProvider from './providers/modal/index';

render(
  <Provider store={store}>
    <ModalProvider>
    <Router history={history}>
      <Route path="/" component={App}>
        <IndexRoute component={CourseGrid} />
        <Route path="/course/:courseId" component={VideoGrid}></Route>
        <Route path='/course/:courseId/video/:videoId' component={Single}></Route>
      </Route>
    </Router>
    </ModalProvider>

  </Provider>,
  document.getElementById('root')
);




