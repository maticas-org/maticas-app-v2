import React, { useState } from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Navigation: React.FC = () => {
  const [show, setShow] = useState(true); // State to track the visibility of the Navbar
  const [lastScrollY, setLastScrollY] = useState(0); // State to keep track of the last scroll position

  const controlNavbar = () => {
    if (typeof window !== 'undefined') {
      // Check the difference between current scroll position and last scroll position
      if (window.scrollY > lastScrollY) { // If scrolled down, hide the navbar
        setShow(false);
      } else { // If scrolled up, show the navbar
        setShow(true);
      }
      // Update the last scroll position to current scroll position
      setLastScrollY(window.scrollY);
    }
  };

  
  return (
    <Navbar bg="light" expand="lg"
     style={{backgroundColor: 'rgba(255, 255, 255, 0.1)', transition: 'top 0.6s',
             top: show ? '0' : '-100px',
             visibility: show ? 'visible' : 'hidden', width: '100%', 
             height: window.innerHeight*0.075,
             minHeight: '50px'}}
     onScroll={controlNavbar}>

      <Container>
        <Navbar.Toggle aria-controls="basic-navbar-nav">
          <img src="./maticas-tech-logo.svg" alt="Toggle" style = {{height: window.innerHeight*0.05, zIndex: 1, verticalAlign: 'middle'}}/>
        </Navbar.Toggle>
        <Navbar.Collapse id="basic-navbar-nav" style={{ zIndex: 1 }}>
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/">Home</Nav.Link>
            <Nav.Link as={Link} to="/analytics">Analytics</Nav.Link>
            <Nav.Link as={Link} to="/login">Logout</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Navigation;
