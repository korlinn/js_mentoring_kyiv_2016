import React, { Component } from 'react';
import { Link } from 'react-router';
import {Tabs, Tab} from 'material-ui/Tabs';

const styles = {
    tabs: {
        backgroundColor: '#6e7678',
    }
};

export default class Menu extends Component {
    render() {
        return (
            <div>
                <Tabs style={styles.tabs}>
                    <Tab label="Login" style={styles.tabs} containerElement={<Link to="/react/login" activeClassName="tab__active"/>}/>
                    <Tab label="About" style={styles.tabs} containerElement={<Link to="/react/about" activeClassName="tab__active"/>}/>
                </Tabs>
            </div>
        );
    }
}