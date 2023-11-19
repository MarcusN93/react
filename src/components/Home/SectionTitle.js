import React from 'react'
import '../../App.css'

const SectionTitle = ({title, description}) => {
  return (
    <>
        <p>{title}</p>
        <h2>{description}</h2>
    </>
  )
}

export default SectionTitle