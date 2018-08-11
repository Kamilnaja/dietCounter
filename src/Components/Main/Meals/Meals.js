import React, { Component } from 'react';
import MenuMeals from './MenuMeals';
import tableHeaders from './../../../MealsTableHeaders';
import MealsList from './MealsList.json';

class Meals extends Component {
    constructor(props) {
        super(props);
        this.state = { showModal: true };
        this.handleHide = this.handleHide.bind(this);
    }

    handleShow() {
        this.setState({
            showModal: true
        });
    }

    handleHide() {
        this.setState({
            showModal: false
        });
    }

    render() {

        return (
            <React.Fragment>
                <div className="submenuWrapper">
                    <MenuMeals></MenuMeals>
                </div>
                <div className="itemWrapper">

                    <table>
                        <thead>
                            <tr>
                                {
                                    tableHeaders.map((item, idx) => <td key={idx}>{item}</td>)
                                }
                            </tr>
                        </thead>
                        <tbody>
                            {
                                MealsList.items.map((item, idx) => <tr key={idx}>
                                    <td>
                                        {item.id}
                                    </td>
                                    <td>
                                        {item.name}
                                    </td>
                                    <td>
                                        {item.kcal}
                                    </td>
                                </tr>
                                )
                            }
                        </tbody>
                    </table>
                    <button onClick={this.handleShow.bind(this)}>
                        Add next product/meal
                    </button>
                </div>
            </React.Fragment>
        );
    }
}

export default Meals;