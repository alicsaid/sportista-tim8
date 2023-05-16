import React, { Component } from "react";
import { Modal, Button } from "react-bootstrap";
import Forma from "./FormaZaRentera";

class App extends Component {
    state = {
        isOpen: false
    };

    openModal = () => this.setState({ isOpen: true });
    closeModal = () => this.setState({ isOpen: false });

    render() {
        return (
            <>

                <Button variant="outline-secondary" style={{margin: '5px'}} onClick={this.openModal}>Edit field</Button>
                <Modal show={this.state.isOpen} onHide={this.closeModal}>
                    <Modal.Body>
                        <Forma dodaj={"Edit"}/>
                    </Modal.Body>

                </Modal>
            </>
        );
    }
}

export default App;