import React from 'react'
import './App.css'
import {Layout, Header, Navigation, Drawer,Content} from 'react-mdl'
import {Container, Row, Col, Image,} from 'react-bootstrap'


class Devsession extends React.Component {
  render() {
    return(
     <div className="Devsession">
  
  <div style={{height: '300px', position: 'relative'}}>
    <Layout style={{background: 'url(https://akm-img-a-in.tosshub.com/indiatoday/images/story/201706/web-development-647_062317054646.jpg) center / cover'}}>
        <Header transparent title="Bright.io" style={{color: 'white'}}>
            <Navigation>
                <a href="/portfolio">My Portfolio</a>
                <a href="/">About Me</a>
                <a href="/">Projects</a>
                <a href="/">Dev Session</a>
            </Navigation>
        </Header>
        <Drawer title="Bright.io" style={{color: 'white'}}>
            <Navigation>
                <a href="/">My Portfolio</a>
                <a href="/">About Me</a>
                <a href="/">Projects</a>
                <a href="/">Dev Session</a>
            </Navigation>
        </Drawer>
        <Content />
    </Layout>
</div>

        
        
        
        
        
<Container>
  <Row>
    <Col xs={6} md={4}>
      <Image src="https://www.python.org/static/opengraph-icon-200x200.png" thumbnail />
        <h5> Mr. Akindele Website</h5>
        

    </Col>
    <Col xs={6} md={4}>
      <Image src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTkUqH-rVHfX1SBRG4YFC-B_BabDdXqEYv0qKdmAmEnk_Op9a30" roundedCircle />
        <h5> Techbuddy Website </h5>
    </Col>
    <Col xs={6} md={4}>
      <Image src="https://3.bp.blogspot.com/-NLgOIL0vKJg/W0yrvqx8ZsI/AAAAAAAABfg/l7fFkNQf5S02YIanj4H9KKWiZJNmSlKigCLcBGAs/s1600/mongodb.png" rounded />
    </Col>
  </Row>
</Container>


 










    </div>
    );

  }
}
export default Devsession;