import React from 'react';
import { connect } from 'react-redux';
import "./AccountForUser.css";
import Card from "react-bootstrap/Card";

class AccountForUser extends React.Component {
    render() {
        const { user } = this.props;

        // if (!user) {
        //     return <div className="loading">Loading...</div>;
        // }

        return (
            <div className="containerUser">
                <div className="cardUser">
                    <div className="cardUser-header" style={{display: 'flex', justifyContent: 'center', gap: '10px'}}>
                        <h2>FirstName</h2>
                        <h2>LastName</h2>
                    </div>
                    <div className="cardUser-body">
                        <div className="profile-picture">
                            <Card.Img variant="top" src={require('../../resources/images/user-profile-picture.png')} alt={"teren"} />
                        </div>
                        <div className="profile-details">
                            <div className="detail">
                                <span className="icon">&#9993;</span>
                                <p>usermail@gmail.com</p>
                            </div>
                            <div className="detail">
                                <span className="icon">&#x26A5;</span>
                                <p>Female</p>
                            </div>
                            <div className="detail">
                                <span className="icon">&#128197;</span>
                                <p>05.05.1999.</p>
                            </div>
                            <div className="detail">
                                <span className="icon">&#x1F3C3;</span>
                                <ul className="sportList">
                                    <li>Basketball</li>
                                    <li>Volleyball</li>
                                    <li>Table tennis</li>
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
        user: state.user,
    };
};

export default connect(mapStateToProps)(AccountForUser);
