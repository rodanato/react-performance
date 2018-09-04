import {combineReducers}   from 'redux';
import homeReducer from "./home/home.reducer";

const reducer = combineReducers({
  homeState: homeReducer
});

export default reducer;
