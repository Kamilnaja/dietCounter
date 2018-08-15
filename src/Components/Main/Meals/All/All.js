import React, { Component } from 'react';
import { Info } from '../../../Utils/Info';
import tableHeaders from './../../../../MealsTableHeaders';
import Table from './../../../Utils/table';

class All extends Component {
    constructor(props) {
        super(props);
        this.state = {
            items: []
        };
    }

    componentDidMount() {
        fetch('http://localhost:8080/allProducts')
            .then(res => { return res.json(); })
            .then(myJson => {
                this.setState({
                    items: myJson.items
                });

            });
    }

    render() {
        return (
            <React.Fragment>
                <Info>All Products</Info>
                {
                    this.state.items.length === 0 ? 'Loading'
                        : <Table headers={tableHeaders} data={this.state.items}></Table>
                }

            </React.Fragment>
        );
    }
}

export default All;