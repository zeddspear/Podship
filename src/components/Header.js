import React from 'react';
import { Link } from 'react-router-dom';
import { Nav, Navbar, NavDropdown } from 'react-bootstrap';
import logo from '../Assets/Logo.png';

function Header() {
  return (
    <>
      <Navbar
        className="navbar px-4 px-sm-5 px-md-6 px-lg-8 px-xl-9 px-xxl-13 py-3"
        expand="md"
      >
        <Navbar.Brand>
          <Link to={'/'}>
            <img src={logo} alt="Logo" />
          </Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto ms-3 gap-3">
            <NavDropdown title="Creator Tools" id="basic-nav-dropdown">
              <NavDropdown.Item href="/starter-brief">
                StarterBrief
              </NavDropdown.Item>
              <NavDropdown.Item href="/transcription-email">
                TranscriptionEmail
              </NavDropdown.Item>
              <NavDropdown.Item href="/transcription-complete">
                TranscriptionComplete
              </NavDropdown.Item>
              <NavDropdown.Item href="/transcription-view">
                TranscriptionView
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="/pricing">Pricing</Nav.Link>
            <NavDropdown title="More" id="basic-nav-dropdown">
              <NavDropdown.Item href="/More/1">More Item 1</NavDropdown.Item>
              <NavDropdown.Item href="/More/2">More Item 2</NavDropdown.Item>
              <NavDropdown.Item href="/More/3">More Item 3</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="/More/4">More Item 4</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
        <div className="d-flex navbar-btns justify-content-center align-items-center gap-3">
          <button className="btn btn-primary">Sign In</button>
          <button className="btn btn-primary btn-green-border">Sign Up</button>
        </div>
      </Navbar>
    </>
  );
}

export default Header;
