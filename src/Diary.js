import React, { Component } from 'react';
import { Grid } from 'react-bootstrap';

class Diary extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    render() {
        return (
            <Grid>
                <h1>Diary</h1>
                <h2>Please enter your today dishes</h2>
            </Grid>
        );
    }
}

export default Diary;