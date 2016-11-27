import React, { Component } from 'react';
import { Link } from 'react-router';

export default class Menu extends Component {
    render() {
        return (
            <nav className="navbar navbar-default">
                <div className="container-fluid">
                    <div className="navbar-header">
                        <ul className="nav navbar-nav">
                            <li><Link to="/react/login">Login</Link></li>
                            <li><Link to="/react/about">About</Link></li>
                        </ul>
                    </div>
                </div>
            </nav>
        );
    }
}