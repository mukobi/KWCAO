import React from 'react';
import ReactDom from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom'
import routes from './routes';

require('./stylesheets/base.scss');
require('./stylesheets/home.scss');
require('./stylesheets/contact.scss');

ReactDom.render(
  <BrowserRouter>
          <Route routes={routes} />
  </BrowserRouter>,
  document.querySelector('#app')
);
