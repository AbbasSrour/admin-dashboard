import React, {useContext} from 'react';
import {Box, useTheme} from '@mui/material';
import {ColorModeContext, tokens} from '@src/theme';

const Topbar: React.FC = () => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    const colorMode = useContext(ColorModeContext);

    return (
        <Box>
            <h1></h1>
        </Box>
    );
};

export default Topbar;
