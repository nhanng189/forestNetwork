import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import axios from 'axios';
import { setProfileData } from './actions';
import host from './Host';
import { decode_key } from './key';
import { Keypair } from 'stellar-base';
import rootReducer from './reducers';
import thunk from 'redux-thunk'
// import { createLogger } from 'redux-logger'
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

const middleware = [thunk];
// middleware.push(createLogger());

const store = createStore(rootReducer, applyMiddleware(...middleware));

store.subscribe(function () {
    console.log('State Changed', store.getState());
});

if (sessionStorage.getItem('forest_network_account')) {
    let publicKey = Keypair.fromSecret(decode_key(sessionStorage.getItem('forest_network_account'))).publicKey();
    axios.get(host + '/account/' + publicKey)
        .then(res => {
            store.dispatch(setProfileData(res.data));
        })
        .then(() => {
            ReactDOM.render(
                <Provider store={store}>
                    <App />
                </Provider>,
                document.getElementById('root')
            );
        })
} else {
    ReactDOM.render(
        <Provider store={store}>
            <App />
        </Provider>,
        document.getElementById('root')
    );
}

serviceWorker.unregister();
