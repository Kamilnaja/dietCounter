import React, { Component } from 'react';

class Diary extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (

            <div>
                <h1>Diary</h1>
                <h2>Please enter your today dishes or weight</h2>
                <form>
                    <input type="date" />
                    <input type="number" placeholder="120" />
                    <button>Submit</button>
                </form>
            </div>
        );
    }
}

export default Diary;