import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import React from 'react';
import './Header.css'

function Header() {
    return (
        <div>
            <header>
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="#home"><img src='https://demo.themefisher.com/cafedine/images/logo.png'></img></Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="m-auto ">
          <Nav.Link className='color-sec py-1'>HOME</Nav.Link>
          <Nav.Link className='color-sec py-1'>ABOUT</Nav.Link>
          <Nav.Link className='color-sec py-1'>RECIPES</Nav.Link>
          <Nav.Link className='color-sec py-1'> GALLERY</Nav.Link>
          <Nav.Link className='color-sec py-1'>RESERVATION</Nav.Link>
          <Nav.Link className='color-sec py-1'>BLOG</Nav.Link>
          <Nav.Link className='color-sec py-1'>CONTACT</Nav.Link>
          </Nav>
          <Nav>
            
      <Button variant="outline-danger" className='my-2 fw-semibold'>VISIT NOW</Button>{' '}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </header>
        </div>
    )
}

export default Header;