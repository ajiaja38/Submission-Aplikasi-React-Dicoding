import React from 'react'
import ReactDOM from 'react-dom/client'
import NotesApp from './components/NotesApp'
import './css/index.css'
import '@fortawesome/fontawesome-free/css/all.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <NotesApp />
  </React.StrictMode>
)
