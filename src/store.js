import { createStore, compose, applyMiddleware} from 'redux';
import { syncHistoryWithStore } from 'react-router-redux';
import { browserHistory } from 'react-router';
import thunkMiddleware from 'redux-thunk';

//import the root reducer
import rootReducer from './reducers/index';


//create an object for the default data
/*
const defaultState = {
    
  annotations: annotations, //has its own reducer 
}
*/

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;


/*const store = createStore(rootReducer, defaultState, applyMiddleware(thunkMiddleware));*/

const store = createStore(
  rootReducer,
  composeEnhancer(applyMiddleware(thunkMiddleware)),
);


window.store = store.getState();


export const history = syncHistoryWithStore(browserHistory, store);

export default store;

