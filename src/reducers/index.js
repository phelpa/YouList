import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import videos from './videos';
import annotations from './annotations';
import courses from './courses';

const rootReducer = combineReducers({videos, annotations, courses, routing: routerReducer});

export default rootReducer;