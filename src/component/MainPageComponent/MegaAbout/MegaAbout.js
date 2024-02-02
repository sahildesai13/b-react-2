import { Col, Container, Row } from 'react-bootstrap'
import './MegaAbout.css';
import { FaArrowRightLong } from "react-icons/fa6";
function MegaAbout () {
  return (
    <div>
      <Container className='py-5 my-5'>
        <Row className='gap-5'>
          <Col lg>
            <img src={require(`./Img/aboutUs.png`)} width={'100%'} />
          </Col>
          <Col lg className='text-start'>
            <div className='MegaHead '>
              <h4 className='fw-8'>MEGA CLICK TECHNOLOGIES</h4>
              <h5 className='fw-7'>Your IT Consultant in the Digital World</h5>
            </div>
            <div className='MegaDtl'>
              <p className='MegaTxt pt-2 fs-6 '>
                We have set out with the vision of producing the most beneficial
                solution specific to the internal dynamics of the clients for IT
                Information Technologies activities by blending our long years
                of competent industry experience with the new generation working
                conditions. We aim to be your closest companion in your digital
                transformation by providing end-to-end solutions in security,
                business continuity and compliance processes.
              </p>
              <img src={require(`./Img/divider.jpg`)}></img>
              <h5 className='fw-7 py-3'>Your Dream Aesthetics</h5>
              <p className='MegaTxt fs-6 '>
                Mega Click is an IT company that has been providing computer
                technologies and corporate solutions since its establishment.
              </p>
              <p className='MegaTxt fs-6 '>
                We create a solution difference with our expert staff by
                targeting high customer satisfaction in order to respond to
                computer communication systems, cyber security solutions, IT
                technical support and installation demands.
              </p>
              <button className='btn d-flex align-items-center mt-5'>GET TO KNOW US <FaArrowRightLong /></button>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  )
}
export default MegaAbout
