import { combineReducers, createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import { composeWithDevTools } from 'redux-devtools-extension';
import rocketReducer from './rockets/rockets';

const rootReducer = combineReducers({
  rockets: rocketReducer,
});

// store.dispatch(fetchMissionSuccess());
const store = createStore(
  rootReducer,
  composeWithDevTools(
    applyMiddleware(logger, thunk),
  ),

);
store.dispatch(rocketReducer);
export default store;
