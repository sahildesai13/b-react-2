import { Container, Row, Col} from 'react-bootstrap'
import './OurProjects.css'
function OurProjects () {
  return (
    <div className='pt-5'>
      <div className='SolutionTitle ProjectTitle'>
        <h5 className='fw-8'>OUR PROJECTS</h5>
        <p className='pb-4 pt-2'>
          We offer our customers the latest innovations in high quality, easily
          manageable, efficient and sustainable technology.
        </p>
      </div>
      <Container className='mb-5'>
        <Row className='gap-5 justify-content-center'>
            <Col md={5} xl>
                <div className="ProjectDtl position-relative ">
                    <h5 className='position-absolute top-0 text-light p-3 fw-bolder DtlTxt'>Cyber Security 1</h5>
                    <img src={require(`./Img/project1.png`)} width={'100%'} />
                    <button className='DtlBtn position-absolute bottom-0 start-0 px-3 text-bg-dark border-0 mb-3'>view</button>
                </div>
            </Col>
            <Col md={5} xl>
            <div className="ProjectDtl position-relative ">
                    <h5 className='position-absolute top-0 text-light p-3 fw-bolder DtlTxt'>IT Technical Support</h5>
                    <img src={require(`./Img/project2.png`)} width={'100%'} />
                    <button className='DtlBtn position-absolute bottom-0 start-0 px-3 text-bg-dark border-0 mb-3'>view</button>
                </div>
            </Col>
            <Col md={5} xl>
            <div className="ProjectDtl position-relative ">
                    <h5 className='position-absolute top-0 text-light p-3 fw-bolder DtlTxt'>Cyber Security 2</h5>
                    <img src={require(`./Img/project3.png`)} width={'100%'} />
                    <button className='DtlBtn position-absolute bottom-0 start-0 px-3 text-bg-dark border-0 mb-3'>view</button>
                </div>
            </Col>
        </Row>
        <button className='btn mt-4'>ALL PROJECTS</button>
      </Container>
    </div>
  )
}
export default OurProjects;
