import React, { useState } from "react";
import { Modal, Button } from "react-bootstrap";

const BookFieldModal = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [selectedTimeFrom, setSelectedTimeFrom] = useState('8:00 AM'); // Selected time slot
    const [selectedTimeTo, setSelectedTimeTo] = useState('8:30 AM'); // Selected time slot
    const [numSlots, setNumSlots] = useState(0); // Number of slots

    const handleTimeChangeFrom = (event) => {
        const newTimeFrom = event.target.value;
        setSelectedTimeFrom(newTimeFrom);
        calculateNumSlots(newTimeFrom, selectedTimeTo);
    };

    const handleTimeChangeTo = (event) => {
        const newTimeTo = event.target.value;
        setSelectedTimeTo(newTimeTo);
        calculateNumSlots(selectedTimeFrom, newTimeTo);
    };

    const calculateNumSlots = (timeFrom, timeTo) => {
        const from = new Date(`2000/01/01 ${timeFrom}`);
        const to = new Date(`2000/01/01 ${timeTo}`);
        const diffInMillis = Math.abs(to - from);
        const numSlots = Math.ceil(diffInMillis / (30 * 60 * 1000));
        setNumSlots(numSlots);
    };

    const handleBooking = () => {
        // Handle booking with the selected number of slots
        // You can use the `numSlots` state variable here
    };

    // Generate time options from 8 AM to 12 PM
    const generateTimeOptions = () => {
        const options = [];
        for (let i = 8; i <= 24; i++) {
            const hour = i <= 12 ? i : i - 12;
            const suffix = i < 12 ? 'AM' : 'PM';
            options.push(
                <option key={`${i}:00`} value={`${hour}:00 ${suffix}`}>{`${hour}:00 ${suffix}`}</option>,
                <option key={`${i}:30`} value={`${hour}:30 ${suffix}`}>{`${hour}:30 ${suffix}`}</option>
            );
        }
        return options;
    };

    const openModal = () => setIsOpen(true);
    const closeModal = () => setIsOpen(false);

    return (
        <>
            <button className="custom-register-button" onClick={openModal}>BOOK</button>
            <Modal show={isOpen} onHide={closeModal}>
                <Modal.Header closeButton>
                    <Modal.Title>BOOK THIS FIELD</Modal.Title>
                </Modal.Header>
                <Modal.Body className="d-flex flex-column align-items-center">
                    <input className="custom-input" type="date" value="2017-06-01" />
                    <select className="custom-input" value={selectedTimeFrom} onChange={handleTimeChangeFrom}>
                        {generateTimeOptions()}
                    </select>
                    <select className="custom-input" value={selectedTimeTo} onChange={handleTimeChangeTo}>
                        {generateTimeOptions()}
                    </select>
                    <input
                        className="custom-input"
                        type="number"
                        id="numSlots"
                        value={numSlots}
                        onChange={(event) => setNumSlots(event.target.value)}
                        min={1}
                        max={24}
                    />
                    {/* cijena bi trebalo da se izračuna po slotu, a cijena slota se pravi kada se pravi teren, slot je pola sata */}
                    <input className="custom-input" id="price" name="price" type="text" />
                    <div className="form-check form-switch">
                        <input className="form-check-input" type="checkbox" id="flexSwitchCheckReverse" />
                        <label className="form-check-label" htmlFor="flexSwitchCheckReverse">Book weekly!</label> </div>
                    <button className="custom-register-button mt-5" onClick={handleBooking}>
                        BOOK
                    </button>
                </Modal.Body>
            </Modal>
        </>
    );
};

export default BookFieldModal;
