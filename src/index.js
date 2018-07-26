import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import CApp from './containers/CApp';
import registerServiceWorker from './registerServiceWorker';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import {Provider} from 'react-redux'
import { createStore } from 'redux'
import rootReducer from './reducers/index'

const store = createStore(rootReducer)

ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>
            <Switch>
                <Route path='*' exact component={CApp}/>
            </Switch>
        </BrowserRouter>
    </Provider>
   , document.getElementById('root'));
registerServiceWorker();