import React from 'react';
import {BrowserRouter} from 'react-router-dom';

import {stylesContainer} from './app.module.less';

export const App = (): React.ReactElement => (
    <BrowserRouter>
        <div className={stylesContainer}></div>
    </BrowserRouter>
);
