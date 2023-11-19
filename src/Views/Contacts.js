import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import LetsConnect from '../components/Contacts/LetsConnect'
import ContactInformation from '../components/Contacts/ContactInformation'
import ContactForm from '../components/Contacts/ContactForm'
import Map from '../components/Contacts/Map'

const Contacts  = () => {
  return (
    <div className="wrapper">
        <Header />
        <main>
          <LetsConnect />
          <ContactInformation />
          <ContactForm />
          <Map />
        </main>
        <Footer />
    </div>
  )
}

export default Contacts