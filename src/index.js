import ReactDOM from 'react-dom';
import React from 'react';
import { createStore, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { Provider } from 'react-redux';
import { BrowserRouter, Route } from 'react-router-dom';
import WebFont from 'webfontloader';
import reducer from './reducers';
import rootSaga from './sagas';
import SendMoneyForm from './containers/sendMoneyForm';
import PersonalDetails from './containers/personalDetails';
import FriendsListMenu from './containers/friendsListMenu';

import './index.scss';

WebFont.load({
  google: {
    families: [
      'Patua One',
      'Fira Sans'
    ]
  }
});

const sagaMiddleware = createSagaMiddleware();
const store = createStore(
  reducer(),
  window.___INITIAL_STATE__, //eslint-disable-line
  compose(
    applyMiddleware(sagaMiddleware),
    window.devToolsExtension ? window.devToolsExtension() : f => f //eslint-disable-line
  )
);

sagaMiddleware.run(rootSaga);

ReactDOM.render(<Provider store={store}>
  <BrowserRouter>
    <div className="wrapper">
      <Route path="/" component={SendMoneyForm} exact />
      <Route path="/" component={PersonalDetails} exact />
      <Route path="/" component={FriendsListMenu} exact />
    </div>
  </BrowserRouter>
</Provider>, document.getElementById('index')); //eslint-disable-line