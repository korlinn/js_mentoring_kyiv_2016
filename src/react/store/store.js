import { createStore, applyMiddleware } from 'redux'
import authCheckReducer  from './../reducers'
import thunk from 'redux-thunk'

const store = createStore(
    authCheckReducer, applyMiddleware(thunk)
);

export default store;
