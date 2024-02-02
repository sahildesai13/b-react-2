import { Container } from 'react-bootstrap'
import './Customer.css'
function Customer () {
  return (
    <div className='customer my-5 pt-5'>
      <div className='SolutionTitle CustomerTitle'>
        <h5 className='fw-8'>OUR CUSTOMERS WHO MAKE US</h5>
        <p className='pb-4 pt-2'>
          We work day and night for maximum efficiency. We bring out the best
          for you. We provide 24 hours support.
        </p>
      </div>
      <Container className='px-5 mx-5'>
        <div className='flexBox mx-5 px-5 justify-content-center align-items-center'>
          <div className='FlexItems'>
            <img src={require(`./Img/client1.png`)} className='flexImg' />
          </div>
          <div className='FlexItems'>
            <img src={require(`./Img/client2.png`)} className='flexImg' />
          </div>
          <div className='FlexItems'>
            <img src={require(`./Img/client3.png`)} className='flexImg' />
          </div>
          <div className='FlexItems d-none d-lg-block'>
            <img src={require(`./Img/client4.png`)} className='flexImg' />
          </div>
          <div className='FlexItems d-none d-lg-block'>
            <img src={require(`./Img/client5.png`)} className='flexImg' />
          </div>
          <div className='FlexItems'>
            <img src={require(`./Img/client6.png`)} className='flexImg' />
          </div>
          <div className='FlexItems'>
            <img src={require(`./Img/client7.png`)} className='flexImg' />
          </div>
          <div className='FlexItems'>
            <img src={require(`./Img/client8.png`)} className='flexImg' />
          </div>
          <div className='FlexItems'>
            <img src={require(`./Img/client9.png`)} className='flexImg' />
          </div>
          <div className='FlexItems'>
            <img src={require(`./Img/client10.png`)} className='flexImg' />
          </div>
        </div>
      </Container>
    </div>
  )
}
export default Customer
