import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import { Route, Router, IndexRoute, browserHistory } from 'react-router';
import Main from './containers/main';
import HomeComponent from './components/home/home';
import LoginComponent from './components/login/login';
import ForgotPassword from './components/forgotPassword/forgotPassword';
import AboutComponent from './components/about/about';
import { checkAuth } from './services';
import store from './store/store'

let injectTapEventPlugin = require("react-tap-event-plugin");
injectTapEventPlugin();

const authFunc = checkAuth.bind(null, store);

ReactDOM.render(
    <Provider store={store}>
        <Router history={browserHistory}>
            <Route path='/react' component={Main}>
                <IndexRoute component={HomeComponent} />
                <Route path='/react/login' component={LoginComponent} />
                <Route path='/react/forgot-password' component={ForgotPassword} />
                <Route path='/react/about' component={AboutComponent} />
            </Route>
        </Router>
    </Provider>,
    document.getElementById('react_root')
);
