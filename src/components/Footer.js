import React from 'react'

import img_backgroundLines from '../assets/images/background-lines-footer.svg'
import img_logotype from '../assets/images/logo-white.svg'
import FooterBottom from './FooterBottom'

const Footer = () => {
  return (
    <section className="footer">
        <img className="background-lines" src={img_backgroundLines} alt="wavy lines"/>
        <div className="container">
            <div className="footer-content">
                <div className="logo">
                    <img src={img_logotype} alt="crito logotype"/>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat obcaecati voluptas voluptates! Voluptates laborum nam ratione minus necessitatibus, iure praesentium.</p>
                </div>
                <div>
                    <nav>
                        <h3>Company</h3>
                        <a href="#">About</a>
                        <a href="#">Features</a>
                        <a href="#">Works</a>
                        <a href="#">Career</a>
                    </nav>
                </div>
                <div>
                    <nav>
                        <h3>Help</h3>
                        <a href="#">Customer Support</a>
                        <a href="#">Delivery Details</a>
                        <a href="#">Terms & Conditions</a>
                        <a href="#">Privacy Policy</a>
                    </nav>
                </div>
                <div>
                    <nav>
                        <h3>Resources</h3>
                        <a href="#">Free eBooks</a>
                        <a href="#">Development Tutorials</a>
                        <a href="#">How to - blog</a>
                        <a href="#">Youtube Playlist</a>
                    </nav>
                </div>
                <div>
                    <nav>
                        <h3>Link</h3>
                        <a href="#">Free eBooks</a>
                        <a href="#">Development Tutorials</a>
                        <a href="#">How to - Blog</a>
                        <a href="#">Youtube Playlist</a>
                    </nav>
                </div>
            </div>
        </div>
        <FooterBottom />
    </section>
  )
}

export default Footer