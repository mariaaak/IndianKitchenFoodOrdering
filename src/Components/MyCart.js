import React, { useContext, useEffect,useState } from 'react';
import "../App.css";
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import { Context } from '../contexts/contextAPI';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Button from '@material-ui/core/Button';
import Box from '@material-ui/core/Box';
import DeleteIcon from '@material-ui/icons/Delete';
import IconButton from '@material-ui/core/IconButton';
import AddIcon from '@material-ui/icons/Add';
import RemoveIcon from '@material-ui/icons/Remove';
import LocalAtmIcon from '@material-ui/icons/LocalAtm';
import CreditCardIcon from '@material-ui/icons/CreditCard';
import Tooltip from '@material-ui/core/Tooltip';
import TextField from '@material-ui/core/TextField';
import FormControl from '@material-ui/core/FormControl';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';

const useStyles = makeStyles((theme) => ({

    root: {
        marginBottom: `calc(20% + 60px)`
    },
    final: {
        fontWeight: "bold"
    },
    title: {
        fontSize: "25px",
        marginTop: "40px",
        marginBottom: "20px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
    }
}));



const MyCart = () => {

    const { cart,add,deleteItem, addQty, reduceQty, clearAllCart } = useContext(Context);
 
    const cart_local = localStorage.getItem('cart')?JSON.parse(localStorage.getItem('cart')):[];
    
    const [modeCard,setCardMode]=useState(true);
    
   useEffect(()=>{
        add(cart_local);
        localStorage.setItem('cart', JSON.stringify(cart));
   },[])
   useEffect(()=>{
        console.log(modeCard)
    },[modeCard])
    //add(cart_local);

    const handleClick = (item) => {

        deleteItem(item);
        localStorage.setItem('cart', JSON.stringify(cart));
    }

    const handleAddQty = (item) => {
        console.log(cart)
        addQty(item);
        localStorage.setItem('cart', JSON.stringify(cart));

    }

    const handleReduceQty = (item) => {

        reduceQty(item);
        localStorage.setItem('cart', JSON.stringify(cart));

    }

    const clearCart = () => {
        clearAllCart();
        localStorage.removeItem('cart');
    }


    const classes = useStyles();

    let total_price = 0



    return (
        <div className={classes.root}>
           <Typography component="h1" variant="h5">
                    <div style={{ textTransform: 'capitalize' }} className={clsx("header", classes.title)}>My Cart</div>
                </Typography>
            <Grid container spacing={3}>
                <Grid item md={1}>

                </Grid>
                <Grid item xs={12} md={7}>

                    <Paper variant="outlined" >
                        <TableContainer component={Paper}>
                            <Table className={classes.table} aria-label="simple table">
                                <TableHead>
                                    <TableRow>
                                        <TableCell>Item</TableCell>
                                        <TableCell align="center">Qty</TableCell>
                                        <TableCell align="center">Price</TableCell>
                                        <TableCell align="right">Delete</TableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                  
                                    {  
                                       
                                        cart_local ? 
                                       
                                        cart_local.map(item => (
                                            <TableRow key={item.item_name}>
                                                <TableCell component="th" scope="row">
                                                    {item.item_name}
                                                </TableCell>
                                                <TableCell align="center">


                                                    <IconButton variant="outlined" color="primary" aria-label="add">
                                                        <AddIcon onClick={() => { handleAddQty(item) }} />
                                                    </IconButton>

                                                    {item.qty}


                                                    <IconButton ml={7} variant="outlined" color="primary" aria-label="edit">
                                                        <RemoveIcon onClick={() => { handleReduceQty(item) }} />
                                                    </IconButton>

                                                </TableCell>
                                                <TableCell align="center">
                                                    {item.qty * item.item_price}

                                                </TableCell>
                                                <TableCell align="right">
                                                    <IconButton aria-label="delete" color="secondary">
                                                        <DeleteIcon onClick={() => { handleClick(item) }} />
                                                    </IconButton>
                                                </TableCell>

                                            </TableRow>
                                        ))
                                     :
                                     null
                                    }
                                    <TableRow rowspan={3}>
                                        <TableCell colSpan={4} align="center" >

                                            <Button onClick={() => clearCart()} variant="outlined" color="secondary">Clear Cart</Button>

                                        </TableCell>

                                    </TableRow>
                                </TableBody>
                            </Table>
                        </TableContainer>
                    </Paper>

                </Grid>
                <Grid item xs={12} md={3}>

                    {cart.map((item) => {

                        total_price = (total_price + (item.item_price * item.qty))
                    })}
                    <div>
                        <Paper variant="outlined" >
                            <TableContainer component={Paper}>
                                <Table className={classes.table} aria-label="simple table">

                                    <TableBody>

                                        <TableRow>
                                            <TableCell align="left">CAD</TableCell>
                                            <TableCell align="right">{total_price}</TableCell>
                                        </TableRow>
                                        <TableRow>
                                            <TableCell align="left">Tax</TableCell>
                                            <TableCell align="right">5%</TableCell>
                                        </TableRow>
                                        <TableRow>
                                            <TableCell align="left">Discount</TableCell>
                                            <TableCell align="right">0%</TableCell>
                                        </TableRow>
                                        <TableRow>
                                            <TableCell align="left">Total</TableCell>
                                            <TableCell align="right" style={{ fontWeight: "bold" }}>CAD {total_price + (total_price) * 0.05}</TableCell>
                                        </TableRow>
                                        <TableRow>
                                            <TableCell >
                                                Accepeted Payment Methods (Select)
                                            </TableCell>
                                            <TableCell align="right">
                                                <Tooltip title="Cash On Delivery" placement="top">
                                                    <IconButton color={modeCard?"primary":""} onClick={()=>{setCardMode(!modeCard)}}><LocalAtmIcon /></IconButton>
                                                </Tooltip>
                                                <Tooltip title="Debit/Credit" placement="top">
                                                    <IconButton color={modeCard?"":"primary"}  onClick={()=>{setCardMode(!modeCard)}}><CreditCardIcon /></IconButton>
                                                </Tooltip>
                                                
                                            </TableCell>
                                        </TableRow>
                                        <TableRow>
                                            <TableCell colSpan={2}>
                                                <Box display="flex" justifyContent="flex-end" >
                                                    <Button variant="contained" color="secondary">Checkout</Button>
                                                </Box>

                                            </TableCell>
                                        </TableRow>



                                    </TableBody>
                                </Table>
                            </TableContainer>
                        </Paper>

                    </div>




                </Grid>
                <Grid item md={1}>

                </Grid>

            </Grid>
        </div>

    )
}

export default MyCart;
