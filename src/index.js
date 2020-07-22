import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {applyMiddleware, compose, createStore} from "redux";
import {Provider} from 'react-redux'
import {rootReduser} from "./redux/rootReducer";
import thunk from "redux-thunk";

const store = createStore(rootReduser, compose(
  applyMiddleware(
    thunk
  ),
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
));

const app = (
  <Provider store={store}>
    <App/>
  </Provider>
);

ReactDOM.render(app,
  document.getElementById('root')
);


