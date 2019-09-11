import React from 'react'
import ReactDOM from 'react-dom'

// Import React component.
import Test from './Test'

console.log('testing vsc debugging!')

ReactDOM.render(
  <Test />,
  document.getElementById('app-container')
)


// if (module.hot) {
//   module.hot.accept()
// }
