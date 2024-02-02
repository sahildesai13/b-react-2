import { Col, Container, Row } from 'react-bootstrap'
import './Awards.css'
function Awards () {
  return (
    <div>
      <div className='SolutionTitle AwardsTitle'>
        <h5 className='fw-8'>OUR AWARDS</h5>
        <p className='pb-4 pt-2'>
          We aim to offer the best to our customers in every new project. We are
          at your service with our competent experiences.
        </p>
      </div>
      <Container>
        <Row className='justify-content-center'>
          <Col className='CountCover pt-4' xs={5} md={4}>
            <img src={require(`./Img/client.png`)} width={'100px'} />
            <p className='fw-bolder my-3'>Happy clients</p>
            <h2 className='Count'>400</h2>
          </Col>
          <Col  className='CountCover pt-4' xs={5} md={4}>
            <img src={require(`./Img/project.png`)} width={'100px'} />
            <p className='fw-bolder my-3'>Successful Projects</p>
            <h2 className='Count'>520</h2>
          </Col>
          <Col  className='CountCover pt-4' xs={5} md={4}>
            <img src={require(`./Img/ongoingProject.png`)} width={'100px'} />
            <p className='fw-bolder my-3'>Ongoing Projects</p>
            <h2 className='Count'>250</h2>
          </Col>
          <Col  className='CountCover pt-4' xs={5} md={4}>
            <img src={require(`./Img/team-member.png`)} width={'100px'} />
            <p className='fw-bolder my-3'>Team Members</p>
            <h2 className='Count'>300</h2>
          </Col>
          <Col  className='CountCover pt-4' xs={5} md={4}>
            <img src={require(`./Img/awards.png`)} width={'100px'} />
            <p className='fw-bolder my-3'>Awards Winning</p>
            <h2 className='Count'>800</h2>
          </Col>
        </Row>
      </Container>
    </div>
  )
}
export default Awards
