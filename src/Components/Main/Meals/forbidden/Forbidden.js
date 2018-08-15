import React, { Component } from 'react';
import { Info } from './../../../Utils/Info';
import Table from './../../../Utils/table';
import tableHeaders from './../../../../MealsTableHeaders';

class Forbidden extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    render() {
        return (
            <React.Fragment>
                <Info></Info>
                {/* <Table headers={tableHeaders} data={MealsList}></Table> */}
            </React.Fragment>
        );
    }
}

export default Forbidden;