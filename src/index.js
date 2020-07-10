import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { syncHistoryWithStore } from 'react-router-redux';
import { createBrowserHistory } from 'history';
import Routes from './routes';

import store from './store';

const browserHistory = createBrowserHistory();
const history = syncHistoryWithStore(browserHistory, store);

console.log('in index');

ReactDOM.render(
  <Provider store={store}>
    <Routes history={history} />
  </Provider>,
  document.getElementById('root'),
);
