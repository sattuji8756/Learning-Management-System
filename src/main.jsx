// import { StrictMode } from 'react'

// Compomnent Imports 
import { Toaster } from 'react-hot-toast'
import App from './App.jsx'
import store from './Redux/store.js'

// CSS Import 
import './index.css'

// Library Import 
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'

createRoot(document.getElementById('root')).render(
  // <StrictMode>
  <Provider store={store}>
  <BrowserRouter>
    <App />
    <Toaster />
  
  </BrowserRouter>
  </Provider>
  // </StrictMode>,
)
