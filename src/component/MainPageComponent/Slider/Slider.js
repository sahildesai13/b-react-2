import './Slider.css'
import React from 'react'
import OwlCarousel from 'react-owl-carousel'
import 'owl.carousel/dist/assets/owl.carousel.css'
import 'owl.carousel/dist/assets/owl.theme.default.css'
import { Container } from 'react-bootstrap'
function Slider () {
  return (
    <Container fluid className='SliderContainer'>
      <OwlCarousel
        className='owl-theme Slider1 animate__fadeInUp animate__animated '
        loop
        margin={0}
        nav
        items={1}
        autoplay={true}
        navText={['prev', 'next']}
      >
      {/* ---------------------- item tag start { Slide 1 }---------------------------- } */}
        <div class='item'>
        {/*------------- img -------------------------- */}
          <img src={require(`./img/slide1.jpg`)} />

        {/*------------- Content  -------------------------- */}
          <div className='SliderDtl d-flex justify-content-center align-items-start flex-column'>
            <div className='sliderTxt text-start ps-5 ms-5'>
              <h2 className='fs-1 fw-bolder lh-base Slider1Text'>
                Your global technology <br />
                business partner, It Solutions <br /> and consultancy serivce
              </h2>
            </div>
            <div className='SliderLink ps-5 ms-5 pt-5'>
              <a href='#More'>LEARN MORE</a>
            </div>
          </div>
        </div>
      {/* ---------------------- item tag End { Slide 1}---------------------------- } */}

        <div class='item'>
          <img src={require(`./img/slide2.jpg`)} />
          <div className='SliderDtl d-flex justify-content-center align-items-start flex-column'>
            <div className='sliderTxt text-start ps-5 ms-5'>
              <h2 className='fs-1 fw-bolder lh-base Slider1Text'>
                We protect your data so that <br />
                routine data flow is not <br /> interrupted
              </h2>
            </div>
            <div className='SliderLink ps-5 ms-5 pt-5'>
              <a href='#More'>LEARN MORE</a>
            </div>
          </div>
        </div>
        <div class='item'>
          <img src={require(`./img/slide3.jpg`)} />
          <div className='SliderDtl d-flex justify-content-center align-items-start flex-column'>
            <div className='sliderTxt text-start ps-5 ms-5'>
              <h2 className='fs-1 fw-bolder lh-base Slider1Text'>
                We provide service on<br /> network security and <br/>
                network technology</h2>
            </div>
            <div className='SliderLink ps-5 ms-5 pt-5'>
              <a href='#More'>LEARN MORE</a>
            </div>
          </div>
        </div>
        <div class='item'>
          <img src={require(`./img/slide4.jpg`)} />
          <div className='SliderDtl d-flex justify-content-center align-items-start flex-column'>
            <div className='sliderTxt text-start ps-5 ms-5'>
              <h2 className='fs-1 fw-bolder lh-base Slider1Text'>
                It is our job we solve IT<br />
                Service while you think <br /> business
              </h2>
            </div>
            <div className='SliderLink ps-5 ms-5 pt-5'>
              <a href='#More'>LEARN MORE</a>
            </div>
          </div>
        </div>
      </OwlCarousel>
    </Container>
  )
}
export default Slider
