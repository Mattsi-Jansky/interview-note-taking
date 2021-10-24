import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import categories from './compiledQuestions'

ReactDOM.render(
  <React.StrictMode>
    <App categories={categories} />
  </React.StrictMode>,
  document.getElementById('root')
)