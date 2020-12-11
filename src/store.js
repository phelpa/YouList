import { createStore, compose, applyMiddleware} from 'redux';
import { syncHistoryWithStore } from 'react-router-redux';
import { createBrowserHistory } from 'history'
import thunkMiddleware from 'redux-thunk';

//import the root reducer
import rootReducer from './reducers/index';


const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;


const store = createStore(
  rootReducer,
  composeEnhancer(applyMiddleware(thunkMiddleware)),
);


window.store = store.getState();


export const history = syncHistoryWithStore(createBrowserHistory(), store);

export default store;
