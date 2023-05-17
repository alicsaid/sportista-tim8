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
                    <div style={{textAlign:"center",marginBottom:"2px"}}>
                        <Button variant="danger" onClick={this.closeModal} style={{width:"50%"}}>
                            Close
                        </Button>
                    </div>

                </Modal>
            </>
        );
    }
}

export default App;