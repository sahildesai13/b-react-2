import { Col, Container, Row } from 'react-bootstrap'
import './Footer.css'
import { FaFacebookF, FaInstagram, FaTwitter,FaLinkedinIn,FaRegCopyright  } from 'react-icons/fa'

function Footer () {
  return (
    <footer className='pt-5'>
      <Container fluid>
        <Row className='align-items-start'>
          <Col md={4} className='py-4'>
            <h3 className='fw-8 '>CONTACT</h3>
            <div className='contactDtl'>
              <div className='fs-6 '>
                <span className='fw-bolder fs-6'>PHONE :</span>+91 9737834842
              </div>
              <div className='fs-6 '>
                <span className='fw-bolder fs-6'>EMAIL :</span>test@gmail.com
              </div>
              <div className='fs-6 '>
                <span className='fw-bolder fs-6'>ADDRESS :</span>Mota varachha,
                Surat.
              </div>
            </div>
          </Col>
          <Col md={4} className='py-4'>
            <h3 className='fw-8 '>CONTACT</h3>
            <div className='contactDtl d-flex flex-wrap justify-content-center'>
              <a href=''>HOME PAGE</a>
              <a href=''>ABOUT US</a>
              <a href=''>SERVICES</a>
              <a href=''>PROJECTS</a>
              <a href=''>BLOG</a>
              <a href=''>CONTACT</a>
            </div>
          </Col>
          <Col md={4} className='py-4'>
            <h3 className='fw-8 social'>SOCIAL MEDIA</h3>

            <span className='footerIcon'>
              <FaFacebookF />
            </span>
            <span className='footerIcon'>
              <FaInstagram />
            </span>
            <span className='footerIcon'>
              <FaTwitter />
            </span>
            <span className='footerIcon'>
              <FaLinkedinIn />
            </span>
          </Col>
        </Row>
      </Container>
      <Container fluid >
          <div className='CopyRight text-start py-3 ps-3 mt-3'>
            <p><FaRegCopyright /> 2023 - Mega Click.</p>
          </div>
      </Container>
    </footer>
  )
}
export default Footer
