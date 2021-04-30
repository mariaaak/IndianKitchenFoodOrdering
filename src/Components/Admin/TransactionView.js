import React, { useEffect, useState } from 'react';
import Button from '@material-ui/core/Button';
import clsx from 'clsx';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import { makeStyles } from '@material-ui/core/styles';

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

const TransactionView = () => {

    const [transaction, setTransaction] = useState([]);

    async function view() {
       

        let result = await fetch("http://localhost:8000/api/viewPayment", {
            method: 'GET',
            headers: {
                "Content-Type": 'application/json',
                "Accept": 'application/json'

            }

        })

        result = await result.json();


        await setTransaction([...result]);


    }

    
    useEffect(() => {

        view();

    }, [])

  

    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Typography component="h1" variant="h5">
                <div style={{ textTransform: 'capitalize' }} className={clsx("header", classes.title)}>Transactions</div>
            </Typography>
            <Grid container spacing={3}>
                <Grid item md={2}>


                </Grid>
                <Grid item xs={12} md={8}>

                    <Paper variant="outlined" >
                        <TableContainer component={Paper}>
                            <Table className={classes.table} aria-label="simple table">
                                <TableHead>
                                    <TableRow>
                                        <TableCell>ID</TableCell>
                                        <TableCell align="center">userID</TableCell>
                                        <TableCell align="center">Mode</TableCell>
                                        <TableCell align="center">Date</TableCell>
                                        <TableCell align="right">Delivery Location</TableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    {
                                        transaction.map((payment) => (
                                            <TableRow>
                                                <TableCell align="left">{payment.paymentId}</TableCell>
                                                <TableCell align="center">{payment.userId}</TableCell>
                                                <TableCell align="center">{payment.mode}</TableCell>
                                                <TableCell align="center">{payment.date}</TableCell>
                                                <TableCell align="right">{payment.deliveryLocation}</TableCell>
                                                
                                            </TableRow>
                                        ))
                                    }

                                </TableBody>
                            </Table>
                        </TableContainer>
                    </Paper>

                </Grid>
                <Grid item md={2} />

            </Grid>
        </div>
    )
}

export default TransactionView;