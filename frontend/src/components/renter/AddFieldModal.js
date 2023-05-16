import React, { Component } from "react";
import { Modal, Button } from "react-bootstrap";
import AddIcon from "@mui/icons-material/Add";
import {Fab} from "@mui/material";

class App extends Component {
    state = {
        isOpen: false
    };

    openModal = () => this.setState({ isOpen: true });
    closeModal = () => this.setState({ isOpen: false });

    render() {
        return (
            <>

                <Fab style={{position: "fixed", right:"30px", bottom:"30px"}} color="primary" aria-label="Add" onClick={this.openModal}>
                    <AddIcon />
                </Fab>
                <Modal show={this.state.isOpen} onHide={this.closeModal}>
                    <Modal.Header closeButton>
                        <Modal.Title>Modal heading</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>Popravim kasnije sta treba kad dodaje</Modal.Body>
                    <Modal.Footer>
                        <Button variant="outline-secondary" onClick={this.closeModal}>
                            Close
                        </Button>
                        <Button variant="outline-success" onClick={this.closeModal}>
                            Add
                        </Button>
                    </Modal.Footer>
                </Modal>
            </>
        );
    }
}

export default App;