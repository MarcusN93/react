import React from 'react'
import ServiceBox from './ServiceBox'
import '../../App.css'
import SectionTitle from './SectionTitle'
import Button from '../Generics/Button'
import img_backgroundLines from '../../assets/images/background-lines-services.svg'

const OurServices = () => {

    const services = [
        { title: "Business Advice", description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officiis in nam possimus.", url: "/services/businessadvice"},
        { title: "Startup Business", description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officiis in nam possimus.", url: "/services/startupbusiness"},
        { title: "Financial Advice", description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officiis in nam possimus.", url: "/services/financialadvice"},
        { title: "Risk Management", description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officiis in nam possimus.", url: "/services/riskmanagement"}
    ]





  return (
    <section className="services">
        <img className="background-lines" src={img_backgroundLines} alt=""/>
        <div className="container">
            <div className="section-title">
                <SectionTitle title="Our Services" description="We Provide The Best Consulting Services" />
            </div>
            <div className="section-content">

                {
                    services.map((service, index) => (
                        <ServiceBox key={index} title={service.title} description={service.description} url={service.url} />
                    ))
                }

            </div>
            <div className="center-content">
                <Button type="transparent" title="Browse Services" url="/services" />
            </div>
        </div>
    </section>
  )
}

export default OurServices