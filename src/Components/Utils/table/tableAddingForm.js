import React, { Component } from 'react';
import { PropTypes } from 'prop-types';

class TableAddingForm extends Component {
    constructor(props) {
        super(props);
        this.state = {

            formInputs: [
                {
                    id: 1,
                    type: 'text',
                    placeholder: 'name',
                    name: 'name'
                },
                {
                    id: 2,
                    type: 'text',
                    placeholder: 'kcal',
                    name: 'kcal'
                },
                {
                    id: 3,
                    type: 'text',
                    placeholder: 'category',
                    name: 'category'
                }
            ]
        };
    }



    render() {
        return (
            <tr className='tableInputRow'>
                <td>
                </td>
                {
                    this.state.formInputs.map((item, idx) =>
                        <td key={idx}>
                            <input
                                type={item.type}
                                placeholder={item.placeholder}
                                value={this.state.name}
                                onChange={this.props.handleChange}
                                name={item.name}
                            />
                        </td>
                    )
                }
                <td>
                    <button onClick={(e) => this.props.handleSubmit(e)}>Save</button>
                    <button>Cancel</button>
                </td>
            </tr>
        );
    }
}

TableAddingForm.propTypes = {
    handleChange: PropTypes.func,
    handleSubmit: PropTypes.func,
};

export default TableAddingForm;