import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import TodoList from './components/todo-list'
import { Provider } from 'react-redux'
import store from './redux/store'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>React Todo List!</h1>
        <Provider store={store}>
          <BrowserRouter>
            <Switch>
              <Route path="/" component={TodoList}></Route>
            </Switch>
          </BrowserRouter>
        </Provider>
      </div>
    );
  }
}

export default App;
