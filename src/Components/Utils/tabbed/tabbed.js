import { Component } from 'react';

class Tabbed extends Component {
    constructor(props) {
        super(props);
        this.state = {
            active: 'lorem'
        };
    }

    handleClick = (event) => {
        this.setState({
            active: event.target.innerHTML
        });
    }

}

export default Tabbed;