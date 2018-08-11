import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import AppMenu from './AppMenu';
import Diary from './Diary/Diary';
import Meals from './Meals/Meals';
import DiaryMeals from './Diary/diaryMeals/diaryMeals';
import DiaryOther from './Diary/diaryOther/diaryOther';
import DiaryWeight from './Diary/diaryWeight/diaryWeight';

class App extends Component {
    render() {
        return (
            <div className="wrapper">
                <AppMenu></AppMenu>
                <div className="contentWrapper">
                    <Switch>
                        <Route path='/meals' component={Meals}></Route>
                        <Route path='/diary' component={Diary}></Route>
                        <Route path='/diaryMeals' component={DiaryMeals}></Route>
                        <Route path='/diaryWeight' component={DiaryWeight}></Route>
                        <Route path='/diaryOther' component={DiaryOther}></Route>
                    </Switch>
                </div>
            </div >
        );
    }
}

export default App;