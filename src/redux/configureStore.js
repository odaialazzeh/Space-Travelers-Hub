import { configureStore } from '@reduxjs/toolkit';
import logger from 'redux-logger';
import dragonsReducer from './dragonReducer';

const store = configureStore({
  reducer: {
    dragons: dragonsReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});

export default store;
