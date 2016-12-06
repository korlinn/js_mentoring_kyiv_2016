import React, {Component} from 'react'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Menu from '../components/menu/menu'

const styles = {
    title: {
        font: '28px sans-serif',
        color: '#6aa501',
        margin: '10px 20px'
    },
    homeLink: {
        color: '#6aa501'
    }
};

export default class Main extends Component {
    render() {
        return (
            <div>
                <h1 style={styles.title}>
                    <a href='/' style={styles.homeLink}>FoodAdviser</a> : <a href='/react/' style={styles.homeLink}>React App</a>

                </h1>
                <MuiThemeProvider>
                    <Menu />
                </MuiThemeProvider>
                {this.props.children}
            </div>
        )
    }
}

