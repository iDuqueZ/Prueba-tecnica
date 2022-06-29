import React from 'react'
import '../styles/NavBar.css'
import {BsCart3} from 'react-icons/bs'
import {MdAccessibleForward, MdOutlinePersonalInjury, MdOutlineCleanHands} from 'react-icons/md'
import {RiHeartAddLine} from 'react-icons/ri'
import {HiMenu} from 'react-icons/hi'


export default function NavBar() {
  return (
    <div className='NavBar'>
        <div className='BarSuperior'>
            <div>
                <div className='Logo'>
                    <img src="https://www.catalogodelasalud.com/backend/imagenes/5447508/logo-impormedical.jpg" alt="Logo" />
                </div>
                <div className='BarraBusqueda'>
                    <input className='Lupa' type={"text"} placeholder="¿QUÉ ESTÁS BUSCANDO? ESCRÍBELO AQUÍ..."></input>
                    
                </div>
                <div className='Opciones'>
                    <div className='MisPedidos'>
                        <label>MIS PEDIDOS</label>
                    </div>
                        
                    <div className='Ingresa'>
                        <div>HOLA ALIAD@</div>
                        <div className='btn-ingresar'>INGRESA</div>
                    </div>

                    <div className='Carrito'>
                        <h1><BsCart3/></h1>
                        CARRITO
                    </div>
                </div>
            </div>
        </div>
        <div className='BarInferior'>
            <div className='container'>
                <div className='Menu'>
                    <HiMenu/>
                </div>
                <div className='Opciones'>
                    <div>
                        <a href="/"><strong><MdAccessibleForward/></strong>MOVILIDAD</a>
                    </div>
                    <div>
                        <a href="/"><strong><RiHeartAddLine/></strong>CUIDADO EN EL HOGAR</a>
                    </div>
                    <div>
                        <a href="/"><strong><MdOutlinePersonalInjury/></strong>PROFESIONALES DE LA SALUD</a>
                    </div>
                    <div>
                        <a href="/"><strong><MdOutlineCleanHands/></strong>TAPABOCAS Y DESINFECCIÓN</a>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}
