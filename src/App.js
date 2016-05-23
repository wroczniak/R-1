import React from 'react';
import ReactDom from 'react-dom';
import Navigation from './components/Navigation';
import UserProfile from './components/UserProfile';

class App extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <Navigation/>
                    </div>
                </div>
                <div class="row">
                    <div className="col-md-12">
                        <UserProfile/>
                    </div>
                </div>
            </div>
        )
    };
}

export default App
