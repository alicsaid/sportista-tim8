import React, { Component } from "react";
import { Modal, Button } from "react-bootstrap";
import AddIcon from "@mui/icons-material/Add";
import {Fab} from "@mui/material";
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

                <Fab style={{position: "fixed", right:"30px", bottom:"30px"}} color="primary" aria-label="Add" onClick={this.openModal}>
                    <AddIcon />
                </Fab>
                <Modal show={this.state.isOpen} onHide={this.closeModal}>
                    <Modal.Body>
                        <Forma/>
                    </Modal.Body>

                </Modal>
            </>
        );
    }
}

export default App;