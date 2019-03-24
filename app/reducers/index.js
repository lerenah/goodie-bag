import { combineReducers } from 'redux';
import { candyReducer } from './candies';

const initialState = {};

const rootReducer = combineReducers({
  candies: candyReducer
});

export default rootReducer;
