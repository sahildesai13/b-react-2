import React from 'react'
import { Link } from 'react-router-dom'
import ContactUs from '../component/MainPageComponent/ContactUs/ContactUs'

function ContactPage () {
  return (
    <div className='py-5'>
      <div className='AboutPageTitle'>
        <h2 className='fw-bold'>Contacts</h2>
        <p>
          <Link to='/' className='linkItem'>
            Home
          </Link>{' '}
          /{' '}
          <Link to='/ContactPage' className='linkItem'>
            {' '}
            Contacts
          </Link>
        </p>
      </div>
      <ContactUs></ContactUs>
    </div>
  )
}
export default ContactPage
