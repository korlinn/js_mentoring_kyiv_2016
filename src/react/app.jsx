import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import { Route, Router, browserHistory } from 'react-router';
import Main from './containers/main';
import LoginComponent from './components/login/login';
import ForgotPassword from './components/forgotPassword/forgotPassword';
import AboutComponent from './components/about/about';
import store from './store/store'

let injectTapEventPlugin = require("react-tap-event-plugin");
injectTapEventPlugin();

ReactDOM.render(
    <Provider store={store}>
        <Router history={browserHistory}>
            <Route path='/react' component={Main}>
                <Route path='/react/login' component={LoginComponent} />
                <Route path='/react/forgot-password' component={ForgotPassword} />
                <Route path='/react/about' component={AboutComponent} />
            </Route>
        </Router>
    </Provider>,
    document.getElementById('react_root')
);
