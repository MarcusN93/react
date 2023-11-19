import React from 'react'

const Button = ({type, url, title  }) => {

  const getButtonClassName = () => {
    switch(type) {
      case 'transparent':
        return 'btn-transparent';
      case 'black':
        return 'btn-black';
      default:
        return 'btn-yellow';
    }
  }



  return (
    <a className={getButtonClassName()} href={url}>{title} <i className="fa-regular fa-arrow-up-right"></i></a>
  )
}

export default Button