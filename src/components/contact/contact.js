import React from 'react'
import SectionTitle from '../common/section-title/section-title'
import ContactForm from './contact-form'
import ContactInfo from './contact-info'

const Contact = () => {
  return (
    <section id="contact" className="section bg-light">
    <div className="container px-lg-5">

      <SectionTitle frontText="Get in Touch" backText="Contact"/>


      <div className="row gy-5">
        <div className="col-md-4 col-xl-3 order-1 order-md-0 text-center text-md-start">
          <ContactInfo/>
        </div>
        <div className="col-md-8 col-xl-9 order-0 order-md-1">
          <ContactForm/>
        </div>
      </div>
    </div>
  </section>
  

  )
}

export default Contact