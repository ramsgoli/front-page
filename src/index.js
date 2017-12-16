import React from 'react';
import { render } from 'react-dom';

import './main.scss';

import App from './components/App';

if (module.hot) {
    module.hot.accept();
}

render(<App />, document.getElementById('mount'));
