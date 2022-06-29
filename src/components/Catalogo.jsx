import React from 'react'
import '../styles/Catalogo.css'
import Productos from './Productos'

export default function Catalogo() {
  return (
    <div className='catalogo'>
        <div className='cat-opciones'>
            <div>
                SILLAS DE RUEDAS
            </div>
            <div>
                TERAPIA EN EL HOGAR
            </div>
            <div>
                MOVILIDAD
            </div>
        </div>
        <div className='imagen-fondo'>
            
        </div>

        <div className='caja-productos-catalogo'>
            <h3>SILLAS DE RUEDAS</h3>
            <Productos/>
        </div>

    </div>
  )
}
