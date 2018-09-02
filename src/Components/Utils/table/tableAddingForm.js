import React, { Component } from 'react';
import { PropTypes } from 'prop-types';

class TableAddingForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {
        return (
            <tr className='tableInputRow'>
                <td>
                </td>
                {
                    this.props.formInputs.map((item, idx) =>
                        <td key={idx}>
                            <input
                                {...item}
                                value={this.state.name}
                                onChange={this.props.handleChange}
                            />
                        </td>
                    )
                }
                <td>
                    <button onClick={(e) => this.props.handleSubmit(e)}>Save</button>
                    <button onClick={this.props.handleCancel}>Cancel</button>
                </td>
            </tr>
        );
    }
}

TableAddingForm.propTypes = {
    handleChange: PropTypes.func,
    handleSubmit: PropTypes.func,
    formInputs: PropTypes.array,
    handleCancel: PropTypes.func.isRequired
};

export default TableAddingForm;