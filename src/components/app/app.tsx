import React from 'react';

import {stylesContainer} from './app.module.less';
import {BrowserRouter} from 'react-router-dom';
import './app.module.scss';

export const App = (): React.ReactElement => (
    <BrowserRouter>
        <div className={stylesContainer}></div>
    </BrowserRouter>
);
