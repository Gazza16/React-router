import React from 'react'
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch
} from 'react-router-dom'

import NoMatch from './NoMatch';
import Home from './Home';
import About from './About';
import Topics from './Topics';
import Contact from './Contact';

const BasicExample = () => (
  <Router>
    <div>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/topics">Topics</Link></li>
        <li><Link to="/contact">Contact</Link></li>
      </ul>

      <hr/>
      <Switch>
      <Route exact path="/" component={Home}/>
      <Route path="/about" component={About}/>
      <Route path="/topics" component={Topics}/>
      <Route path="/contact" component={Contact}/>
      <Route component={NoMatch} />
      </Switch>
    </div>
  </Router>
)

export default BasicExample;