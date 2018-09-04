import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import store from './app/store';

import Home from './app/home/home.container';
import registerServiceWorker from './registerServiceWorker';

const container = document.getElementById('root');

render(
  <Provider store={store}>
    <Home />
  </Provider>,
  container
);

registerServiceWorker();
