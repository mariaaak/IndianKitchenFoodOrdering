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
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';
import ThumbUpIcon from '@material-ui/icons/ThumbUp';
import IconButton from '@material-ui/core/IconButton';
import { DragHandle } from '@material-ui/icons';
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

const ReservationConfirmation = () => {

    const [reservation, setReservation] = useState([]);

    async function handleConfirmation(status,user) {

        let update={user,status};

        console.log(update)

        let result = await fetch("http://localhost:8000/api/statusReservation", {
            method: 'POST',
            body:JSON.stringify(update),
            headers: {
                "Content-Type": 'application/json',
                "Accept": 'application/json'
            }

        })

        console.log(result)


    } 

    async function view() {
       

        let result = await fetch("http://localhost:8000/api/viewReservation", {
            method: 'GET',
            headers: {
                "Content-Type": 'application/json',
                "Accept": 'application/json'

            }

        })

        result = await result.json();


        await setReservation([...result]);


    }

    
    useEffect(() => {

        view();

    }, [])

  

    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Typography component="h1" variant="h5">
                <div style={{ textTransform: 'capitalize' }} className={clsx("header", classes.title)}>Reservation Confirmation</div>
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
                                        <TableCell>Name</TableCell>
                                        <TableCell align="center">Date</TableCell>
                                        <TableCell align="center">Time</TableCell>
                                        <TableCell align="center">Phone</TableCell>
                                        <TableCell align="center">Email</TableCell>
                                        <TableCell align="right">Confirm</TableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                {
                                        reservation.map((user) => (
                                           user.status==="not confirmed"? (
                                                <TableRow>
                                                <TableCell align="left">{user.name}</TableCell>
                                                <TableCell align="center">{user.date}</TableCell>
                                                <TableCell align="center">{user.time}</TableCell>
                                                <TableCell align="center">{user.phone}</TableCell>
                                                <TableCell align="center">{user.email}</TableCell>
                                                <TableCell align="right">
                                                    <IconButton color="primary" onClick={()=>{handleConfirmation("accepted",user.reservationId)}}><ThumbUpIcon /></IconButton>
                                                    <IconButton color="secondary" onClick={()=>{handleConfirmation("rejected",user.reservationId)}}><DeleteForeverIcon /></IconButton>
                                                </TableCell>
                                                </TableRow>
                                           ):
                                           <div></div>
                                        ))
                                    }

                                   

                                </TableBody>
                            </Table>
                        </TableContainer>
                    </Paper>

                </Grid>
                <Grid item md={2} />

            </Grid>

            <Typography component="h1" variant="h5">
                <div style={{ textTransform: 'capitalize' }} className={clsx("header", classes.title)}>Confirmed Reservations</div>
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
                                        <TableCell>Name</TableCell>
                                        <TableCell align="center">Date</TableCell>
                                        <TableCell align="center">Time</TableCell>
                                        <TableCell align="center">Phone</TableCell>
                                        <TableCell align="center">Email</TableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    {
                                        reservation.map((user) => (
                                           user.status==="accepted"? (
                                                <TableRow>
                                                <TableCell align="left">{user.name}</TableCell>
                                                <TableCell align="center">{user.date}</TableCell>
                                                <TableCell align="center">{user.time}</TableCell>
                                                <TableCell align="center">{user.phone}</TableCell>
                                                <TableCell align="center">{user.email}</TableCell>
                                                </TableRow>
                                           ):
                                           <div></div>
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

export default ReservationConfirmation;