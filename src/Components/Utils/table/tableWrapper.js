import React from 'react';
import Table from './../../Utils//table/table';
import tableHeaders from './../../../MealsTableHeaders';
import { Info } from './../../Utils/Info';
import setup from './../../Utils/setup.json';

/**
 * Wrapper for table element.
 * Is responsible for every main action in table component
 * And his state
 */

export default Component => {
    return class extends React.Component {
        constructor(props) {
            super(props);
            this.state = {
                items: [],
                name: '',
                kcal: '',
                category: '',
                showAddingForm: false,
            };
        }

        componentDidMount() {
            fetch(`${setup.api}/${this.props.url}`)
                .then(res => { return res.json(); })
                .then(result => {
                    this.setState({
                        items: result
                    });
                }, error => {
                    this.setState({
                        isLoaded: true,
                        error
                    });
                });
        }

        handleChange = (event, stateElem) => {
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

        expandAddingForm = () => {
            this.setState({
                showAddingForm: true
            });
            window.scroll({
                top: 100000, // todo - scroll to bottom
                behavior: 'smooth'
            });
        }

        handleSubmit = (event) => {
            event.preventDefault();
            var payload = {
                name: this.state.name,
                kcal: parseInt(this.state.kcal, 10),
                category: this.state.category
            };

            fetch(`${setup.api}/product`, {
                method: 'POST',
                body: JSON.stringify(payload),
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                }
            })
                .then(response => response.json())
                .then(response => {
                    this.setState({
                        items: response
                    });
                })
                .catch(error => console.error('Fetch Error =\n', error));
            this.setState({
                showAddingForm: false
            });
        }

        renderTable = () => {
            return (
                <div className="tableWrapper">
                    <h2>
                        {this.props.title}
                    </h2>
                    {
                        this.state.items.length === 0 ? 'Loading'
                            : <Table
                                headers={this.props.rows}
                                data={this.state.items}
                                handleSubmit={this.handleSubmit}
                                handleChange={this.handleChange}
                                expandAddingForm={this.expandAddingForm}
                                showAddingForm={this.state.showAddingForm}
                                {...this.props}
                            >
                            </Table>
                    }
                </div>
            );
        }

        handleRemove() {

        }

        render() {
            const { error } = this.state;
            if (error) {
                return (
                    <Info type="error">
                        Error when connecting with api
                    </Info>
                );
            } else {
                return (
                    <Component
                        renderTable={this.renderTable}>
                    </Component>
                );
            }
        }
    };
};