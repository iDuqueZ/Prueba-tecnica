import React from 'react'
import '../styles/Productos.css'

export default function Productos() {

    var data = [
        {
            imagen: 'https://locatelcolombia.vtexassets.com/arquivos/ids/218701/822383230047_1_SILLA-DE-RUEDA-DRIVE-PEDIATRICA-14.png?v=637050258599430000',
            descripcion: 'Silla de Ruedas Motorizada Gris M2000 metalizada',
            precioOriginal: '1.110.000',
            precioActual: '1.110.000',
        },
        {
            imagen: 'https://locatelcolombia.vtexassets.com/arquivos/ids/218701/822383230047_1_SILLA-DE-RUEDA-DRIVE-PEDIATRICA-14.png?v=637050258599430000',
            descripcion: 'Silla de Ruedas Motorizada Gris M2000 metalizada',
            precioOriginal: '1.110.000',
            precioActual: '1.110.000',
        },
        {
            imagen: 'https://locatelcolombia.vtexassets.com/arquivos/ids/218701/822383230047_1_SILLA-DE-RUEDA-DRIVE-PEDIATRICA-14.png?v=637050258599430000',
            descripcion: 'Silla de Ruedas Motorizada Gris M2000 metalizada',
            precioOriginal: '1.110.000',
            precioActual: '1.110.000',
        },
        {
            imagen: 'https://locatelcolombia.vtexassets.com/arquivos/ids/218701/822383230047_1_SILLA-DE-RUEDA-DRIVE-PEDIATRICA-14.png?v=637050258599430000',
            descripcion: 'Silla de Ruedas Motorizada Gris M2000 metalizada',
            precioOriginal: '1.110.000',
            precioActual: '1.110.000',
        },
    ]

  return (
    <div className='cajonProductos'>
         {Array.from(data).map((datos)=>(
            <div className='card-producto'>
                <div className='inner'>
                    <div className='imagen'>
                        <img src={datos.imagen} alt="producto" />
                    </div>
                    <div className='descripcion'>
                        <p>{datos.descripcion}</p>
                    </div>
                    <div className='precios'>
                        <label>$ {datos.precioOriginal}</label> <br></br>
                        <label className='precioActual'>$ {datos.precioActual}</label>
                    </div>
                    
                </div>
                
                <div className='btn-añadirCarrito'>
                    AÑADIR AL CARRO
                </div>
            </div>
        ))}
    </div>
  )
}
