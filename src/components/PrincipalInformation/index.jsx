import React, { Fragment } from 'react';
import { Stack, Typography } from '@mui/material';

const PrincipalInformation = (props) => {
    const { userState } = props;
    const { 
        name,
        login,
        created_at
    } = userState

    return(
        <Fragment>
            <Stack>
                <Typography>{name}</Typography>
                <Typography>{created_at}</Typography>
            </Stack>
            <Typography>{login}</Typography>
        </Fragment>
    )
};

export default PrincipalInformation;