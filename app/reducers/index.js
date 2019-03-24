import { combineReducers } from 'redux';
import { candyReducer } from './candies';


const rootReducer = combineReducers({
  candies: candyReducer
});

export default rootReducer;
