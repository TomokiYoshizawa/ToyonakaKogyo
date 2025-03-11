import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import emailjs from 'emailjs-com'
import App from './App.jsx'
import './index.css'

// Initialize EmailJS with your User ID
emailjs.init(import.meta.env.VITE_EMAILJS_USER_ID);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)