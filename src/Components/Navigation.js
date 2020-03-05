import React, { Component } from 'react';
import {Navbar,Nav} from 'react-bootstrap'

export default class Navigation extends Component {
  render() {
    return (
      <Navbar bg="dark" expand="lg">
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link href="/" className="d-inline-flex p-2 bg-dark text-white">Home</Nav.Link>
          <Nav.Link href="/Department" className="d-inline-flex p-2 bg-dark text-white">Department</Nav.Link>
          <Nav.Link href="/Employee" className="d-inline-flex p-2 bg-dark text-white">Employees</Nav.Link>
       </Nav>
      </Navbar.Collapse>
    </Navbar>
    )
  }
}
