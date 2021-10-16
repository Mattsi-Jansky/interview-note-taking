import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'

const testCategories = [
  { 
    name:"Technical Depth",
    questions: [
      "What is the average speed of an unladen swallow?",
      "What is your favourite color?",
      "Do you feel lucky?"
    ]
  },
  {
    name:"Leadership",
    questions: [
      "What is the average speed of an unladen swallow?",
      "What is your favourite color?",
      "Do you feel lucky?"
    ]
  }
]

ReactDOM.render(
  <React.StrictMode>
    <App categories={testCategories} />
  </React.StrictMode>,
  document.getElementById('root')
)