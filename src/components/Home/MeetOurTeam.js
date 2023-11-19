import React from 'react'
import '../../App.css'
import Button from '../Generics/Button'
import img_kristine from '../../assets/images/kristine-palmer.png'
import img_mark from '../../assets/images/mark-aubri.png'
import img_kimberly from '../../assets/images/kimberly-hansen.png'
import img_justin from '../../assets/images/justin-willoman.png'

const MeetOurTeam = () => {
  return (
    <section className="meet-our-team">   
            <div className="container">
                <div className="title-content">
                    <div className="section-title">
                        <p>Meet Our Team</p>
                        <h2>Experience Team Members</h2>
                    </div>
                    <div>                    
                        <Button type="" title="Browse Team" url="/team" />
                    </div>
                </div>
                <div className="content">
                    <div>
                        <img src={img_kristine} alt=""/>
                        <h3>Kristine Palmer</h3>
                        <p>Chef Operation Officer</p>
                    </div>
                    <div>
                        <img src={img_mark} alt=""/>
                        <h3>Mark Aubri</h3>
                        <p>Senior Consultant</p>
                    </div>
                    <div>
                        <img src={img_kimberly} alt=""/>
                        <h3>Kimberly Hansen</h3>
                        <p>Senior Consultant</p>
                    </div>
                    <div>
                        <img src={img_justin} alt=""/>
                        <h3>Justin Willoman</h3>
                        <p>Senior Tech Consultant</p>
                    </div>
                </div>
                <div className="dots">
                    <div className="dot"></div>
                    <span className="dot"></span>
                    <span className="dot"></span>
                    <span className="dot"></span>
                    <span className="dot"></span>
                </div>
            </div>
        </section>
  )
}

export default MeetOurTeam