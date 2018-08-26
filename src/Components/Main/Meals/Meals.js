import React, { Component } from 'react';
import TabbedMeals from './tabbedMeals';

class Meals extends Component {
    constructor(props) {
        super(props);
        this.state = {
            chosenItem: 'All'
        };
    }

    handleClick = (e) => {
        this.setState({
            choosenItem: e.target.dataset.name
        });
    }

    render() {
        return (
            <TabbedMeals items={['Permitted', 'All', 'Forbidden']}></TabbedMeals>
        );
    }
}

export default Meals;