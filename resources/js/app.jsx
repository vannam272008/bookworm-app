import React, { Fragment } from 'react'
import ReactDOM from "react-dom"
import 'bootstrap/dist/css/bootstrap.css'
import rootReducer from './reducers'
import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { Provider } from 'react-redux'
import App from './index'


// const store = createStore(rootReducer, applyMiddleware(thunk))
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  BrowserRouter
} from "react-router-dom";


ReactDOM.render(
  // <Provider store={store}>
  <BrowserRouter>
    <App/>
  </BrowserRouter>,
  

  // </Provider>,
  document.getElementById('root')
)