import React, { Component } from "react";
import { Modal, Button } from "react-bootstrap";

class App extends Component {
    state = {
        isOpen: false
    };

    openModal = () => this.setState({ isOpen: true });
    closeModal = () => this.setState({ isOpen: false });

    render() {
        return (
            <>
                <Button variant="outline-primary" onClick={this.openModal}>Book now</Button>
                <Modal show={this.state.isOpen} onHide={this.closeModal}>
                    <Modal.Header closeButton>
                        <Modal.Title>Book your field!</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <input type="date" value="2017-06-01" style={{margin: "5px"}}/>
                        <input type="time" />
                        <div className="form-check form-switch form-check-reverse">
                            <input className="form-check-input" type="checkbox" id="flexSwitchCheckReverse" />
                                <label className="form-check-label" htmlFor="flexSwitchCheckReverse">Book weekly!</label>
                        </div>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="primary">
                            Book
                        </Button>
                        <Button variant="secondary" onClick={this.closeModal}>
                            Close
                        </Button>
                    </Modal.Footer>
                </Modal>
            </>
        );
    }
}

export default App;