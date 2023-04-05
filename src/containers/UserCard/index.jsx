import React from 'react';
import { CardMedia, Grid } from '@mui/material';
import PrincipalInformation from '../../components/PrincipalInformation';

const UserCard = (props) => {
    const { userState } = props; // desestructuramos userState desde props
    const { avatar_url } = userState; // desestructuramos avatar_url desde userState

    return(
        <Grid
            container
        >
            <Grid item xs={3}>
                <CardMedia
                    component='img'
                    alt='GitHub User Image'
                    image={avatar_url}
                />
            </Grid>
            <Grid item xs={9}>
                <PrincipalInformation userState={userState} />
                {/*<Description />*/}
            </Grid>
        </Grid>
    )
}

export default UserCard;