import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import rootReducer from './reducers';
import thunk from 'redux-thunk'
// import { createLogger } from 'redux-logger'
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

const middleware = [thunk];
// middleware.push(createLogger());
const store = createStore(rootReducer, applyMiddleware(...middleware));

store.subscribe(function() {
    console.log(store.getState());
})

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
);
serviceWorker.unregister();
