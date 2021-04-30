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

const UsersView = () => {

    const [users, setUsers] = useState([]);

    async function view() {


        let result = await fetch("http://localhost:8000/api/viewUser", {
            method: 'GET',
            headers: {
                "Content-Type": 'application/json',
                "Accept": 'application/json'

            }

        })

        result = await result.json();


        await setUsers([...result]);


    }

    async function deletePayment(user) {

        let result = await fetch("http://localhost:8000/api/deleteUser", {
            method: 'POST',
            body: JSON.stringify(user),
            headers: {
                "Content-Type": 'application/json',
                "Accept": 'application/json'

            }

        })
        result = await result.json();
        setUsers([...result]);


    }

    useEffect(() => {

        view();

    }, [])

    const handleClick = (payment) => {
        deletePayment(payment);
    }

    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Typography component="h1" variant="h5">
                <div style={{ textTransform: 'capitalize' }} className={clsx("header", classes.title)}>Customers</div>
            </Typography>
            <Grid container spacing={3}>
                <Grid item md={2} />
                <Grid item xs={12} md={8}>

                    <Paper variant="outlined" >
                        <TableContainer component={Paper}>
                            <Table className={classes.table} aria-label="simple table">
                                <TableHead>
                                    <TableRow>
                                        <TableCell>ID</TableCell>
                                        <TableCell align="center">Name</TableCell>
                                        <TableCell align="center">Email</TableCell>
                                        <TableCell align="center">Phone</TableCell>
                                        <TableCell align="center">Location</TableCell>
                                        <TableCell align="right">Delete</TableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    {
                                        users.map((user) => (
                                            <TableRow>
                                                <TableCell align="left">{user.userId}</TableCell>
                                                <TableCell align="center">{user.name}</TableCell>
                                                <TableCell align="center">{user.email}</TableCell>
                                                <TableCell align="center">{user.phone}</TableCell>
                                                <TableCell align="center">{user.location}</TableCell>
                                                <TableCell align="right"><Button variant="outlined" onClick={() => handleClick(user)} color="secondary">DELETE</Button></TableCell>
                                            </TableRow>
                                        ))
                                    }

                                </TableBody>
                            </Table>
                        </TableContainer>
                    </Paper>

                </Grid>
            </Grid>
            <Grid item md={2} />
        </div>
    )
}

export default UsersView;