import React from 'react'
import { Link } from 'react-router-dom'

export const NotFound = () => {
  return (
    <div className='not-found'>
      <h2>sorry</h2>
      <p>The page cannot be found</p>
      <Link to='/'>Back to the homepage...</Link>
    </div>
  )
}
