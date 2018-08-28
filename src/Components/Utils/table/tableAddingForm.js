import React, { Component } from 'react';

class TableAddingForm extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <tr className='tableInputRow'>
                <td>
                </td>
                <td>
                    <input
                        type="text"
                        placeholder="name"
                        value={this.props.name}
                        onChange={(e) => this.props.handleChange(e, 'name')} />
                </td>
                <td>
                    <input type="text"
                        placeholder="kcal"
                        value={this.props.kcal}
                        onChange={(e) => this.props.handleChange(e, 'kcal')} />
                </td>
                <td>
                    <input
                        type="text"
                        placeholder="category"
                        value={this.props.category}
                        onChange={(e) => this.props.handleChange(e, 'category')} />
                </td>
                <td>
                    <button onClick={(e) => this.props.handleSubmit(e)}>Save</button>
                    <button>Cancel</button>
                </td>
            </tr>
        );
    }
}

export default TableAddingForm;