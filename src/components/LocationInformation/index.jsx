import React from 'react';
import { Grid, Link, Stack, Typography } from '@mui/material';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import TwitterIcon from '@mui/icons-material/Twitter';
import LanguageIcon from "@mui/icons-material/Language";
import BusinessIcon from '@mui/icons-material/Business';


const LocationInformation = (props) => {
    const { userState } = props;
    const {
        location,
        twitter_username,
        blog,
        company
    } = userState;

    return(
        <Grid
            container
            spacing={2}
            sx={{
                marginTop: '15px'
            }}
        >
            <Grid item xs={6}>
                <Stack direction='row' spacing={2}>
                    <LocationOnIcon />
                    <Typography>{location}</Typography>
                </Stack>
            </Grid>
            <Grid item xs={6}>
                <Stack direction='row' spacing={2}>
                    <TwitterIcon />
                    {twitter_username != null
                        ? <Typography>{`@${twitter_username}`}</Typography>
                        : <Typography>Not available</Typography>
                    }
                </Stack>
            </Grid>
            <Grid item xs={6}>
                <Stack direction='row' spacing={2}>
                    <LanguageIcon />
                    {blog != null
                        ? <Link target='_blank' rel='noopener noreferrer' href={blog}><Typography>{blog}</Typography></Link>
                        : <Typography>Not available</Typography>
                    }
                </Stack>
            </Grid>
            <Grid item xs={6}>
                <Stack direction='row' spacing={2}>
                    <BusinessIcon />
                    {company != null
                        ? <Typography>{company}</Typography>
                        : <Typography>Not available</Typography>
                    }
                </Stack>
            </Grid>
        </Grid>
    );
};

export default LocationInformation;