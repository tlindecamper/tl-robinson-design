import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';


import PortfolioContainer from './portfolio/portfolio-container';
import NavigationContainer from './navigation/navigation-container';

import Home from './pages/home';
import About from './pages/about';
import Contact from './pages/contact'

export default class App extends Component {
  render() {
    return (
      <div className='app'>
        <div>
          <NavigationContainer />   
          <h1>TL Robinson Design</h1>
          <PortfolioContainer />
        </div>
        <Router>
          <Switch>  
            {/* <Route exact path='/' component={Home}/>
            <Route path='/about' component={About}/>
            <Route path='/contact' component={Contact}/>             */}
          </Switch> 
        </Router>  
      </div>
    );
  }
}
