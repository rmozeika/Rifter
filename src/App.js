import React from 'react';
import './App.css';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import createSagaMiddleware from 'redux-saga';
import reducer from './reducers';
import * as Actions from './actions';

import Nav from './containers/nav.js';

const middleware = createSagaMiddleware();

const store = createStore(
  reducer,
  applyMiddleware(middleware)
);

store.dispatch(Actions.getConfig());
function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Nav />
      </div>
    </Provider>
  );
}

export default App;
