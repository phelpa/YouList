import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import videos from './videos';
import annotations from './annotations';
import courses from './courses';
import video from './video';


const rootReducer = combineReducers({video, annotations, courses, videos, routing: routerReducer});

export default rootReducer;