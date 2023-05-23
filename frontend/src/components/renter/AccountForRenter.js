import React from 'react';
import { connect } from 'react-redux';
import "./AccountForRenter.css";
import Card from "react-bootstrap/Card";

class AccountForRenter extends React.Component {
    render() {
        const { renter } = this.props;

        // if (!renter) {
        //     return <div className="loading">Loading...</div>;
        // }

        return (
            <div className="containerRenter">
                <div className="cardRenter">
                    <div className="cardRenter-header">
                        <h2>Renter name</h2>
                    </div>
                    <div className="cardRenter-body">
                        <div className="profile-picture">
                            <Card.Img variant="top" src={require('../../resources/images/user-profile-picture.png')} alt={"teren"} />
                        </div>
                        <div className="profile-details">
                            <div className="detail">
                                <span className="icon">&#9993;</span>
                                <p>rentermail@gmail.com</p>
                            </div>
                            <div className="detail">
                                <span className="icon">&#127968;</span>
                                <p>Sarajevo</p>
                            </div>
                            <div className="detail">
                                <span className="icon">&#9742;</span>
                                <p>062/123-123</p>
                            </div>
                            <div className="detail">
                                <span className="icon">&#x1F3C3;</span>
                                <ul className="sportList">
                                    <li>Football</li>
                                    <li>Basketball</li>
                                    <li>Volleyball</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <button className="buttonEdit">Edit <span>&#9998;</span></button>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        renter: state.renter,
    };
};

export default connect(mapStateToProps)(AccountForRenter);
