import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import { Route, Router, browserHistory } from 'react-router';
import Main from './containers/main';
//import App from './containers/App';
import Login from './components/login/login';
import ForgotPassword from './components/forgotPassword/forgotPassword';
import About from './components/about/about';
import configureStore from './store/configureStore'

ReactDOM.render(
    <Provider store={configureStore()}>
        <Router history={browserHistory}>
            <Route path='/react/' component={Main} />
            <Route path='/react/login' component={Login} />
            <Route path='/react/forgotPassword' component={ForgotPassword} />
            <Route path='/react/about' component={About} />
        </Router>
    </Provider>,
    document.getElementById('react_root')
);
