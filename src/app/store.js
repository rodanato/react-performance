import {applyMiddleware, createStore} from 'redux';
import reducer                        from './reducers';

const middlewares = [];

if (process.env.REACT_APP_ENV !== `prod`) {
  const {logger} = require(`redux-logger`);

  middlewares.push(logger);
}

// middlewares.push(thunk);

const store = createStore(
  reducer,
  applyMiddleware(...middlewares)
);

export default store;
