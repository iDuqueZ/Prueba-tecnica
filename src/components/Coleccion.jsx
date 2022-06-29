import React from 'react'
import Productos from './Productos'
import '../styles/Coleccion.css'

export default function Coleccion() {
  return (
    <div className='master'>
        <h2>NUEVA COLECCIÓN</h2>
        <div className='Cajon'>
            <Productos></Productos>
        </div>
    </div>
  )
}
