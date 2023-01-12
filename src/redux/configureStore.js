import { configureStore } from '@reduxjs/toolkit';
import logger from 'redux-logger';
import dragonsReducer from './dragonReducer';
import rocketReducer from './rockets/rockets';

const store = configureStore({
  reducer: {
    dragons: dragonsReducer,
    rockets: rocketReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});

export default store;
