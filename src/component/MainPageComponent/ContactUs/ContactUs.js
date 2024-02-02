import { Col, Container, Row } from 'react-bootstrap'
import { CiHeadphones, CiMap } from 'react-icons/ci'
import { PiTelegramLogoThin } from 'react-icons/pi'
import './ContactUs.css'
function ContactUs () {
  return (
    <div>
      <div className='ContactPart'>
        <div className='mapLink'>
          <iframe
            width={'100%'}
            height='402'
            frameborder='0'
            id='gmap_canvas'
            src='https://maps.google.com/maps?width=1920&amp;height=402&amp;hl=en&amp;q=70,%20yamuna%20darshan,%20society%20surat+(Desai%20company)&amp;t=&amp;z=13&amp;ie=UTF8&amp;iwloc=B&amp;output=embed'
          ></iframe>
          <script
            type='text/javascript'
            src='https://embedmaps.com/google-maps-authorization/script.js?id=bce3d551db32d73a1149470ddd7c5f487f55ab43'
          ></script>
        </div>
        <Container>
          <div className='ContectInfo py-5 mt-5'>
            <Row className='gap-3'>
              <Col sm>
                <div className='contactPart p-2'>
                  <div className='contactLogo'>
                    <CiHeadphones />
                  </div>
                  <h5 className='fw-bold'>CUSTOMER SERVICES</h5>
                  <p>+91 9737834842</p>
                </div>
              </Col>
              <Col sm>
                <div className='contactPart p-2'>
                  <div className='contactLogo'>
                    <PiTelegramLogoThin />
                  </div>
                  <h5 className='fw-bold'>MAIL ADDRESS</h5>
                  <p>test@gmail.com</p>
                </div>
              </Col>
              <Col sm>
                <div className='contactPart p-2'>
                  <div className='contactLogo'>
                    <CiMap />
                  </div>
                  <h5 className='fw-bold'>OFFICE</h5>
                  <p>New jersy, USA</p>
                </div>
              </Col>
            </Row>
          </div>
          <div className='contactUs text-start'>
            <Row className='gap-5'>
              <Col lg>
                <div className='ContactForm'>
                  <h5 className='fw-8 py-3'>CONTACT FORM</h5>
                  <input
                    type='text'
                    placeholder='Full Name'
                    className='py-3 my-2 px-5'
                  />
                  <input
                    type='email'
                    placeholder='Email Address'
                    className='py-3 my-2 px-5'
                  />
                  <input
                    type='number'
                    placeholder='Phone Number'
                    className='py-3 my-2 px-5'
                  />
                  <textarea
                    placeholder='Your Message'
                    className='py-3 my-2 px-5'
                  ></textarea>
                  <button className='btn'>SEND</button>
                </div>
              </Col>
              <Col lg>
                <div className='ContactDtl'>
                  <h5 className='fw-8 py-3'>KNOW US?</h5>
                  <p>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s, when an unknown
                    printer took a galley of type and scrambled it to make a
                    type specimen book.
                  </p>
                  <ul>
                    <li>Think for the start of the project.</li>
                    <li>Get to work to shape the main design.</li>
                    <li>Configure the HTML and CSS framework.</li>
                    <li>Continue with the SaSS BEM method.</li>
                    <li>Code your project to be improved.</li>
                  </ul>
                </div>
              </Col>
            </Row>
          </div>
        </Container>
      </div>
    </div>
  )
}
export default ContactUs
