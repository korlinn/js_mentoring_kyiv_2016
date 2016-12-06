import React, { Component } from 'react';

export default class Spinner extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className={this.props.applicationStatus ? "page-loader active" : "page-loader"}>
                <div className="spinner">
                    <div className="bounce1"></div>
                    <div className="bounce2"></div>
                    <div className="bounce3"></div>
                </div>
            </div>
        )
    }
}