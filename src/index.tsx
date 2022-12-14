import '@styles/styles.css';
import '@styles/styles.less';
import '@styles/styles.scss';

import React from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter} from 'react-router-dom';

import {App} from '@components/app/app';

// eslint-disable-next-line @typescript-eslint/no-non-null-assertion
const root = ReactDOM.createRoot(document.getElementById('root')!);
root.render(
    <React.StrictMode>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </React.StrictMode>,
);
