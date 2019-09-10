/* eslint-disable no-unused-vars */
// const remote = require('electron').remote;

import React from 'react'
import ReactDOM from 'react-dom'

// import Test from './Test'
import Test from './Test'

console.log('testing vsc debugging!')

ReactDOM.render(
  <h1>Hello, world there!!</h1>,
  document.getElementById('app-container')
)

ReactDOM.render(
  <Test />,
  document.getElementById('app-container')
)


if (module.hot) {
  module.hot.accept()
}
