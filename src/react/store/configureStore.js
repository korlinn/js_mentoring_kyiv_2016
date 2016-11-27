import { createStore, applyMiddleware } from 'redux'
// import thunkMiddleware from 'redux-thunk'
// import createLogger from 'redux-logger'
// import rootReducer from '../reducers'

function f(state = []) {
    return state;
}

export default function configureStore(preloadedState) {
    const store = createStore(f);

    console.log(store.getState());

    return store;
}
