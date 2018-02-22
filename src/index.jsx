import React from 'react';
import ReactDOM from 'react-dom';

import {Router, browserHistory} from 'react-router';
import routes from './routes';

require('./stylesheets/base.scss');
require('./stylesheets/home.scss');
require('./stylesheets/contact.scss');

ReactDOM.render(
    <Router routes={routes} histor={browserHistory} />,
    document.querySelector('#app')
);