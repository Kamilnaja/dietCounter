import React, { Component } from 'react';
import { Navbar } from 'react-bootstrap';
import { Route, Switch } from 'react-router-dom';
import AppMenu from './AppMenu';
import Diary from './Diary';
import Info from './Info';
import Meals from './Meals';

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <AppMenu></AppMenu>
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