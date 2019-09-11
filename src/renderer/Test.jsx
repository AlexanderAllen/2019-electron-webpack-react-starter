import { hot } from 'react-hot-loader/root';
import React from 'react'

const check = () => {
  return (
    <h1>SANITY CHECKS</h1>
  )
}

// Mark your root component as hot-exported.
export default hot(check)
