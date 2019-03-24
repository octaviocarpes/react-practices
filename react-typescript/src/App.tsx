import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Navigation from './components/Navigation'
import NewRoute from './components/NewRoute'
import Home from './components/Home'
import Error from './components/Error'

import './App.css';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
        <Navigation />
        <Switch>
          <Route path="/" component={ Home } exact/>
          <Route path="/new" component={ NewRoute }/>
          <Route component={ Error }/>
        </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
