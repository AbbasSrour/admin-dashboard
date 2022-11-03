import React from 'react';

import {app, content} from './app.module.scss';
import Topbar from '@components/topbar/topbar.component';
import {ColorModeContext, useMode} from '@src/theme';
import {ThemeProvider} from '@mui/material';
import {Route, Routes} from 'react-router-dom';
import DashboardComponent from '@components/dashboard/dashboard.component';
import SidebarComponent from '@components/sidebar/sidebar.component';
import {ProSidebarProvider} from 'react-pro-sidebar';

export const App = (): React.ReactElement => {
    const {theme, colorMode} = useMode();
    return (
        <ColorModeContext.Provider value={colorMode}>
            <ThemeProvider theme={theme}>
                <ProSidebarProvider>
                    <div className={app}>
                        <main className={content}>
                            <Topbar />
                            <SidebarComponent />
                            <Routes>
                                <Route
                                    path={'/'}
                                    element={<DashboardComponent />}
                                />
                            </Routes>
                        </main>
                    </div>
                </ProSidebarProvider>
            </ThemeProvider>
        </ColorModeContext.Provider>
    );
};
