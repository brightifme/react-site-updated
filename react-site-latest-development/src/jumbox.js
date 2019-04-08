import React from 'react'
import './App.css'
import {Nav, Navbar} from 'react-bootstrap';


class Jumbox extends React.Component {
  render() {
  	return (
  	 <div className="Jumbox">
  <Navbar bg="success" variant="light">
    <Navbar.Brand href="#home">Bright Blog</Navbar.Brand>
    <Nav className="mr-auto">
      <Nav.Link href="#home">Home</Nav.Link>
      <Nav.Link href="/jumbox">Dev Session</Nav.Link>
      <Nav.Link href="/portfolio">Portfolio</Nav.Link>
      <Nav.Link href="#pricing">About Me</Nav.Link>
      <Nav.Link href="#pricing">Contact</Nav.Link>
      
    </Nav>
  </Navbar>



 
    </div>
  	);
}
}
export default Jumbox;


