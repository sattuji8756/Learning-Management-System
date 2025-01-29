// import { StrictMode } from 'react'

// Compomnent Imports 
import { Toaster } from 'react-hot-toast'
import App from './App.jsx'

// CSS Import 
import './index.css'

// Library Import 
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'

createRoot(document.getElementById('root')).render(
  // <StrictMode>
  <BrowserRouter>
    <App />
    <Toaster />
  
  </BrowserRouter>
  // </StrictMode>,
)
