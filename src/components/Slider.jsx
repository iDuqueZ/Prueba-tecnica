import React from 'react'
import '../styles/Slider.css'
import {motion} from 'framer-motion'

export default class Slider extends React.Component {
    
    render(){
        var data = [
            {
                titulo: 'Seguridad en el baño',
                imagen: 'https://image.made-in-china.com/155f0j00mFcWiawnPpoA/Stainless-Steel-304-Handicap-Grab-Bars-Bathroom-Shower-Safety-Bars-Provide-Safety-Assist-Grab.jpg'
            },
            {
                titulo: 'Tapabocas',
                imagen: 'https://cdn.pixabay.com/photo/2020/07/16/09/14/man-5410293_960_720.jpg'
            },
            {
                titulo: 'Silla de ruedas',
                imagen: 'https://cdn.pixabay.com/photo/2016/08/15/16/12/wheelchair-1595794_960_720.jpg'
            },
            {
                titulo: 'Ayuda para la marcha',
                imagen: 'http://atenciogentgran.org/wp-content/uploads/2014/03/caminador-persona-gran.jpg'
            },
            {
                titulo: 'Seguridad en el baño',
                imagen: 'https://image.made-in-china.com/155f0j00mFcWiawnPpoA/Stainless-Steel-304-Handicap-Grab-Bars-Bathroom-Shower-Safety-Bars-Provide-Safety-Assist-Grab.jpg'
            },
            {
                titulo: 'Tapabocas',
                imagen: 'https://cdn.pixabay.com/photo/2020/07/16/09/14/man-5410293_960_720.jpg'
            },
        ]
        return (
            <motion.div className='SliderMaster'>
                <motion.div className='slider' drag='x' dragConstraints={{right:0, left:-500}}>
                {Array.from(data).map((datos)=>(
                    <motion.div className='card'>
                        
                        <div className='imagen'>
                            <img src={datos.imagen} alt="ilustración" />
                            <div className='capa'>
                                
                            </div>
                        </div>
                        <div className='texto'>
                            <h5>{datos.titulo}</h5>
                        </div>
                    </motion.div>
                ))}
                </motion.div>
                
            </motion.div>
          )
    }  
}
