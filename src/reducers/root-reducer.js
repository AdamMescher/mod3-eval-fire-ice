import { combineReducers } from 'redux';
import { fake } from './fake-reducer';
import { houseData } from './AppReducer';

const rootReducer = combineReducers({
  fake,
  houseData
});


export default rootReducer;
