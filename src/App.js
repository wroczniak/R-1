import React from 'react';
import ReactDom from 'react-dom';
import Navigation from './components/Navigation';
import UserProfile from './components/UserProfile';
import UserProfileStore from './store/UserProfileStore'

class App extends React.Component {
    constructor(props) {
        super(props);
    }

    state = {
        firstName: 'Łucja',
        lastName: 'Roczniak'
    };

    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <Navigation {...this.state}/>
                    </div>
                </div>
                <div class="row">
                    <div className="col-md-12">
                        <UserProfile {...this.state}/>
                    </div>
                </div>
            </div>
        )
    }

    updateProfile = (userProfile) => {
        this.setState({firstName: userProfile.firstName, lastName: userProfile.lastName});
    };

    componentDidMount() {
        this.unsubscribe = UserProfileStore.listen(this.updateProfile);
    }

    componentWillUnmount() {
        this.unsubscribe();
    }
}

export default App
