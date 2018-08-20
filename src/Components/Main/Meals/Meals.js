import React, { Component } from 'react';
import Categories from './categories/Categories';
import All from './all/All';
import Forbidden from './forbidden/Forbidden';
import Permitted from './permitted/Permitted';
import Add from './add/Add';

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
                </div>
                <div className="itemWrapper">
                    <h2>{this.state.choosenItem}</h2>
                    {item}
                    <Add></Add>
                </div>
            </React.Fragment>
        );
    }
}

export default Meals;