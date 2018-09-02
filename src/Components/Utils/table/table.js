import React, { Component } from 'react';
import { PropTypes } from 'prop-types';
import TableBodyRow from './tableBodyRow';
import TableAddingForm from './tableAddingForm';
import TableActions from './tableActions';
import TableHeader from './tableHeader';

/**
 * This is table component, for <b>displaying</b> data.
 */

class Table extends Component {

    render() {
        return (
            <table className="table">
                <TableHeader
                    expandAddingForm={this.props.expandAddingForm}
                    rows={this.props.rows}
                >
                </TableHeader>
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
                                        <TableActions
                                            item={item}
                                            handleRemove={this.props.handleRemove}
                                            handleEdit={this.props.handleEdit}
                                        ></TableActions>
                                    </React.Fragment>
                                }
                            </tr>
                        ))
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
    handleRemove: PropTypes.func,
    handleCancel: PropTypes.func,
    handleEdit: PropTypes.func,
    expandAddingForm: PropTypes.func,
    rows: PropTypes.array,
    showAddingForm: PropTypes.bool
};

export default Table;