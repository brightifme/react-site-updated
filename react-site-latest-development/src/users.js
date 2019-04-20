import React from 'react'
import './App.css'
import {Layout, Header, Navigation, Drawer, Content} from 'react-mdl';


class Users extends React.Component {
  render() {
  	return (
   <div className="Users">
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











 
    </div>
    );

  }
}
export default Users;


