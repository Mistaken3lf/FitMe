import React from 'react';
import {Nav, Navbar, NavItem, MenuItem, NavDropdown} from 'react-bootstrap';

export default class CommonNavigation extends React.Component {
  render() {
    return (
      <Navbar fluid={true}>
        <Navbar.Header>
          <Navbar.Brand>
            <a href="/">FitMe</a>
          </Navbar.Brand>
          <Navbar.Toggle />
        </Navbar.Header>
        <Navbar.Collapse>
          <Nav>
            <NavItem eventKey={1} href="/">Home</NavItem>
          </Nav>
          <Nav pullRight>
            <NavDropdown eventKey={3} title="Login/SignUp" id="basic-nav-dropdown">
              <MenuItem eventKey={3.1} href="/login">Login</MenuItem>
              <MenuItem eventKey={3.2}>Sign Up</MenuItem>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}