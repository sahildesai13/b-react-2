import React from 'react'
import { Link } from 'react-router-dom'
// import News from '../component/MainPageComponent/News/News'
import { Row,Container,Col } from 'react-bootstrap'

function BlogPage () {
  return (
    <div className='py-5'>
      <div className='AboutPageTitle'>
        <h2 className='fw-bold'>Blogs</h2>
        <p>
          <Link to='/' className='linkItem'>
            Home
          </Link>{' '}
          /{' '}
          <Link to='/BlogPage' className='linkItem'>
            {' '}
            Blogs
          </Link>
        </p>
      </div>
      {/* <News></News> */}
      <Container>
        <Row className='gap-3'>
          <Col md>
            <div className='News'>
              <div className='newsImg m-4 mb-0'>
                <img src={require(`../../component/MainPageComponent/News/Img/news1.png`)} width={'100%'} />
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
                <img src={require(`../../component/MainPageComponent/News/Img/news2.png`)} width={'100%'} />
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
                <img src={require(`../../component/MainPageComponent/News/Img/news3.png`)} width={'100%'} />
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
        <Row className='gap-3'>
          <Col md>
            <div className='News'>
              <div className='newsImg m-4 mb-0'>
                <img src={require(`./Img/news4.png`)} width={'100%'} />
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
              <img src={require(`./Img/news5.png`)} width={'100%'} />
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
              <img src={require(`./Img/news6.png`)} width={'100%'} />
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
export default BlogPage