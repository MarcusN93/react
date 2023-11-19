import React from 'react'

import img_excellence from '../../assets/images/process-excellence.png'
import img_planning from '../../assets/images/strategic-planning.png'
import img_experienceDesign from '../../assets/images/experience-design.png'
import img_artificialIntelligence from '../../assets/images/artificial-intelligence.png'
import img_womenDiscussing from '../../assets/images/women-discussing.svg'

const ChooseUs = () => {
  return (
    <section className="choose-us">
            <div className="child-2"></div>
            <div className="container">
                <div className="section-content">
                    <div className="section-title">
                        <p>Why Choose Us</p>
                        <h2>Why We Are The Best Business Consulting Agency</h2>
                    </div>
                    <div className="content-box">
                        <img src={img_excellence} alt="thumbs up image"/>
                        <div className="text-content">
                            <h5>Process Excellence</h5>
                            <p>Lorem, ipsum dolor sit amet consectetur.</p>
                        </div>
                    </div>
                    <div className="content-box">
                        <img src={img_planning} alt="diamond shape image"/>
                        <div className="text-content">
                            <h5>Strategic Planning</h5>
                            <p>Lorem, ipsum dolor sit amet consectetur.</p>
                        </div>
                    </div>
                    <div className="content-box">
                        <img src={img_experienceDesign} alt="a small image for experience design"/>
                        <div className="text-content">
                            <h5>Experience Design</h5>
                            <p>Lorem, ipsum dolor sit amet consectetur.</p>
                        </div>
                    </div>
                    <div className="content-box">
                        <img src={img_artificialIntelligence} alt="head with a cog inside"/>
                        <div className="text-content">
                            <h5>Artificial Intelligence</h5>
                            <p>Lorem, ipsum dolor sit amet consectetur.</p>
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <img className="parent" src={img_womenDiscussing} alt="two women discussing work"/>
            </div>
        </section>
  )
}

export default ChooseUs