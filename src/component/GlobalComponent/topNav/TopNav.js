import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import './TopNav.css'
import { Col } from 'react-bootstrap'
import React from 'react'
import { Link } from 'react-router-dom'

function TopNav () {
  return (
    <Navbar expand='lg' className='px-5 py-5 align-items-center text-bg-light'>
      <Container fluid>
        <Navbar.Brand href='#home' id='MainLogo'>
          <img src={require(`./img/logo.png`)} />
        </Navbar.Brand>
        <Col lg={5} className='text-start'>
          <span className='NavContact fw-bolder ps-5'>+91 9737834842</span>
        </Col>
        <Navbar.Toggle aria-controls='basic-navbar-nav' />
        <Navbar.Collapse id='basic-navbar-nav' width={'100%'}>
          <Nav className='me-auto TopNav NavResponsiv fw-bolder'>
            <Nav.Link as={Link} to='/'>
              Home
            </Nav.Link>
            <Nav.Link as={Link} to='/AboutPage'>
              About Us
            </Nav.Link>
            <Nav.Link as={Link} to='/ServicesPage'>
              Services
            </Nav.Link>
            <Nav.Link as={Link} to='/ProjectsPage'>
            Projects
            </Nav.Link>
            <Nav.Link as={Link} to='/BlogPage'>
            Blog
            </Nav.Link>
            <Nav.Link as={Link} to='/ContactPage'>
            Contact
            </Nav.Link>
            {/* <Nav.Link href='#Projects'>Projects</Nav.Link>
            <Nav.Link href='#Blog'>Blog</Nav.Link>
            <Nav.Link href='#Contact'>Contact</Nav.Link> */}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default TopNav
