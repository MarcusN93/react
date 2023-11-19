import React from 'react'
import '../../App.css'

import img_paperz from '../../assets/images/paperz-image.svg'
import img_dorfus from '../../assets/images/dorfus-image.svg'
import img_martino from '../../assets/images/martino-image.svg'
import img_square from '../../assets/images/square-image.svg'
import img_gobona from '../../assets/images/gobona-image.svg'


const Partners = () => {
  return (
    <section className="partners">
            <div className="container">
                <img src={img_paperz} alt="Paperz logga"/>
                <img src={img_dorfus} alt="Dorfus logga"/>
                <img src={img_martino} alt="Martino logga"/>
                <img src={img_square} alt="square logga"/>
                <img src={img_gobona} alt="Gobona logga"/>
            </div>
        </section>
  )
}

export default Partners