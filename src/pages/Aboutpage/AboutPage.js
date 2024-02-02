import React from 'react'
import './AboutPage.css'
import { Link } from 'react-router-dom'
import MegaAbout from '../../component/MainPageComponent/MegaAbout/MegaAbout'
import Awards from '../../component/MainPageComponent/OurAwards/Awards'
import Customer from '../../component/MainPageComponent/Customers/Customer'
import Slider2 from '../../component/MainPageComponent/Slider2/Slider2'
function AboutPage () {
  return (
    <div className='py-5'>
      <div className='AboutPageTitle'>
        <h2 className='fw-bold'>About Us</h2>
        <p>
          <Link to='/' className='linkItem'>Home</Link> / <Link to='/AboutPage' className='linkItem'> About Us</Link>
        </p>
      </div>
      <MegaAbout></MegaAbout>
      <Awards></Awards>
      <Customer></Customer>
      <Slider2></Slider2>
    </div>
  )
}
export default AboutPage
