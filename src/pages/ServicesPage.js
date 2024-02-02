import React from 'react'
import { Link } from 'react-router-dom'
import OurSolution from '../component/MainPageComponent/OurSolution/OurSolution'
import Customer from '../component/MainPageComponent/Customers/Customer'

function ServicesPage () {
  return (
    <div className='py-5'>
      <div className='AboutPageTitle'>
        <h2 className='fw-bold'>Services</h2>
        <p>
          <Link to='/' className='linkItem'>
            Home
          </Link>{' '}
          /{' '}
          <Link to='/ServicesPage' className='linkItem'>
            {' '}
            Services
          </Link>
        </p>
      </div>
      <OurSolution></OurSolution>
      <Customer></Customer>
    </div>
  )
}
export default ServicesPage
