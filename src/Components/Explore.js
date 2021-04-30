import React, { useEffect, useState } from 'react';
import '../App.css';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import { Redirect, useHistory } from 'react-router-dom';
import { Link } from "react-router-dom";


const useStyles = makeStyles({
    root: {
        maxWidth: 345,
        marginBottom: "20px",
        marginTop: "20px"
    },
    media: {
        height: 230,
    },
    title: {
        fontSize: "40px",
        marginTop: "20px",
        marginBottom: "20px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
    },
    alignment: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
    }
});


const Explore = () => {
    const classes = useStyles();
    const history = useHistory();
    const handleClick = (t) => {
        history.push(t)
    }


    return (
        <div>
            <div className={clsx("header", classes.title)}>Explore Indian Delicacies</div>

            <Grid container>
                <Grid item xs={0} sm={0} md={2}>

                </Grid>
                <Grid item xs={12} sm={6} md={3}>
                    <Card className={classes.root}>
                        <CardActionArea>
                            <CardMedia
                                className={classes.media}
                                image="/images/south_indian.jpg"
                                title="Contemplative Reptile"
                            />
                            <CardContent>
                                <Typography align="center" gutterBottom variant="h6" component="h2">
                                    South Indian Cuisine
                                </Typography>
                                <Typography align="justify" variant="body2" color="textSecondary" component="p">
                                    Different types of Dosas, Idlis, Vadas, Malabar Poratta, Kerala beef, Chicken Kanthari, Hyderabadi biriyani etc
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                        <CardActions>
                            <Button onClick={() => { handleClick("/menu/south") }} fullWidth size="small" color="secondary">
                                Explore
                            </Button>
                        </CardActions>
                    </Card>


                </Grid>
                <Grid item xs={12} sm={6} md={3}>
                    <Card className={classes.root}>
                        <CardActionArea>
                            <CardMedia
                                className={classes.media}
                                image="/images/north_indian.jpeg"
                                title="Contemplative Reptile"
                            />
                            <CardContent>
                                <Typography align="center" gutterBottom variant="h6" component="h2">
                                    North Indian Cuisine
                                </Typography>
                                <Typography align="justify" variant="body2" color="textSecondary" component="p">
                                    Varieties of Naan, Butter Paneer, Shahi Panner, Rajma Dal, Chole Batura, Gobi Manchurian, Dal Makhani, Chicken Platter
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                        <CardActions>

                            <Button onClick={() => { handleClick("/menu/north") }} fullWidth size="small" color="secondary">
                                Explore
                            </Button>

                        </CardActions>
                    </Card>


                </Grid>
                <Grid item xs={12} sm={6} md={3}>
                    <Card className={classes.root}>
                        <CardActionArea>
                            <CardMedia
                                className={classes.media}
                                image="/images/western_indian.jpg"
                                title="Contemplative Reptile"
                            />
                            <CardContent>
                                <Typography align="center" gutterBottom variant="h6" component="h2">
                                    Western Indian Cuisine
                                </Typography>
                                <Typography variant="body2" color="textSecondary" component="p">
                                    Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
                                    across all continents except Antarctica
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                        <CardActions>
                            <Button onClick={() => { handleClick("/menu/western") }} fullWidth size="small" color="secondary">
                                Explore
                            </Button>
                        </CardActions>
                    </Card>

                </Grid>
                <Grid item xs={0} md={1}>

                </Grid>


                <Grid item xs={0} md={2}>

                </Grid>
                <Grid item xs={12} sm={6} md={3}>
                    <Card className={classes.root}>
                        <CardActionArea>
                            <CardMedia
                                className={classes.media}
                                image="/images/eastern_indian.jpg"
                                title="Contemplative Reptile"
                            />
                            <CardContent>
                                <Typography align="center" gutterBottom variant="h6" component="h2">
                                    Eastern Indian Cuisine
                                </Typography>
                                <Typography variant="body2" color="textSecondary" component="p">
                                    Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
                                    across all continents except Antarctica
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                        <CardActions>
                            <Button onClick={() => { handleClick("/menu/eastern") }} fullWidth size="small" color="secondary">
                                Explore
                            </Button>
                        </CardActions>
                    </Card>


                </Grid>
                <Grid item xs={12} sm={6} md={3}>
                    <Card className={classes.root}>
                        <CardActionArea>
                            <CardMedia
                                className={classes.media}
                                image="/images/chaat_items.jpg"
                                title="Contemplative Reptile"
                            />
                            <CardContent>
                                <Typography align="center" gutterBottom variant="h6" component="h2">
                                    Chaat Corner
                                </Typography>
                                <Typography variant="body2" color="textSecondary" component="p">
                                    Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
                                    across all continents except Antarctica
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                        <CardActions>
                            <Button onClick={() => { handleClick("/menu/chaat") }} fullWidth size="small" color="secondary">
                                Explore
                            </Button>
                        </CardActions>
                    </Card>


                </Grid>
                <Grid item xs={12} sm={6} md={3}>
                    <Card className={classes.root}>
                        <CardActionArea>
                            <CardMedia
                                className={classes.media}
                                image="/images/indian_sweets.jpg"
                                title="Contemplative Reptile"
                            />
                            <CardContent>
                                <Typography align="center" gutterBottom variant="h6" component="h6">
                                    Sweets
                                </Typography>
                                <Typography variant="body2" color="textSecondary" component="p">
                                    Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
                                    across all continents except Antarctica
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                        <CardActions>
                            <Button onClick={() => { handleClick("/menu/sweets") }} fullWidth size="small" color="secondary">
                                Explore
                            </Button>
                        </CardActions>
                    </Card>

                </Grid>
                <Grid item m={5} xs={0} md={1}>

                </Grid>
            </Grid>

            <Grid container direction="row" justify="center" alignItems="center" >

                <Button onClick={() => { handleClick("/menu/all") }} size="large" variant="outlined" color="secondary">
                    Explore All Delicacies of India
                    </Button>

            </Grid>











        </div>


    );
}
export default Explore;