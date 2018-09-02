import React from 'react';
import Table from './../../Utils//table/table';
import { Info } from './../../Utils/Info';
import setup from './../../Utils/setup.json';

/**
 * Wrapper for table element.
 * Is responsible for every main action in table component
 * And his state
 * Contains root actions
 */

export default Component => {
    return class extends React.Component {
        constructor(props) {
            super(props);
            this.state = {
                items: [],
                showAddingForm: false,
                payload: undefined
            };
            this.handleChange = this.handleChange.bind(this);
            this.handleSubmit = this.handleSubmit.bind(this);
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

        handleChange(event) {
            const target = event.target;
            const value = target.value;
            const name = target.name;

            this.setState({
                [name]: value
            });
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
            // iterate through data 
            var payload = this.makePayloadFromAllInputs();

            fetch(`${setup.api}/${this.props.url}`, {
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

        makePayloadFromAllInputs() {
            var payload = {};
            // starting from 1, because we dont need id
            for (let i = 1; i < this.props.rows.length; i++) {
                payload[this.props.rows[i]] = this.state[this.props.rows[i]];
            }
            return payload;
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