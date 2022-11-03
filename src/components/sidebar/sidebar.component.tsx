import React, {useState} from 'react';
import {Box, useTheme} from '@mui/material';
import {tokens} from '@src/theme';

const SidebarComponent = () => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    const [collapsed, setCollapsed] = useState<boolean>(false);
    const [selected, setSelected] = useState<string>('Dashboard');

    return (
        <Box
            sx={{
                '& pro-sidebar-inner': {
                    background: `${colors.primary[400]}!important`,
                },
                '& pro-icon-wrapper': {
                    backgroundColor: 'transparent !important',
                },
                '& pro-inner-item': {
                    padding: '5px 35px 5px 20px !important',
                },
                '& pro-inner-item:hover': {
                    color: '#868dfb !important',
                },
                '& pro-menu-item.active': {
                    color: '#6870fa !important',
                },
            }}
        >
            <div></div>
        </Box>
    );
};

export default SidebarComponent;
