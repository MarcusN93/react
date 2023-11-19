import '../../App.css'
import React from 'react'

import img_logotype from '../../assets/images/Logo.svg'
import Button from '../Generics/Button'

const NavSection = () => {
  return (
    <section className="nav-section">
            <div className="container">
                <a href="index.html"><img src={img_logotype} alt="crito logotype"/></a>
                <nav>
                    <div className="first-row">
                        <div>
                            <span><i className="fa-regular fa-phone-volume"></i>+46 (8) 121 470 50</span>
                            <span><i className="fa-regular fa-envelope"></i>info@crito.com</span>
                            <span><i className="fa-sharp fa-regular fa-location-dot"></i>Sveavägen 31, 111 34 STOCKHOLM</span>
                        </div>
                        <div className="social-media">
                            <a href="https://facebook.com" target="blank"><i className="fa-brands fa-facebook"></i></a>
                            <a href="https://twitter.com" target="blank"><i className="fa-brands fa-square-x-twitter"></i></a>
                            <a href="https://instagram.com" target="blank"><i className="fa-brands fa-instagram"></i></a>
                            <a href="https://linkedin.com" target="blank"><i className="fa-brands fa-linkedin"></i></a>
                        </div>
                    </div>
                    <div className="second-row">
                        <div className="navbar">
                            <a href="index.html">Home</a>
                            <a href="#">Services</a>
                            <a href="#">News</a>
                            <a href="contacts.html">Contact</a>
                        </div>
                        <Button type="" title="Login" url="/login" />
                    </div>
                </nav>
            </div>
        </section>
  )
}

export default NavSection