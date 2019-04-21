import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Navbar from './components/navbar'
import Home from './views/home'
import Films from './views/films'
import People from './views/people'
import Planets from './views/planets'
import Starships from './views/starships'
import history from './utils/history'

class App extends Component {
  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <Navbar history={history}></Navbar>
          <Switch>
            <Route exact path="/" component={Home}></Route>
            <Route exact path="/films" component={Films}></Route>
            <Route exact path="/people" component={People}></Route>
            <Route exact path="/planets" component={Planets}></Route>
            <Route exact path="/starships" component={Starships}></Route>
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
