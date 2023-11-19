import '../../App.css'
import Button from '../Generics/Button'
import React from 'react'

import img_showcase from '../../assets/images/showcase-image.svg'
import img_backgroundlines from '../../assets/images/background-lines.svg'


const ShowcaseSection = () => {
  return (
    <section className="showcase">
            <img className="background-lines" src={img_backgroundlines} alt=""/>
            <div className="container">
                <div className="content">
                    <h1>We Provide The Best Business Solutions</h1>
                    <p>Establish your vision and value proposition and turn them into testable prototypes</p>
                    <Button type="" title="Get Consulting" url="/services/get-consulting" />
                    <Button type="transparent" title="Learn More" url="/services/consulting" />
                </div>
                <img src={img_showcase} alt="showcase image of a man in a suit with a tablet"/>
            </div>
    </section>
  )
}

export default ShowcaseSection