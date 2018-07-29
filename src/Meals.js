import React, { Component } from 'react';
import MealsList from './MealsList';

class Meals extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    render() {
        return (
            <div>
                {
                    MealsList.map((item, idx) => <div key={idx}>
                        {item.id}
                        {item.name}
                        {item.kcal}
                    </div>
                    )}
            </div>
        );
    }
}

export default Meals;