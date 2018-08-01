import React, { Component } from 'react';
import { Button, ControlLabel, FormControl, FormGroup, Modal } from 'react-bootstrap';

class MealsModal extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            kcal: '',
            category: ''
        }
        this.handleChangeName = this.handleChangeName.bind(this);
        this.handleChangeKcal = this.handleChangeKcal.bind(this);
    }

    handleChangeName(e) {
        this.setState({
            name: e.target.value,
        })
    }

    handleChangeKcal(e) {
        this.setState({
            kcal: e.target.value,
        })
    }

    handleSubmit() {
        alert(this.state.name, this.state.kcal, this.state.category);
    }

    render() {
        return (
            <div className="static-modal">
                <Modal.Dialog>
                    <Modal.Header>
                        <Modal.Title>Dodaj nowy produkt</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <form onSubmit={this.handleSubmit.bind(this)}>
                            <FormGroup>
                                <ControlLabel>
                                    Nazwa produktu
                                </ControlLabel>
                                <FormControl
                                    type="text"
                                    value={this.state.name}
                                    placeholder="ex. smashed tomatos"
                                    onChange={(e) => this.handleChangeName(e)}
                                />
                                <FormControl.Feedback />
                            </FormGroup>
                            <FormGroup>
                                <ControlLabel>
                                    Ilość kalorii
                                </ControlLabel>
                                <FormControl
                                    type="number"
                                    value={this.state.kcal}
                                    placeholder="Enter number of kcals"
                                    onChange={(e) => this.handleChangeKcal(e)}
                                />
                                <FormControl.Feedback />
                            </FormGroup>
                            <FormGroup
                                controlId="formBasicText"
                            >
                                <ControlLabel>
                                    Kategoria
                                </ControlLabel>
                                <FormControl
                                    type="text"
                                    value={this.state.category}
                                    placeholder="Enter text"
                                    onChange={this.handleChange}
                                />
                                <FormControl.Feedback />
                            </FormGroup>
                        </form>
                    </Modal.Body>

                    <Modal.Footer>
                        <Button onClick={this.props.hide}>
                            Close
                        </Button>
                        <Button bsStyle="primary">Save changes</Button>
                    </Modal.Footer>
                </Modal.Dialog>
            </div>
        );
    }
}

export default MealsModal;
