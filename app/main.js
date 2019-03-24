import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import store from './store';
import Root from './components/root';

ReactDOM.render(
  // <h1>Hello</h1>,
  <Provider store={store}>
    <Root />
  </Provider>,
  document.getElementById('main')
);
