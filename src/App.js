import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import AppMenu from './AppMenu';
import Diary from './Diary';
import Info from './Info';
import Meals from './Meals';

class App extends Component {

    onKeyPressed(e) {
        console.log(e.key);
    }

    render() {
        return (
            <div className="wrapper" onKeyDown={(e) => this.onKeyPressed(e)}>
                <AppMenu></AppMenu>
                <Switch>
                    <Route path='/meals' component={Meals}></Route>
                    <Route path='/diary' component={Diary}></Route>
                    <Route path='/info' component={Info}></Route>
                </Switch>
            </div>
        );
    }
}

export default App;