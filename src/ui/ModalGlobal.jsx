import React, { useState } from 'react'
import '../App.css'

const t = {
  title: '¿Estás seguro?',
  subtitle: 'Esta acción no se puede deshacer.',
}

export const ModalGlobal = () => {
  const [button, setButton] = useState(false);

  //adecuar al momento
  if (!button) return true

  return (
    <div className='modal-global text-white text-center shadow-2xl'>
      <h1 className='text-3xl font-bold'>{t.title}</h1>
      <h3 className='text-2xl'>{t.subtitle}</h3>
      <div className='flex w-full justify-center m-2 gap-4'>
        <button className='warning' onClick={() => setButton(true)}>No</button>
        <button className='alert'>Sí</button>
      </div>
    </div>
  )
}