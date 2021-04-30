import React from 'react';
import "../App.css";
import { makeStyles } from '@material-ui/core/styles';
import { Box, Button, Typography } from '@material-ui/core';

const Banner = () => {

    const useStyles = makeStyles((theme) => ({
        root: {
            '& > *': {
              margin: theme.spacing(1),
            }},
        hero: {
            backgroundImage: `linear-gradient(rgba(0,0,0,0.5),rgba(0,0,0,0.5)),
            url('/images/bruna-branco-0wn-DdavPa4-unsplash.jpg')`,
            height: "100vh",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            position: "relative",
            color:"#fff",
            fontSize:"40px",
            display:"flex",
            justifyContent:"center",
            alignItems:"center"
        }
    }))

    const classes = useStyles();

    return (

            <Box className={classes.hero}>
                <Box className="header">
                    Taste Delicious Indian Cuisine<br></br>
                </Box>             
            </Box>


    )
}

export default Banner;