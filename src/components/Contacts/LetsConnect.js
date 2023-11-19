import React from 'react'
import img_backgroundLines from '../../assets/images/background-lines.svg'

const LetsConnect = () => {
  return (
    <section className="lets-connect">
            <img className="background-lines" src={img_backgroundLines} alt="wavy background lines"/>
            <div className="container">
                <div className="paragraphs">
                    <p>Home</p>
                    <p>Contact</p>
                </div>
                <div>
                    <h2>Let's Connect</h2>
                </div>
            </div>
        </section>
  )
}

export default LetsConnect