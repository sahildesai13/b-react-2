import { Container } from 'react-bootstrap'
import React from 'react'
import OwlCarousel from 'react-owl-carousel'
import 'owl.carousel/dist/assets/owl.carousel.css'
import 'owl.carousel/dist/assets/owl.theme.default.css'
import './Slider2.css'
function Slider2 () {
  return (
    <div className='Slider2 my-5 py-5'>
      <div className='SolutionTitle ProjectTitle'>
        <h5 className='fw-8'>TALKING ABOUT US</h5>
        <p className='pb-4 pt-2'>Happy Customers</p>
      </div>

      <Container>
        <OwlCarousel className='slider2 owl-theme' loop margin={10} items={1}>
          <div class='item Slider2Item'>
            <img src={require(`./Img/testimonial1.png`)} />
            <p className='px-5 mx-5 pb-3 pt-4'>
              They offer quality and fast service. It is a solution-oriented
              company that we have been happy to work with for a long time.
            </p>
            <h6 className='fw-bolder'>Sam | EmMachine</h6>
          </div>
          <div class='item Slider2Item'>
            <img src={require(`./Img/testimonial2.png`)} />
            <p className='px-5 mx-5 pb-3 pt-4'>
              They offer quality and fast service. It is a solution-oriented
              company that we have been happy to work with for a long time.
            </p>
            <h6 className='fw-bolder'>Sam | EmMachine</h6>
          </div>
          <div class='item Slider2Item'>
            <img src={require(`./Img/testimonial3.png`)} />
            <p className='px-5 mx-5 pb-3 pt-4'>
              They offer quality and fast service. It is a solution-oriented
              company that we have been happy to work with for a long time.
            </p>
            <h6 className='fw-bolder'>Sam | EmMachine</h6>
          </div>
          <div class='item Slider2Item'>
            <img src={require(`./Img/testimonial4.png`)} />
            <p className='px-5 mx-5 pb-3 pt-4'>
              They offer quality and fast service. It is a solution-oriented
              company that we have been happy to work with for a long time.
            </p>
            <h6 className='fw-bolder'>Sam | EmMachine</h6>
          </div>
          <div class='item Slider2Item'>
            <img src={require(`./Img/testimonial5.png`)} />
            <p className='px-5 mx-5 pb-3 pt-4'>
              They offer quality and fast service. It is a solution-oriented
              company that we have been happy to work with for a long time.
            </p>
            <h6 className='fw-bolder'>Sam | EmMachine</h6>
          </div>
        </OwlCarousel>
      </Container>
    </div>
  )
}
export default Slider2
