import React, { Component } from 'react';
import MenuMeals from './MenuMeals';
import Categories from './categories/Categories';
import All from './All/All';
import Forbidden from './forbidden/Forbidden';
import Permitted from './permitted/Permitted';

class Meals extends Component {
    constructor(props) {
        super(props);
        this.state = {
            chosenItem: 'All'
        };
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(e) {
        this.setState({
            choosenItem: e.target.dataset.name
        });
    }

    render() {
        let item = <All url="allProducts"></All>; // todo -change
        if (this.state.choosenItem === 'Categories') {
            item = <Categories url="categories"></Categories>;
        } else if (this.state.choosenItem === 'All') {
            item = <All url="allProducts"></All>;
        } else if (this.state.choosenItem === 'Forbidden') {
            item = <Forbidden url="forbidden"></Forbidden>;
        } else if (this.state.choosenItem === 'Permitted') {
            item = <Permitted url="permitted"></Permitted>;
        }

        return (
            <React.Fragment>
                <div className="submenuWrapper">
                    <MenuMeals handleClick={this.handleClick}></MenuMeals>
                </div>
                <div className="itemWrapper">
                    {item}
                </div>
            </React.Fragment>
        );
    }
}

export default Meals;