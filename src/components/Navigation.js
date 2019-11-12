import React from 'react';
import { Route } from 'react-router-dom';
import { Link } from 'react-router-dom';
import Home from './Home';
import Contact from './Contact';
import About from './About';

const Navigation = () => {
  return (
    <div>

      <Route exact path='/' component={Home} />
      <Route path='/About' component={About} />
      <Route path='/Contact' component={Contact} />

      <div className="App">
        <h1>React Router Mini</h1>
        <div>
          <Link to = '/' >Home</Link>
        </div>
        <div>
          <Link to = '/about' >About</Link>
        </div>
        <div>
          <Link to = '/contact' >Contact</Link>
        </div>
      </div>
    </div>
  );
};

export default Navigation;
