import React from 'react'

import img_handshake from '../../assets/images/handshake.jpg'
import img_lightbulb from '../../assets/images/lightbulb.jpg'
import img_building from '../../assets/images/building.jpg'
import img_cube from '../../assets/images/cube.jpg'

const Features = () => {
  return (
    <section className="features">
            <div className="container">
                <div className="section-title">
                    <p>Features</p>
                    <h2>Our Accounting is trusted by thousand of companies</h2>
                    <a className="btn-yellow btn-learn-more" href="index.html">Learn More <i className="fa-regular fa-arrow-up-right"></i></a>
                </div>
                <div className="feature-content">
                    <div className="box-one">
                        <img src={img_handshake} alt="small handshake image"/>
                        <h3>Business Advice</h3>
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p> 
                    </div>
                    <div className="box-two">
                        <img src={img_lightbulb} alt="small lightbulb image"/>
                        <h3>Startup Business</h3>
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
                    </div>
                    <div className="box-three">
                        <img src={img_building} alt="small building image"/>
                        <h3>Financial Advice</h3>
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
                    </div>
                    <div className="box-four">
                        <img src={img_cube} alt="small cube image"/>
                        <h3>Risk Management</h3>
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
                    </div>

                </div>
            </div>

        </section>
  )
}

export default Features