import React from 'react';
import { useSelector } from 'react-redux';
import "../../pages/renter/Renter.css";

const RenterAccountOverview = () => {

    const renter = useSelector(state => state.renter);

    return (
        <form className="renterAccountForm" action="#">
                <input className="custom-input" type="text" placeholder="Name" />
                <input className="custom-input" type="email" placeholder="Email address" />
                <input className="custom-input" type="password" placeholder="Password" />
                <input className="custom-input" type="text" placeholder="City" />
                <input className="custom-input" type="text" placeholder="Phone number" />
                <button className="custom-login-btn mt-4">Edit</button>
        </form>
    );
};

export default RenterAccountOverview;
