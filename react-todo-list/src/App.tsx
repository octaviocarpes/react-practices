import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import './App.css';

import TodoList from './components/todo-list'

class App extends Component {
  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <Switch>
            <Route path="/" component={ TodoList }></Route>
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
