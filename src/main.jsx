import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { NatGeoProvider } from './context/NatGeoContext.jsx'
import './index.scss'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <NatGeoProvider>
      <App />
    </NatGeoProvider>
  </React.StrictMode>
)
