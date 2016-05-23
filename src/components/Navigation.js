/**
 * Created by wojtek on 23.05.16.
 */
import React from 'react';

class Navigation extends React.Component {

    render() {
        return (
            <nav className="navbar navbar-default" role="navigation">
                <div className="navbar-header">

                    <button type="button" className="navbar-toggle" data-toggle="collapse"
                            data-target="#bs-example-navbar-collapse-1">
                        <span className="sr-only">Toggle navigation</span><span className="icon-bar"></span><span
                        className="icon-bar"></span><span className="icon-bar"></span>
                    </button>
                    <a className="navbar-brand" href="#">Home</a>
                </div>

                <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">

                    <ul className="nav navbar-nav navbar-right">
                        <li>
                            <a href="#">Welcome Łucja Roczniak</a>
                        </li>
                    </ul>
                </div>

            </nav>
        );
    }
}

export default Navigation;