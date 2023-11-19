import React from 'react'

import img_visitUs from '../../assets/images/visit-us.png'
import img_callUs from '../../assets/images/call-us.png'
import img_emailUs from '../../assets/images/email-us.png'

const ContactInformation = () => {
  return (
    <section className="contact-information">
        <div className="container">
            <div className="content-box">
                <img src={img_visitUs} alt="location icon"/>
                <div>
                    <h5>Visit us</h5>
                    <p>Sveavägen 31</p>
                    <p>111 34 STOCKHOLM</p>
                </div>
            </div>
            <div className="content-box">
                <img src={img_callUs} alt="telephone icon"/>
                <div>
                    <h5>Call us</h5>
                    <p>+46 (8) 121 470 50</p>
                    <p>+46 (8) 121 470 51</p>
                </div>
            </div>
            <div className="content-box">
                <img src={img_emailUs} alt="email icon"/>
                <div>
                    <h5>Email us</h5>
                    <p>info@crito.com</p>
                    <p>support@crito.com</p>
                </div>
            </div>
        </div>
    </section>
  )
}

export default ContactInformation