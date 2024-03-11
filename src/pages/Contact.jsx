import React from 'react'
import { Button, Input , ContactDetails, ContactForm} from '../components'

function Contact() {
  return (
    <div>
      <div className="mx-auto mt-20 flex w-11/12 max-w-maxContent flex-col justify-between gap-10  lg:flex-row">

        {/* Contact Form */}
        <div className="lg:w-[60%]">
          <ContactForm />
        </div>
        {/* Contact Details */}
        <div className="lg:w-[40%]">
          <ContactDetails />
        </div>
      </div>
      
    </div>

  )
}

export default Contact