import React from 'react';
import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';

import calReducer from './src/reducer';
import Screen from './src/Screen';

const rootReducer = combineReducers({ cal: calReducer });

const store = createStore(rootReducer, {});

const App = () => (
  <Provider store={store}>
    <Screen />
  </Provider>
);

export default React.memo(App);
