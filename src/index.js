import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {BrowserRouter} from 'react-router-dom'

import {Provider} from 'react-redux';
import thunk from 'redux-thunk';
import {legacy_createStore, applyMiddleware, compose} from 'redux'
import {Context} from './state/context';
import {reducers} from './state/reducers';

const store = legacy_createStore(reducers, compose(applyMiddleware(thunk)))
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <BrowserRouter>
      <Context>
        <App />
      </Context>
    </BrowserRouter>
  </Provider>
);

