import React from 'react';
import { render } from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { createLogger } from 'redux-logger';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import reducer from './reducers';

import createHistory from 'history/createBrowserHistory';
import { Route } from 'react-router';
import { ConnectedRouter, routerMiddleware } from 'react-router-redux';

import CheckoutForm from 'containers/CheckoutForm';
import ThankYou from 'containers/ThankYou';

import 'less/style.less';

const history = createHistory();

const middleware = [thunk, createLogger(), routerMiddleware(history)];

const store = createStore(
  reducer,
  applyMiddleware(...middleware)
);

window.onload = () => {
  render(
    <Provider store={store}>
      <ConnectedRouter history={history}>
        <div>
          <Route exact path="/" component={CheckoutForm}/>
          <Route path="/thankyou" component={ThankYou}/>
        </div>
      </ConnectedRouter>
    </Provider>, 
    document.getElementById('root')
  );
};