import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import AppMenu from './AppMenu';
import Diary from './Diary/Diary';
import Meals from './Meals/Meals';
import Info from './../../Info';

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