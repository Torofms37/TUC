import React from 'react'

export const ModalGlobal = () => {
  return (
    <div>
      <h1>Modal Global</h1>
      <p>This is a global modal component.</p>
      <button className='warning text-white' onClick={() => alert('Modal closed!')}>Close Modal</button>
    </div>
  )
}
