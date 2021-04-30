import React from 'react';
import { Grid, makeStyles, Typography } from '@material-ui/core';
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import YouTubeIcon from '@material-ui/icons/YouTube';
import InstagramIcon from '@material-ui/icons/Instagram';
import LinkedInIcon from '@material-ui/icons/LinkedIn';

const Footer = () => {

    const useStyles = makeStyles({
        root: {
            flexGrow: 1,
            backgroundColor: "#110011",
            color: "white",
            paddingTop:"20px",
        }
    })

    const classes = useStyles();
    return (
        <div className={classes.root}>
            <Grid container>
                <Grid item md={2}>

                </Grid>
                <Grid item xs={12} md={3}>
                    <Typography align="left" variant="h6" component="h2">Phone Support</Typography>
                    <p>24 HOUR SUPPORT</p>
                    <p>Contact Us - +19029896677</p>
                </Grid>
                <Grid item xs={12} md={3}>
                    <Typography variant="h6" component="h6">Follow Us</Typography>
                    <Grid container spacing={2}>
                        
                        <Grid item >
                            <FacebookIcon fontSize="large" />
                        </Grid>
                        <Grid item >
                            <TwitterIcon fontSize="large" />
                        </Grid>
                        <Grid item >
                            <YouTubeIcon fontSize="large" />
                        </Grid>
                        <Grid item >
                            <InstagramIcon fontSize="large" />
                        </Grid>
                        <Grid item >
                            <LinkedInIcon fontSize="large" />
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item xs={12} md={3}>
                    <Typography variant="h6"  component="h6" align="left">Location</Typography>
                    <p>Location will be updated soon!!</p>
                </Grid>
                <Grid item md={1}>

                </Grid>
            </Grid>
        </div>
    )
}

export default Footer;