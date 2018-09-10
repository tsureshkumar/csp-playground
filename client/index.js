import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunkMiddleware from 'redux-thunk';
import { createLogger } from 'redux-logger';

import {reducers} from './reducers/index';
import App from './app';


const store = createStore(reducers, 
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
    applyMiddleware(
        thunkMiddleware,
        createLogger() // logger middleware
    )
);

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById("index"));
