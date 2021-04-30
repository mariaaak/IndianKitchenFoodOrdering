import React, {useContext} from 'react';
import "../App.css";
import clsx from 'clsx';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import menu_items from '../data/menu_items.json';
import { Link, useParams } from "react-router-dom";
import CardActionArea from '@material-ui/core/CardActionArea';
import CardMedia from '@material-ui/core/CardMedia';
import Chip from '@material-ui/core/Chip';
import Box from '@material-ui/core/Box';
import CreditCardIcon from '@material-ui/icons/CreditCard';
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
import { Context } from '../contexts/contextAPI';


const Menu = () => {

    const {cart, addItems}=useContext(Context);


    const useStyles = makeStyles({
        root: {
            maxWidth: 245,
            marginTop: "20px",
            marginLeft: "20px",
            marginRight: "20px"
        },
        media: {
            height: 180,
        },
        title_card: {
            fontSize: 14,
        },
        card: {
            display: "flex",
            justifyContent: "center",
            alignItems: "center"
        },
        title: {
            fontSize: "40px",
            marginTop: "70px",
            marginBottom: "20px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center"
        }
    });
    const classes = useStyles();

    let { type } = useParams();

    return (
        <div>
            <div style={{ textTransform: 'capitalize' }} className={clsx("header", classes.title)}>{type} Delicacies</div>
            <Divider />
            <Grid container spacing={0}>
            
                {menu_items.menu.map((item) => {
                    return (
                        item.type === type ?

                            <Grid item xs={12} sm={6} md={2}>
                                <Card className={classes.root}>
                                    <CardActionArea>
                                        <CardMedia
                                            className={classes.media}
                                            image="/images/north_indian.jpeg"
                                            title="Contemplative Reptile"
                                        />
                                        <CardContent>
                                            <Typography align="center" gutterBottom variant="h6" component="h2">
                                                {item.item}
                                            </Typography>

                                        </CardContent>
                                    </CardActionArea>
                                    <Box p={2} display="flex" justifyContent="center">
                                        <CardActions>

                                            <Chip
                                                variant="outlined"
                                                icon={<CreditCardIcon />}
                                                label={'CAD - ' + item.price}
                                                
                                                color="secondary"
                                            />

                                            <Chip
                                                icon={<AddShoppingCartIcon />}
                                                label="ADD"
                                                clickable
                                                color="secondary" 
                                                onClick={()=>{addItems(item.item,item.price);}}
                                            />

                                        </CardActions>
                                    </Box>
                                </Card>
                            </Grid>


                            :

                            null
                    )
                })}

                { menu_items.menu.map((all_items) => {
                                return (
                                type === "all" ?
                                    <Grid item md={2}>
                                        <Card className={classes.root}>
                                            <CardActionArea>
                                                <CardMedia
                                                    className={classes.media}
                                                    image="/images/south_indian.jpg"
                                                    title="Contemplative Reptile"
                                                />
                                                <CardContent>
                                                    <Typography align="center" gutterBottom variant="h6" component="h2">
                                                        {all_items.item}
                                                    </Typography>

                                                </CardContent>
                                            </CardActionArea>
                                            <Box p={2} display="flex" justifyContent="center">
                                                <CardActions>
                                               
                                                    <Chip
                                                        variant="outlined"
                                                        icon={<CreditCardIcon />}
                                                        label={'CAD - ' + all_items.price}
                                                        color="secondary"
                                                    />

                                                    <Chip
                                                       
                                                        icon={<AddShoppingCartIcon />}
                                                        label="ADD"
                                                        clickable
                                                        color="secondary"
                                                    />
                                                </CardActions>
                                            </Box>
                                        </Card>
                                    </Grid>
                                :
                                null
                                )

                            })}
            </Grid>

        </div>
    )
}

export default Menu;