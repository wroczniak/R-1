/**
 * Created by wojtek on 23.05.16.
 */
import React from 'react';
import Actions from './../action/Actions';

class UserProfile extends React.Component {

    state = {
        firstName: this.props.firstName,
        lastName: this.props.lastName
    }

    updateFirstName = (e) => {
        this.setState({firstName: e.target.value});
    }

    updateLastName = (e) => {
        this.setState({lastName: e.target.value});
    }

    updateProfile = () => {
        Actions.updateProfile(this.state.firstName, this.state.lastName);
    }

    render() {
        return (
            <div className="form-signin">
                <h2 className="form-signin-heading">User profile</h2>
                <label className="sr-only" for="firstName">First name</label>
                <input type="text" autofocus="" required="" value={this.state.firstName} onChange={this.updateFirstName} placeholder="First name" className="form-control first-name"
                       id="firstName"/>
                <label className="sr-only" for="lastName">Last name</label>
                <input type="text" required="" value={this.state.lastName} onChange={this.updateLastName} placeholder="Last name" className="form-control last-name"
                       id="lastName"/>

                <button className="btn btn-lg btn-primary btn-block" onClick={this.updateProfile}>Update profile</button>
            </div>
        );
    }
}

export default UserProfile;