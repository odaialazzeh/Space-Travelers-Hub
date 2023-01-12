import { configureStore } from '@reduxjs/toolkit';
import logger from 'redux-logger';
import missions from './missionsReducer';
import dragonsReducer from './dragonReducer';
import rocketReducer from './rockets/rockets';

const store = configureStore({
  reducer: {
    dragons: dragonsReducer,
    rockets: rocketReducer,
    missions,
  },

  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});

export default store;
