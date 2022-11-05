import React, { Fragment } from 'react'
import ReactDOM from "react-dom"
import 'bootstrap/dist/css/bootstrap.css'
import { Provider } from 'react-redux'
import App from './index'
import store from './reducers/store'

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  BrowserRouter
} from "react-router-dom";


ReactDOM.render(
  <Provider store={store}>
  <BrowserRouter>
    <App/>
  </BrowserRouter>,
  

  </Provider>,
  document.getElementById('root')
)