import React, { Component } from 'react';
import MealsList from './MealsList';
import { Table } from 'react-bootstrap';

class Meals extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    render() {
        return (
            <Table striped bordered hover>
                <thead>

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
            </Table>
        );
    }
}

export default Meals;