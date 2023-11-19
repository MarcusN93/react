import React from 'react'

import '../../App.css'

const ServiceBox = ({title, description, url}) => {
  return (
    <div className="content-box">
        <div className="line"></div>
        <h3>{title}</h3>
        <p>{description}</p>
        <div className="buttons"><a className="btn-black" href={url}><i className="fa-light fa-arrow-right"></i></a></div>
    </div>
  )
}

export default ServiceBox