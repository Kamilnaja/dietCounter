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
        return (
            <React.Fragment>
                <div className="submenuWrapper">
                    <MenuDiary handleClick={this.handleClick}></MenuDiary>
                </div>
                <div className="itemWrapper">
                    {
                        this.state.choosenItem === 'diaryMeals' && <DiaryMeals></DiaryMeals>
                    }
                    {
                        this.state.choosenItem === 'diaryWeight' && <DiaryWeight></DiaryWeight>
                    }
                    {
                        this.state.choosenItem === 'diaryOther' && <DiaryOther></DiaryOther>
                    }


                </div>
            </React.Fragment>
        );
    }
}

export default Diary;