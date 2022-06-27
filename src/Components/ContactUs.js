import React from 'react'
import ContactFooter from './ContactFooter'
import Navbar from './Navbar'

export default function ContactUs() {
  return (
    <>
      <div className="contact-container">
        <Navbar/>
        <div className="contact-page">
          <h1>Thank You For Contacting Us!</h1>
          <h2>You will get an email within 5 mins</h2>
        </div>
        <ContactFooter/>
      </div>
    </>
  )
}
