import React from 'react'

import img_samanthabrown from '../../assets/images/samantha-brown.svg'
import img_zigzagline from '../../assets/images/zigzagline.png'

const AboutCompany = () => {
  return (
    <section className="about-company">
            <div className="container">
                <div className="parent">
                    <img className="child-1" src={img_samanthabrown} alt="picture of a woman"/>
                    <div className="child-2">
                        <div className="content">
                            <h5 className="name">Samantha Brown,</h5><p className="founder">Founder</p>
                        </div>
                        <p className="text">"Lorem ipsum dolor sit amet consectetur adipisicing elit."</p>
                    </div>
                    <img className="child-3" src={img_zigzagline} alt="image with a zigzag line"/>
                    
                </div>
                <div className="section-content">
                    <div className="section-title">
                        <p>About company</p>
                        <h2>We Are Business Consulting & Credit Repair Experts</h2>
                    </div>
                    <div className="section-text">
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam officiis quas assumenda esse obcaecati? Ex esse error voluptates iure vel totam eos.</p>
                        <p className="lorem">Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis esse quasi incidunt adipisci accusantium libero provident voluptate amet.</p>
                        <div className="buttons">
                            <a className="btn-black btn-learn-more" href="index.html">Learn More <i className="fa-regular fa-arrow-up-right"></i></a>
                            <a className="btn-transparent btn-intro-video" href="index.html"><i className="fa-sharp fa-solid fa-play"></i></a>
                            <p>Intro Video</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
  )
}

export default AboutCompany