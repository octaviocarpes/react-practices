import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Navigation from './components/Navigation'
import Home from './views/Home'
import Pokemons from './views/Pokemons'
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
          <Route path="/pokemons" component={ Pokemons }/>
          <Route component={ Error }/>
        </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
