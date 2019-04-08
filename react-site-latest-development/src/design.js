import React from 'react'
import './App.css'
import {Navbar, Nav,Jumbotron,Button,NavDropdown, FormControl, Form, Figure} from 'react-bootstrap';


class Design extends React.Component {
  render() {
  	return (
   <div className="Design">



<Navbar bg="success " expand="lg" >
  <Navbar.Brand href="#home">Bright Blog</Navbar.Brand>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="mr-auto">
      <Nav.Link href="#home" className="home">Home</Nav.Link>
      <Nav.Link href="/jumbox" className="dev">Dev Session</Nav.Link>
      <Nav.Link href="#link">Articles</Nav.Link>
      <Nav.Link href="/portfolio">Portfolio</Nav.Link>
      <Nav.Link href="#link">Designs</Nav.Link>
      <NavDropdown title="Latest News" id="basic-nav-dropdown">
        <NavDropdown.Item href="#action/3.1">Dev</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.2"></NavDropdown.Item>
        <NavDropdown.Item href="#action/3.3">Code Review</NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item href="#action/3.4"></NavDropdown.Item>
      </NavDropdown>
    </Nav>
    <Form inline>
      <FormControl type="text" placeholder="Search" className="mr-sm-2" />
      <Button variant="outline-success">Search</Button>
    </Form>
  </Navbar.Collapse>
</Navbar>


<Jumbotron className="jumbotron">
  <h1>John Doe</h1>
  <p className="para">Full Stack Developer HTML 5, CSS3, Javascript: (React, Backbone.js, Vue, Angular), Bootstrap, PHP:(Laravel), MongoDB, Node.js, Mysql</p>
  <p>
    <Button variant="success">Learn more</Button>
  </p>
</Jumbotron>


<div className="hon">
<Figure>
  <Figure.Image
    width={270}
    height={20}
    alt="170x180"
    src="https://cdn3.iconfinder.com/data/icons/avatars-15/64/_Ninja-2-512.png"
  />
  <Figure.Caption>
    John Doe
  </Figure.Caption>
</Figure>
<Figure>
  <Figure.Image
    width={270}
    height={20}
    alt="170x180"
    src="https://cdn3.iconfinder.com/data/icons/avatars-15/64/_Ninja-2-512.png"
  />
  <Figure.Caption>
    John Doe
  </Figure.Caption>
</Figure>
<Figure>
  <Figure.Image
    width={270}
    height={20}
    alt="170x180"
    src="https://cdn3.iconfinder.com/data/icons/avatars-15/64/_Ninja-2-512.png"
  />
  <Figure.Caption>
    John Doe
  </Figure.Caption>
</Figure>
<Figure>
  <Figure.Image
    width={270}
    height={20}
    alt="170x180"
    src="https://cdn3.iconfinder.com/data/icons/avatars-15/64/_Ninja-2-512.png"
  />
  <Figure.Caption>
    John Doe
  </Figure.Caption>
</Figure>

</div>











 




    </div>
    );

  }
}
export default Design;


