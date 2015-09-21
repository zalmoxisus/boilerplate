import { combineReducers } from 'redux';
import { routerStateReducer } from 'redux-router';
import leftNav from './leftNav';

const rootReducer = combineReducers({
  leftNav,
  router: routerStateReducer
});

export default rootReducer;
