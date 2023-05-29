import React, { useState } from "react";
import { Modal } from "react-bootstrap";
import AddIcon from "@mui/icons-material/Add";
import { Fab } from "@mui/material";
import FieldFormAction from "./FieldFormAction";

const AddFieldModal = (props) => {
    const [isOpen, setIsOpen] = useState(false);

    const openModal = () => setIsOpen(true);
    const closeModal = () => setIsOpen(false);
    return (
        <>
            <Fab
                style={{ position: "fixed", right: "30px", bottom: "30px" }}
                color="primary"
                aria-label="Add"
                onClick={openModal}
            >
                <AddIcon />
            </Fab>
            <Modal show={isOpen} onHide={closeModal}>
                <Modal.Header>
                    <h3>TEST</h3>
                    <button className="btn-close" onClick={closeModal}></button>
                </Modal.Header>
                <Modal.Body>
                    <FieldFormAction
                        action="Add"
                        user={props.user}
                        closeModal={closeModal}
                        getF={props.getf}
                    />
                </Modal.Body>
            </Modal>
        </>
    );
};

export default AddFieldModal;
