import React from 'react'
import { Link } from 'react-router-dom'
import Customer from '../../component/MainPageComponent/Customers/Customer'
// import OurProjects from '../../component/MainPageComponent/OurProjects/OurProjects'
import './ProjectsPage.css';
import { Container, Row, Col, Tab, Nav } from 'react-bootstrap';

function ProjectsPage() {
  return (
    <div className='py-5'>
      <div className='AboutPageTitle'>
        <h2 className='fw-bold'>Projects</h2>
        <p>
          <Link to='/' className='linkItem'>
            Home
          </Link>{' '}
          /{' '}
          <Link to='/ProjectsPage' className='linkItem'>
            {' '}
            Projects
          </Link>
        </p>
      </div>
      {/* <OurProjects></OurProjects> */}
      <div className='SolutionTitle pt-5 mt-5'>
        <h5 className='fw-8'>YOU ARE VALUABLE TO US</h5>
        <p className='pb-4 pt-2'>
          We always try to implement our creative ideas at the highest level.
        </p>
      </div>
      <Container>
        <Tab.Container id="left-tabs-example" defaultActiveKey="first">
          <Row className='flex-column'>
            <Col >
              <Nav variant="pills" className='justify-content-center'>
                <Nav.Item>
                  <Nav.Link eventKey="first">IT Technical Support</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="second">Cyber Security</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="third">Web Development</Nav.Link>
                </Nav.Item>
              </Nav>
            </Col>
            <Col >
              <Tab.Content>
                <Tab.Pane eventKey="first" className='mt-4'>
                  <Row className='gap-2 justify-content-center'>
                    <Col md={5} xl={3}>
                      <div className="ProjectDtl position-relative ">
                        <h5 className='position-absolute top-0 text-light p-3 fw-bolder DtlTxt'>Cyber Security 1</h5>
                        <img src={require(`../../component/MainPageComponent/OurProjects/Img/project1.png`)} width={'100%'} />
                        <button className='DtlBtn position-absolute bottom-0 start-0 px-3 text-bg-dark border-0 mb-3'>view</button>
                      </div>
                    </Col>
                    <Col md={5} xl={3}>
                      <div className="ProjectDtl position-relative ">
                        <h5 className='position-absolute top-0 text-light p-3 fw-bolder DtlTxt'>IT Technical Support</h5>
                        <img src={require(`../../component/MainPageComponent/OurProjects/Img/project2.png`)} width={'100%'} />
                        <button className='DtlBtn position-absolute bottom-0 start-0 px-3 text-bg-dark border-0 mb-3'>view</button>
                      </div>
                    </Col>
                    <Col md={5} xl={3}>
                      <div className="ProjectDtl position-relative ">
                        <h5 className='position-absolute top-0 text-light p-3 fw-bolder DtlTxt'>Cyber Security 2</h5>
                        <img src={require(`../../component/MainPageComponent/OurProjects/Img/project3.png`)} width={'100%'} />
                        <button className='DtlBtn position-absolute bottom-0 start-0 px-3 text-bg-dark border-0 mb-3'>view</button>
                      </div>
                    </Col>
                  {/* </Row> */}
                  {/* <Row className='gap-2 justify-content-center mt-4'> */}
                    <Col md={5} xl={3}>
                      <div className="ProjectDtl position-relative ">
                        <h5 className='position-absolute top-0 text-light p-3 fw-bolder DtlTxt'>Cyber Security 1</h5>
                        <img src={require(`./Img/project5.png`)} width={'100%'} />
                        <button className='DtlBtn position-absolute bottom-0 start-0 px-3 text-bg-dark border-0 mb-3'>view</button>
                      </div>
                    </Col>
                    <Col md={5} xl={3}>
                      <div className="ProjectDtl position-relative ">
                        <h5 className='position-absolute top-0 text-light p-3 fw-bolder DtlTxt'>IT Technical Support</h5>
                        <img src={require(`./Img/project7.png`)} width={'100%'} />
                        <button className='DtlBtn position-absolute bottom-0 start-0 px-3 text-bg-dark border-0 mb-3'>view</button>
                      </div>
                    </Col>
                    <Col md={5} xl={3}>
                      <div className="ProjectDtl position-relative ">
                        <h5 className='position-absolute top-0 text-light p-3 fw-bolder DtlTxt'>Cyber Security 2</h5>
                        <img src={require(`./Img/project8.png`)} width={'100%'} />
                        <button className='DtlBtn position-absolute bottom-0 start-0 px-3 text-bg-dark border-0 mb-3'>view</button>
                      </div>
                    </Col>
                  </Row>
                </Tab.Pane>
                <Tab.Pane eventKey="second">
                  <Row className='gap-2 justify-content-center mt-4'>
                    <Col md={5} xl>
                      <div className="ProjectDtl position-relative ">
                        <h5 className='position-absolute top-0 text-light p-3 fw-bolder DtlTxt'>Cyber Security 1</h5>
                        <img src={require(`./Img/project5.png`)} width={'100%'} />
                        <button className='DtlBtn position-absolute bottom-0 start-0 px-3 text-bg-dark border-0 mb-3'>view</button>
                      </div>
                    </Col>
                    <Col md={5} xl>
                      <div className="ProjectDtl position-relative ">
                        <h5 className='position-absolute top-0 text-light p-3 fw-bolder DtlTxt'>IT Technical Support</h5>
                        <img src={require(`./Img/project7.png`)} width={'100%'} />
                        <button className='DtlBtn position-absolute bottom-0 start-0 px-3 text-bg-dark border-0 mb-3'>view</button>
                      </div>
                    </Col>
                    <Col md={5} xl>
                      <div className="ProjectDtl position-relative ">
                        <h5 className='position-absolute top-0 text-light p-3 fw-bolder DtlTxt'>Cyber Security 2</h5>
                        <img src={require(`./Img/project8.png`)} width={'100%'} />
                        <button className='DtlBtn position-absolute bottom-0 start-0 px-3 text-bg-dark border-0 mb-3'>view</button>
                      </div>
                    </Col>
                  </Row>
                </Tab.Pane>
                <Tab.Pane eventKey="third">
                  <Row className='gap-2 justify-content-center mt-4'>
                    <Col md={5} xl>
                      <div className="ProjectDtl position-relative ">
                        <h5 className='position-absolute top-0 text-light p-3 fw-bolder DtlTxt'>Cyber Security 1</h5>
                        <img src={require(`./Img/project5.png`)} width={'100%'} />
                        <button className='DtlBtn position-absolute bottom-0 start-0 px-3 text-bg-dark border-0 mb-3'>view</button>
                      </div>
                    </Col>
                    <Col md={5} xl>
                      <div className="ProjectDtl position-relative ">
                        <h5 className='position-absolute top-0 text-light p-3 fw-bolder DtlTxt'>IT Technical Support</h5>
                        <img src={require(`./Img/project7.png`)} width={'100%'} />
                        <button className='DtlBtn position-absolute bottom-0 start-0 px-3 text-bg-dark border-0 mb-3'>view</button>
                      </div>
                    </Col>
                    <Col md={5} xl>
                      <div className="ProjectDtl position-relative ">
                        <h5 className='position-absolute top-0 text-light p-3 fw-bolder DtlTxt'>Cyber Security 2</h5>
                        <img src={require(`./Img/project8.png`)} width={'100%'} />
                        <button className='DtlBtn position-absolute bottom-0 start-0 px-3 text-bg-dark border-0 mb-3'>view</button>
                      </div>
                    </Col>
                  </Row>
                </Tab.Pane>
              </Tab.Content>
            </Col>
          </Row>
        </Tab.Container>
      </Container>
      <Customer></Customer>
    </div>
  )
}
export default ProjectsPage