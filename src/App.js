import React, { Component } from 'react';
import { Grid, Navbar } from 'react-bootstrap';
import AppMenu from './AppMenu';
import Diary from './Diary';
import Meals from './Meals';
import { Switch, Route } from 'react-router-dom';
import Info from './Info';

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Navbar>
          <Navbar.Header>
            <Navbar.Brand>
              <a href="#home">
                Diet Counter
              </a>
            </Navbar.Brand>
          </Navbar.Header>
          <AppMenu></AppMenu>
        </Navbar>
        <Switch>
          <Route path='/meals' component={Meals}></Route>
          <Route path='/diary' component={Diary}></Route>
          <Route path='/info' component={Info}></Route>
        </Switch>
      </React.Fragment>
    )
  }
}

export default App;
