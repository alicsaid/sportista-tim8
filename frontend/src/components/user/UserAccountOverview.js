import React from 'react';
import { connect } from 'react-redux';

class UserAccountOverview extends React.Component {
    render() {
        const { user } = this.props;

        // if (!user) {
        //     return <div className="loading">Loading...</div>;
        // }

        return (
            <form className="userAccountForm" action="#">
                <input className="custom-input" type="text" placeholder="Name" />
                <input className="custom-input" type="email" placeholder="Email address" />
                <input className="custom-input" type="password" placeholder="Password" />
                <input className="custom-input" type="text" placeholder="City" />
                <input className="custom-input" type="text" placeholder="Phone number" />
                <button className="custom-login-btn mt-4">Edit</button>
            </form>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        user: state.user,
    };
};

export default connect(mapStateToProps)(UserAccountOverview);
