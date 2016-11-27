import React, {Component} from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import Menu from '../components/menu/menu'
import * as actions from '../actions'


class Main extends Component {
    render() {
        return (
            <div>
                <h1>React App for FoodAdviser 2</h1>
                <Menu />
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
