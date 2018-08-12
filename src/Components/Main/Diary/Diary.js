import React, { Component } from 'react';
import MenuDiary from './MenuDiary';
import DiaryMeals from './diaryMeals/diaryMeals';
import DiaryWeight from './diaryWeight/diaryWeight';
import DiaryOther from './diaryOther/diaryOther';

class Diary extends Component {
    constructor(props) {
        super(props);
        this.state = {
            choosenItem: null
        };

    }

    handleClick = (e) => {
        this.setState({
            choosenItem: e.target.dataset.name
        });
    }

    render() {
        let item;
        if (this.state.choosenItem === 'diaryMeals') {
            item = <DiaryMeals></DiaryMeals>
        } else if (this.state.choosenItem === 'diaryWeight') {
            item = <DiaryWeight></DiaryWeight>
        } else if (this.state.choosenItem === 'diaryOther') {
            item = <DiaryOther></DiaryOther>
        }
        return (
            <React.Fragment>
                <div className="submenuWrapper">
                    <MenuDiary handleClick={this.handleClick}></MenuDiary>
                </div>
                <div className="itemWrapper">

                    {
                        item
                    }

                </div>
            </React.Fragment>
        );
    }
}

export default Diary;