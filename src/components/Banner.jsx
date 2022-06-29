import React from 'react'
import '../styles/Banner.css'

export default function Banner() {
  return (
    <div className='Banner'>
        <div className='Imagen'>
            <img src="https://cdn.pixabay.com/photo/2016/08/29/23/47/wheelchair-1629490_960_720.jpg" alt="Banner" />
        </div>
        <div className='cuerpo'>
            <div className='Texto'>
                <h1>
                    <strong>MÁS</strong> DE 800 MIL FAMILIAS HABILITADAS
                </h1>
            </div>
            <div className='btn-verProductos'>
                VER PRODUCTOS
            </div>
        </div>
    </div>
  )
}
