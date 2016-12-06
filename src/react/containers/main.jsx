import React, {Component} from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Menu from '../components/menu/menu'
import * as actions from '../actions'

const styles = {
    title: {
        font: '28px Dosis, sans-serif',
        color: '#6aa501',
        margin: '10px 20px'
    },
    homeLink: {
        color: '#6aa501',
        textDecoration: 'underline'
    }
};

export class Main extends Component {
    render() {
        return (
            <div>
                <h1 style={styles.title}>React App for <a href='/' style={styles.homeLink}>FoodAdviser</a></h1>
                <MuiThemeProvider>
                    <Menu />
                </MuiThemeProvider>
                {this.props.children}
            </div>
        )
    }
}

function mapStateToProps(state) {
    return { data: state }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators(actions, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Main)
