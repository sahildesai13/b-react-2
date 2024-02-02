import { Col, Container, Row, Card, Button } from 'react-bootstrap'
import './OurSolution.css'
function OurSolution () {
  return (
    <div className='py-5 my-3'>
      <Container>
        <div className='SolutionTitle'>
          <h5 className='fw-8'>OUR SOLUTIONS</h5>
          <p className='pb-4 pt-2'>
            We offer our customers the latest innovations in high quality,
            easily manageable, efficient and sustainable technology.
          </p>
        </div>
        {/* row 1 -------------------------------------------- */}
        <Row>
          {/* col 1----------------------------------------------- */}
          <Col className='d-flex justify-content-center' md>
            <Card style={{ width: '18rem' }} className='border-0 OurCard '>
              <Card.Img
                className='CoverImg ms-2 my-3 OurCardImg'
                src={require(`./Img/service1.png`)}
                width={'100px'}
              />
              <Card.Body className=' OurCardBody'>
                <Card.Title className='fw-bolder'>
                  IT Technical Support
                </Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
                <Button variant='primary' className='fs-6 px-4 py-2'>
                  Review
                </Button>
              </Card.Body>
            </Card>
          </Col>
          {/* col 2 ----------------------------------------------- */}
          <Col className='d-flex justify-content-center' md>
            <Card style={{ width: '18rem' }} className='border-0 OurCard'>
              <Card.Img
                className='CoverImg ms-2 my-3'
                src={require(`./Img/service2.png`)}
                width={'100px'}
              />
              <Card.Body className='OurCardBody '>
                <Card.Title className='fw-bolder'>
                Services Detail
                </Card.Title>
                <Card.Text>
                We ensure your security so that routine data flow is not interrupted and information and financial losses are not experienced
                </Card.Text>
                <Button variant='primary' className='fs-6 px-4 py-2'>
                  Review
                </Button>
              </Card.Body>
            </Card>
          </Col>
          {/* col 3----------------------------------------------- */}
          <Col className='d-flex justify-content-center' md>
            <Card style={{ width: '18rem' }} className='border-0 OurCard'>
              <Card.Img
                className='CoverImg ms-2 my-3'
                src={require(`./Img/service3.png`)}
                width={'100px'}
              />
              <Card.Body className='OurCardBody '>
                <Card.Title className='fw-bolder'>
                Web Development
                </Card.Title>
                <Card.Text>
                We design your requests in the most aesthetic way and present them to your service with up-to-date technologies.
                </Card.Text>
                <Button variant='primary' className='fs-6 px-4 py-2'>
                  Review
                </Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>

         {/* row 2 -------------------------------------------- */}
         <Row className='my-4 d-none d-lg-flex'>
          {/* col 4----------------------------------------------- */}
          <Col className='d-flex justify-content-center' md>
            <Card style={{ width: '18rem' }} className='border-0 OurCard'>
              <Card.Img
                className='CoverImg ms-2 my-3'
                src={require(`./Img/service4.png`)}
                width={'100px'}
              />
              <Card.Body className='OurCardBody '>
                <Card.Title className='fw-bolder'>
                Server Solutions
                </Card.Title>
                <Card.Text>
                We promise continuity, growth and performance to our users with new generation servers in our local cloud data centers.
                </Card.Text>
                <Button variant='primary' className='fs-6 px-4 py-2'>
                  Review
                </Button>
              </Card.Body>
            </Card>
          </Col>
          {/* col 5 ----------------------------------------------- */}
          <Col className='d-flex justify-content-center' md>
            <Card style={{ width: '18rem' }} className='border-0 OurCard'>
              <Card.Img
                className='CoverImg ms-2 my-3'
                src={require(`./Img/service5.png`)}
                width={'100px'}
              />
              <Card.Body className='OurCardBody '>
                <Card.Title className='fw-bolder'>
                Virtualization Solutions
                </Card.Title>
                <Card.Text>
                We virtualize your physical servers for lowering your costs and easy management. We provide maximum efficiency.
                </Card.Text>
                <Button variant='primary' className='fs-6 px-4 py-2'>
                  Review
                </Button>
              </Card.Body>
            </Card>
          </Col>
          {/* col 6 ----------------------------------------------- */}
          <Col className='d-flex justify-content-center' md>
            <Card style={{ width: '18rem' }} className='border-0 OurCard'>
              <Card.Img
                className='CoverImg ms-2 my-3'
                src={require(`./Img/service6.png`)}
                width={'100px'}
              />
              <Card.Body className='OurCardBody '>
                <Card.Title className='fw-bolder'>
                Data Backup Solutions
                </Card.Title>
                <Card.Text>
                We protect all your data. With backup systems, we secure all digital records of your business in the local cloud.
                </Card.Text>
                <Button variant='primary' className='fs-6 px-4 py-2'>
                  Review
                </Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  )
}
export default OurSolution
