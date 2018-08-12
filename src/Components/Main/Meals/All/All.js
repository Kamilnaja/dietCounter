import React, { Component } from 'react';
import MealsList from './../MealsList.json';
import tableHeaders from './../../../../MealsTableHeaders';
import { Info } from '../../../Utils/Info';

class All extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {

        return (
            <React.Fragment>
                <Info></Info>
                <table className="table">
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
            </React.Fragment>
        );
    }
}

export default All;