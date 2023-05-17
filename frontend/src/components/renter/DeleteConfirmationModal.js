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

                <Button variant="outline-danger" style={{margin: '5px'}} onClick={this.openModal}>Delete</Button>
                <Modal show={this.state.isOpen} onHide={this.closeModal}>
                    <Modal.Header closeButton>
                        <Modal.Title>Modal heading</Modal.Title>
                    </Modal.Header>
                    <Modal.Body><div className="alert alert-danger">Are you sure you want to delete the field ?</div></Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={this.closeModal}>
                            Cancle
                        </Button>
                        <Button variant="danger" onClick={this.closeModal}>
                            Delete
                        </Button>
                    </Modal.Footer>
                </Modal>
            </>
        );
    }
}

export default App;