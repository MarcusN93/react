import '../App.css'
import React from 'react'
import { NavLink, Link } from 'react-router-dom'
import img_logotype from '../assets/images/Logo.svg'
import Button from './Generics/Button'


const Header = () => {
  return (
    <header>
        <section>
          <div className="container">
              <div className="logotype">
                  <Link to="/"><img src={img_logotype} alt="crito logotype"/></Link>
              </div>
              <div className="contactinformation-bar">
                  <div className="content-box"><i className="fa-regular fa-phone-volume"></i>+46 (8) 121 470 50</div>
                  <div className="content-box"><i className="fa-regular fa-envelope"></i>info@crito.com</div>
                  <div className="content-box last"><i className="fa-sharp fa-regular fa-location-dot"></i>Sveavägen 31, 111 34 STOCKHOLM</div>
              </div>
              <div className="socialmedia-bar">
                  <a href="https://facebook.com" target="blank"><i className="fa-brands fa-facebook"></i></a>
                  <a href="https://twitter.com" target="blank"><i className="fa-brands fa-square-x-twitter"></i></a>
                  <a href="https://instagram.com" target="blank"><i className="fa-brands fa-instagram"></i></a>
                  <a href="https://linkedin.com" target="blank"><i className="fa-brands fa-linkedin"></i></a>
              </div>
              <div className="menu">
                  <nav>
                      <NavLink to="/">Home</NavLink>
                      <NavLink to="/services">Services</NavLink>
                      <NavLink to="/news">News</NavLink>
                      <NavLink to="/contacts">Contacts</NavLink>
                  </nav>
                  <Button type="" title="Login" url="/login" />
              </div>
          </div>
        </section>
    </header>
  )
}

export default Header