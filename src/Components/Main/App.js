import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import Goals from './Goals/Goals';
import Meals from './Meals/Meals';
import MenuSidebar from './MenuSidebar';

class App extends Component {
    render() {
        return (
            <div className="wrapper">
                <div className="contentWrapper">
                    <div className="wrapper">
                        <MenuSidebar></MenuSidebar>
                    </div>
                    <Switch>
                        <Route path='/meals' component={Meals}></Route>
                        <Route path='/goals' component={Goals}></Route>
                    </Switch>
                </div>
            </div >
        );
    }
}

export default App;