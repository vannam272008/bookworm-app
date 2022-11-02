import React, { Fragment } from 'react'
import ReactDOM from "react-dom"
import 'bootstrap/dist/css/bootstrap.css'
import rootReducer from './reducers'
import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { Provider } from 'react-redux'
import HomePage from './pages/HomePage'
import Footer from './components/footer/Footer'
import Header from './components/header/Header'
import ShopPage from './pages/ShopPage'


// const store = createStore(rootReducer, applyMiddleware(thunk))
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

ReactDOM.render(
  // <Provider store={store}>
  
  

  // </Provider>,
  document.getElementById('root')
)