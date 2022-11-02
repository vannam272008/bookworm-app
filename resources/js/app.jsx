import React from 'react'
import ReactDOM from "react-dom"
import 'bootstrap/dist/css/bootstrap.css'
import rootReducer from './reducers'
import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { Provider } from 'react-redux'
import Header from './components/header/Header'
import HomePage from './pages/HomePage'

// const store = createStore(rootReducer, applyMiddleware(thunk))

ReactDOM.render(
  // <Provider store={store}>
    <HomePage/>,
  // </Provider>,
  document.getElementById('root')
)