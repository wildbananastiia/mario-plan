import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css'
import rootReducer from './store/reducers/rootReducer'

import { createStore, applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk'

import firebase from './config/fbConfig';
import { ReactReduxFirebaseProvider } from 'react-redux-firebase';
import { reduxFirestore } from 'redux-firestore';
import { getFirebase } from 'react-redux-firebase'
import { getFirestore, createFirestoreInstance } from 'redux-firestore'
import fbConfig from './config/fbConfig'
import { composeWithDevTools } from 'redux-devtools-extension';

const store = createStore(
    rootReducer,
    composeWithDevTools(
        compose(
            applyMiddleware(thunk.withExtraArgument({ getFirestore, getFirebase })),
            reduxFirestore(firebase, fbConfig)
        ))
);

const rrfProps = {
    firebase,
    config: fbConfig,
    dispatch: store.dispatch,
    createFirestoreInstance
};

ReactDOM.render(
    <Provider store={store}>
        <ReactReduxFirebaseProvider {...rrfProps}>
            <App />
        </ReactReduxFirebaseProvider>
    </Provider>,
    document.getElementById('root')
);
