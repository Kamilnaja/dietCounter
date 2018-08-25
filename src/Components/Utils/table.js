import React, { Component } from 'react';
import { PropTypes } from 'prop-types';

class Table extends Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
        this.state = {
            showAddingForm: false
        };
    }

    handleClick() {
        this.setState({
            showAddingForm: true
        });
        window.scroll({
            top: 100000, // todo - scroll to bottom
            behavior: 'smooth'
        });
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
                                <input type="text" placeholder="name" value={this.state.name} onChange={(e) => this.props.handleChange(e, 'name')} />
                            </td>
                            <td>
                                <input type="text" placeholder="kcal" value={this.state.kcal} onChange={(e) => this.props.handleChange(e, 'kcal')} />
                            </td>
                            <td>
                                <input type="text" placeholder="category" value={this.state.category} onChange={(e) => this.props.handleChange(e, 'category')} />
                            </td>
                            <td>
                                <button onClick={(e) => this.props.handleSubmit(e)}>
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
    handleSubmit: PropTypes.func,
    handleChange: PropTypes.func
};

export default Table;