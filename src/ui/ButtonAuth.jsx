import React from 'react'
import '../App.css'

export const ButtonAuth = () => {
  return (
    <div className='bgPrimary w-50 h-10 rounded-2xl top-10 font-light right-5 fixed text-white flex justify-evenly z-10 shadow-2xl'>
      <button className='btn-a'>Login</button>
        <p>|</p>
      <button className='btn-a'>Register</button>
    </div>
  )
}
