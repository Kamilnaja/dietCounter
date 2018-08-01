import React, { Component } from 'react';

class Diary extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    render() {
        return (
            <div>
                <h1>Diary</h1>
                <h2>Please enter your today dishes</h2>
            </div>
        );
    }
}

export default Diary;