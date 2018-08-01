import React, { Component } from 'react';
import { Button, Grid, Table } from 'react-bootstrap';
import MealsModal from './MealsModal';
import MealsList from './MealsList';
import tableHeaders from './MealsTableHeaders';

class Meals extends Component {
    constructor(props) {
        super(props);
        this.state = { showModal: true }
        this.handleHide = this.handleHide.bind(this)
    }

    handleShow() {
        this.setState({
            showModal: true
        })
    }

    handleHide() {
        this.setState({
            showModal: false
        })
    }

    render() {

        return (
            <Grid>
                {
                    this.state.showModal &&
                    <MealsModal hide={this.handleHide}></MealsModal>
                }
                <Table striped bordered hover>
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
                </Table>
                <Button onClick={this.handleShow.bind(this)}>
                    Add next product/meal
                </Button>
            </Grid>
        );
    }
}

export default Meals;