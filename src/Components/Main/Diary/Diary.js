import React, { Component } from 'react';
import MenuDiary from './MenuDiary';

class Diary extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <React.Fragment>
                <MenuDiary></MenuDiary>
                <div>
                    <h1>Diary</h1>
                    <h2>Please enter your today dishes or weight</h2>
                    <form>
                        <input type="date" />
                        <input type="number" placeholder="120" />
                        <button>Submit</button>
                    </form>
                </div>
            </React.Fragment>
        );
    }
}

export default Diary;