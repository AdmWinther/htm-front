import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import LabelInput from './assets/components/LabelInput.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <LabelInput label="Name" />
    <LabelInput label="Name" />
    <LabelInput label="Name" />
    <LabelInput label="Name" />
  </React.StrictMode>,
)
