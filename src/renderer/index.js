import React from 'react'
import ReactDOM from 'react-dom'

// Import React component.
import Test from './Test'

// Test styles.
import './styles.css'

console.log('testing vsc debugging!')

ReactDOM.render(
  <Test />,
  document.getElementById('app-container')
)
