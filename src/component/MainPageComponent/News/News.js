import { Container, Row, Col } from 'react-bootstrap'
import './News.css'
function News () {
  return (
    <div>
      <div className='SolutionTitle ProjectTitle'>
        <h5 className='fw-8'>OUR PROJECTS</h5>
        <p className='pb-4 pt-2'>
          We offer our customers the latest innovations in high quality, easily
          manageable, efficient and sustainable technology.
        </p>
      </div>
      <Container>
        <Row className='gap-3'>
          <Col md>
            <div className='News'>
              <div className='newsImg m-4 mb-0'>
                <img src={require(`./Img/news1.png`)} width={'100%'} />
              </div>
              <div className='newsDtl m-4 mt-0'>
                <span className='fw-bold fs-6'>02.02.2023 - Web Design</span>
                <h5 className='fw-bolder'>Why should I make a website?</h5>
                <p className='p-2'>Nowadays, when all people want to buy a product or object, or to understand what that object is, they immediately ...</p>
                <button className='btn'>MORE</button>
              </div>
            </div>
          </Col>
          <Col md>
            <div className='News'>
              <div className='newsImg m-4 mb-0'>
                <img src={require(`./Img/news2.png`)} width={'100%'} />
              </div>
              <div className='newsDtl m-4 mt-0'>
                <span className='fw-bold fs-6'>02.02.2023 - Web Design</span>
                <h5 className='fw-bolder'>The effect of site speed on seo</h5>
                <p className='p-2'>Nowadays, when all people want to buy a product or object, or to understand what that object is, they immediately ...</p>
                <button className='btn'>MORE</button>
              </div>
            </div>
          </Col>
          <Col className='d-none d-lg-block'>
            <div className='News'>
              <div className='newsImg m-4 mb-0'>
                <img src={require(`./Img/news3.png`)} width={'100%'} />
              </div>
              <div className='newsDtl m-4 mt-0'>
                <span className='fw-bold fs-6'>02.02.2023 - Web Design</span>
                <h5 className='fw-bolder'>Web design advantages</h5>
                <p className='p-2'>Nowadays, when all people want to buy a product or object, or to understand what that object is, they immediately ...</p>
                <button className='btn'>MORE</button>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  )
}
export default News
