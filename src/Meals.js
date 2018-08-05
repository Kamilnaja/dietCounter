import React, { Component } from 'react';
import MealsList from './MealsList';
import tableHeaders from './MealsTableHeaders';
import MealsMenu from './Components/Meals/MealsMenu';

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
                <MealsMenu></MealsMenu>
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
                            MealsList.map((item, idx) => <tr key={idx}>
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
            </React.Fragment>
        );
    }
}

export default Meals;