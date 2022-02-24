import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { HashRouter as Router } from 'react-router-dom';
import store from './store';
import config from './auth_config.json';
import App from './components/App';
import { Auth0Provider } from '@auth0/auth0-react';
document.addEventListener('DOMContentLoaded', function () {
  render( /*#__PURE__*/React.createElement(Auth0Provider, {
    domain: config.domain,
    clientId: config.clientId,
    redirectUri: window.location.origin,
    audience: config.audience
  }, /*#__PURE__*/React.createElement(Provider, {
    store: store
  }, /*#__PURE__*/React.createElement(Router, null, /*#__PURE__*/React.createElement(App, null)))), document.getElementById('app'));
});