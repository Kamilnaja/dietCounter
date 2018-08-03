import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import AppMenu from './AppMenu';
import Diary from './Diary';
import Info from './Info';
import Meals from './Meals';

class App extends Component {

    render() {
        return (
            <div className="wrapper">
                <AppMenu></AppMenu>
                <div className="contentWrapper">
                    <Switch>
                        <Route path='/meals' component={Meals}></Route>
                        <Route path='/diary' component={Diary}></Route>
                        <Route path='/info' component={Info}></Route>
                    </Switch>
                </div>
            </div>
        );
    }
}

export default App;