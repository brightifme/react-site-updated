import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import { Route, BrowserRouter as Router } from 'react-router-dom'
import App from './App'
import Portfolio from './portfolio'
import Contact from './contact'
import Jumbotron from './jumbox';
import Users from './users'
import Design from './design';
import About from './about';
import Devsession from './devsession';
import Devsessionwriteup from './devsessionwriteup';
import 'react-mdl/extra/material.css';
import 'react-mdl/extra/material.js';

const routing = (
  <Router>
    <div>
     
      <Route exact path="/" component={App} />
      <Route path="/portfolio" component={Portfolio} />
      <Route path="/contact" component={Contact} />
      <Route path="/jumbox" component={Jumbotron}/>
      <Route path="/users" component={Users} />
      <Route path="/design" component={Design} />
      <Route path="/about" component={About} />
      <Route path="/devsession"component={Devsession} />
      <Route path="/devsessionwriteup" component={Devsessionwriteup}  />
    </div>


  </Router>
  
)

ReactDOM.render(routing, document.getElementById('root'))