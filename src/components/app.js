import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';


import NavigationContainer from './navigation/navigation-container';

import Home from './pages/home';
import About from './pages/about';
import Contact from './pages/contact'

export default class App extends Component {
  render() {
    return (
      <div className='app'>
      <h1>TL Robinson Design</h1>
       
        <Router>
          <div>
          <NavigationContainer />
            <Switch>  
              <Route exact path='/' component={Home}/>
              <Route path='/about' component={About}/>
              <Route path='/contact' component={Contact}/>            
            </Switch> 
          </div>
          
        </Router>  
      </div>
    );
  }
}
