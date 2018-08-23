import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import Diary from './Diary/Diary';
import Meals from './Meals/Meals';
import MenuSidebar from './MenuSidebar';
import Tabbed from './../Utils/tabbed';

class App extends Component {
    render() {
        return (
            <div className="wrapper">
                {/* <Tabbed></Tabbed> */}
                <div className="contentWrapper">
                    <div className="wrapper">
                        <MenuSidebar></MenuSidebar>
                    </div>
                    <Switch>
                        <Route path='/meals' component={Meals}></Route>
                        <Route path='/diary' component={Diary}></Route>
                    </Switch>
                </div>
            </div >
        );
    }
}

export default App;