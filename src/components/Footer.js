import React from 'react';
import {Nav} from 'react-bootstrap/';


export default function Footer() {
  return (

<Nav className="justify-content-end footer" activeKey="/home">
    <Nav.Item>
      <Nav.Link href="mailto:christolnai@gmail.com">Email</Nav.Link>
    </Nav.Item>
    <Nav.Item>
      <Nav.Link href="https://www.linkedin.com/in/christolnai/" target="_blank">LinkedIn</Nav.Link>
    </Nav.Item>
    <Nav.Item>
      <Nav.Link href="https://github.com/ctolnai" target="_blank">Github</Nav.Link>
    </Nav.Item>
  </Nav>

);
}