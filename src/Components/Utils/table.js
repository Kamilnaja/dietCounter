import React, { Component } from 'react';
import { PropTypes } from 'prop-types';

class Table extends Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.state = {
            showAddingForm: false,
            name: '',
            kcal: '',
            category: ''
        }
    }

    handleClick() {
        this.setState({
            showAddingForm: true
        });
    }

    handleSubmit(event) {
        event.preventDefault();
        var payload = {
            name: this.state.name,
            kcal: parseInt(this.state.kcal),
            category: this.state.category
        };
        // console.log(payload)
        fetch('http://localhost:8080/addProduct', {
            method: 'POST',
            body: JSON.stringify(payload),
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        })
            .then(response => response.json())
            .catch(error => console.error('Fetch Error =\n', error));
        this.setState({ showAddingForm: false });
    }

    handleChange(event, stateElem) {
        if (stateElem === 'name') {
            this.setState({
                name: event.target.value
            });
        } else if (stateElem === 'kcal') {
            this.setState({
                kcal: event.target.value
            });
        } else if (stateElem === 'category') {
            this.setState({
                category: event.target.value
            });
        }
    }

    render() {
        return (
            <table className="table">
                <thead>
                    <tr>
                        <td>
                            <button onClick={this.handleClick}>
                                +
                            </button>
                        </td>
                    </tr>
                    <tr>
                        {
                            this.props.headers.map((item, idx) => <td key={idx}>{item}</td>)
                        }
                    </tr>
                </thead>
                <tbody>
                    {this.props.data.length === 0 ? 'loading' :
                        this.props.data.map((item, idx) => <tr key={idx}>
                            <td>
                                {item.id}
                            </td>
                            <td>
                                {item.name}
                            </td>
                            <td>
                                {item.kcal}
                            </td>
                            <td>
                                {item.category || 'unknown'}
                            </td>
                            <td>
                                <a href="">
                                    Edit
                                </a>
                                <a href="">
                                    Remove
                                </a>
                            </td>
                        </tr>
                        )}
                    {
                        this.state.showAddingForm && (<tr>
                            <td>
                            </td>
                            <td>
                                <input type="text" placeholder="name" value={this.state.name} onChange={(e) => this.handleChange(e, 'name')} />
                            </td>
                            <td>
                                <input type="text" placeholder="kcal" value={this.state.kcal} onChange={(e) => this.handleChange(e, 'kcal')} />
                            </td>
                            <td>
                                <input type="text" placeholder="category" value={this.state.category} onChange={(e) => this.handleChange(e, 'category')} />
                            </td>
                            <td>
                                <button onClick={(e) => this.handleSubmit(e)}>
                                    Save
                                </button>
                            </td>
                        </tr>)
                    }

                </tbody>
            </table>
        );
    }
}

Table.propTypes = {
    data: PropTypes.array,
    headers: PropTypes.array,
};

export default Table;