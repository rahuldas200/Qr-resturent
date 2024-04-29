import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import './style/tailwind.css';
import { Provider } from "react-redux";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "./reducer/index.js";

const store = configureStore( {
  reducer:rootReducer,
})

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <Provider store={store}>
        <App/>
        <ToastContainer/>
      </Provider>
  </React.StrictMode>
)
