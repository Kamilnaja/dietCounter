import React, { Component } from 'react';
import { Info } from '../../Utils/Info';

class Goals extends Component {
    constructor(props) {
        super(props);
        this.state = {
            goals: [],
            error: undefined
        }
    }

    componentDidMount = () => {
        fetch(`http://localhost:8080/goals`)
            .then(res => { return res.json() })
            .then(res => {
                this.setState({
                    goals: res
                });
            }, error => {
                this.setState({
                    isLoaded: true,
                    error
                })
            })
    }

    render() {
        return (
            <div>
                {
                    this.state.error && <Info type="error">Connection problem</Info>
                }
                <h2>This is list for your goals</h2>
                <ul>
                    {
                        this.state.goals.map((item, idx) => (
                            <li key={idx}>
                                <a href={item.name}>
                                    {item.id}  {item.name}
                                </a> {item.content}
                            </li>
                        ))
                    }
                </ul>
                <h3>You can edit or remove any of this items</h3>
            </div>
        );
    }
}

export default Goals;