// eslint-disable-next-line no-unused-vars
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {BrowserRouter} from 'react-router-dom'
import ShopContextProvider from './context/ShopContext.jsx'
import ScrollToTop from './components/ScrollToTop.tsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
  <ScrollToTop>
  <ShopContextProvider>
      <App />
  </ShopContextProvider>
  </ScrollToTop>
  </BrowserRouter>
)
