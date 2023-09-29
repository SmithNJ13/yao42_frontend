import React from 'react'
import ReactDOM from 'react-dom/client'
import { Provider } from "react-redux"
import store from "./store"
import App from './App.jsx'
import { BrowserRouter as Router } from 'react-router-dom'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <Router>
        <App />
      </Router>
    </Provider>
  </React.StrictMode>,
)
