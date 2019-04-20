import React from 'react'
import './App.css';
import {Jumbotron, Button, Figure, Container, Image,Row, Col} from 'react-bootstrap';
import {Layout,Header, Navigation, Drawer, Content} from 'react-mdl'


class App extends React.Component {

  render() {
    return(
    <div className="center">
 

  <div style={{height: '300px', position: 'relative'}}>
    <Layout style={{background: 'url(https://www.dqindia.com/wp-content/uploads/2017/01/salary-increase.png) center / cover'}}>
        <Header transparent title="Bright.io" style={{color: 'white'}}>
            <Navigation>
                <a href="/portfolio">My Portfolio</a>
                <a href="/">About Me</a>
                <a href="/">Projects</a>
                <a href="/devsession">Dev Session</a>
            </Navigation>
        </Header>
        <Drawer title="Bright.io" style={{color: 'white'}}>
            <Navigation>
                <a href="/portfolio">My Portfolio</a>
                <a href="/">About Me</a>
                <a href="/">Projects</a>
                <a href="/">Dev Session</a>
            </Navigation>
        </Drawer>
        <Content />
    </Layout>
</div>
  







  <Jumbotron className="jumbotron">
  <h1 className="codername">Bright Ibeme</h1>
  <p className="para">Full Stack Developer</p>
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
    src="https://2.bp.blogspot.com/-bGTsFydT5d8/WM-Gs0K0FTI/AAAAAAAAFpM/AGJ-DWijk785bQjk9FF99PpcySIrtWHIgCPcB/s1600/laravel_logo.png"
  />
  <Figure.Caption>
    
  </Figure.Caption>
</Figure>
<Figure>
  <Figure.Image
    width={270}
    height={20}
    alt="170x180"
    src="https://cdn-images-1.medium.com/max/1026/1*3SVfBkNZI2f-sspiq59xcw.png"
  />
  <Figure.Caption>
    
  </Figure.Caption>
</Figure>
<Figure>
  <Figure.Image
    width={270}
    height={20}
    alt="170x180"
    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSUhG8SyXoKPM5g_DGM9iZesBoRn_kgVBQ4JTHyc-PcOi6xamkR"
  />
  <Figure.Caption>
    
  </Figure.Caption>
</Figure>
<Figure>
  <Figure.Image
    width={270}
    height={20}
    alt="170x180"
    src="https://d3vqnn6a2e6zpa.cloudfront.net/de/wp-content/uploads/2012/07/Nodejs_logo_light.png"
  />
  <Figure.Caption>
    
  </Figure.Caption>
</Figure>

</div>
      
      
      
      
      




<Container>
  <Row>
    <Col xs={6} md={4}>
      <Image src="https://www.python.org/static/opengraph-icon-200x200.png" rounded />
    </Col>
    <Col xs={6} md={4}>
      <Image src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTkUqH-rVHfX1SBRG4YFC-B_BabDdXqEYv0qKdmAmEnk_Op9a30" roundedCircle />
    </Col>
    <Col xs={6} md={4}>
      <Image src="https://3.bp.blogspot.com/-NLgOIL0vKJg/W0yrvqx8ZsI/AAAAAAAABfg/l7fFkNQf5S02YIanj4H9KKWiZJNmSlKigCLcBGAs/s1600/mongodb.png" rounded />
    </Col>
  </Row>
</Container>





<Jumbotron fluid>
  <Container>
    <h1><span className="word">Designed by Bright</span></h1>
    <p>
      <span className="wordtwo">Copyright © 2019</span>
    </p>
  </Container>
</Jumbotron>
<span className="footer-segment">
<div> Copyright © 2019 Designed by John Doe</div>
<div>  </div>
</span>



















 
    </div>
    );

  }
}
export default App;