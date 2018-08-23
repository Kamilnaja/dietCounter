import React, { Component } from 'react';
import Lorem from './testing/lorem';
import Ipsum from './testing/ipsum';

class Tabbed extends Component {
    constructor(props) {
        super(props);
        this.state = {
            tabs: ['lorem', 'ipsum', 'dolor'],
            active: 'lorem'
        }
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(event) {
        this.setState({
            active: event.target.innerHTML
        })
    }

    render() {
        return (
            <div className="tabbed">
                <ul className="tabbedMenu">
                    {
                        this.state.tabs.map((item, idx) => (
                            <li
                                className={'tabbedMenuItem active' + (this.state.active === item)}
                                key={idx}
                                onClick={(e) => this.handleClick(e)}>
                                {item}
                            </li>
                        ))
                    }
                </ul>
                <div className="tabbedContent">
                    {
                        this.state.active === 'lorem' && <Lorem></Lorem>
                    }
                    {
                        this.state.active === 'ipsum' && <Ipsum></Ipsum>
                    }
                </div>
            </div>
        );
    }
}

export default Tabbed;