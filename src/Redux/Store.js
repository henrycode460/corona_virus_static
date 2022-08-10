import { configureStore } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';

import countriesReducer from './CoronaVirus'


const rootStore = combineReducers({
   country: countriesReducer

});

const store = configureStore({
  reducer: rootStore,
});

export default store;