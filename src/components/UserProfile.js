/**
 * Created by wojtek on 23.05.16.
 */
import React from 'react';

class UserProfile extends React.Component {

    render() {
        return (
            <form className="form-signin">
                <h2 className="form-signin-heading">User profile</h2>
                <label className="sr-only" for="firrstName">First name</label>
                <input type="text" autofocus="" required="" placeholder="First name" className="form-control first-name"
                       id="firrstName"/>
                <label className="sr-only" for="lastName">Last name</label>
                <input type="password" required="" placeholder="Last name" className="form-control last-name"
                       id="lastName"/>

                <button type="submit" className="btn btn-lg btn-primary btn-block">Update profile</button>
            </form>
        );
    }
}

export default UserProfile;