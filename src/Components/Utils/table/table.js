import React, { Component } from 'react';
import { PropTypes } from 'prop-types';
import TableBodyRow from './tableBodyRow';
import TableAddingForm from './tableAddingForm';
import TableActions from './tableActions';

/**
 * This is table component, for <b>displaying</b> data.
 * 
 */

class Table extends Component {

    render() {
        return (
            <table className="table">
                <thead>
                    <tr>
                        <td>
                            <button onClick={this.props.expandAddingForm}>
                                +
                            </button>
                        </td>
                    </tr>
                    <tr>
                        {
                            this.props.headers.map((item, idx) => (
                                <td key={idx}>
                                    {item}
                                </td>
                            ))
                        }
                    </tr>
                </thead>
                <tbody>
                    {this.props.data.length === 0 ? 'loading' :
                        this.props.data.map((item, idx) => (
                            <tr key={idx}>
                                {
                                    <React.Fragment>
                                        <TableBodyRow
                                            item={item}
                                            rows={this.props.rows}>
                                        </TableBodyRow>
                                        <TableActions></TableActions>
                                    </React.Fragment>
                                }
                            </tr>
                        )
                        )
                    }
                    {
                        this.props.showAddingForm && (
                            <TableAddingForm
                                {...this.props}
                            ></TableAddingForm>
                        )
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
    handleChange: PropTypes.func,
    rows: PropTypes.array,
    expandAddingForm: PropTypes.func,
    showAddingForm: PropTypes.bool,
    name: PropTypes.string,
    kcal: PropTypes.number,
    category: PropTypes.string,
};

export default Table;