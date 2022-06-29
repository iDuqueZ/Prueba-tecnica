import React from 'react'
import Anuncios from './Anuncios'
import Banner from './Banner'
import Catalogo from './Catalogo'
import Coleccion from './Coleccion'
import Grid from './Grid'
import NavBar from './NavBar'
import Slider from './Slider'

export default function Home() {
  return (
    <div>
        {/* BARRA DE NAVEGACIÓN */}
        <header>
            <NavBar/>
        </header>

        {/* BANNER */}
        <section>
          <Banner/>
        </section>

        {/* SLIDER HORIZONTAL */}
        <section>
          <Slider/>
        </section>

        <section>
          <Coleccion/>
        </section>

        <section>
          <Grid/>
        </section>

        <section>
          <Catalogo/>
        </section>

        <section style={{marginTop: '400px'}}>
          <Anuncios/>
        </section>
    </div>
  )
}
