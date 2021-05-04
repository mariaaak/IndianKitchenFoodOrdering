import React from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import InputAdornment from '@material-ui/core/InputAdornment';
import FormControl from '@material-ui/core/FormControl';
import TextField from '@material-ui/core/TextField';
import AccountCircle from '@material-ui/icons/AccountCircle';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import EmailRoundedIcon from '@material-ui/icons/EmailRounded';
import PhoneEnabledRoundedIcon from '@material-ui/icons/PhoneEnabledRounded';
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';
import ScheduleRoundedIcon from '@material-ui/icons/ScheduleRounded';
import FavoriteRoundedIcon from '@material-ui/icons/FavoriteRounded';

function Alert(props) {
    return <MuiAlert elevation={6} variant="filled" {...props} />;
}

const useStyles = makeStyles((theme) => ({

    title: {
        fontSize: "40px",
        marginTop: "20px",
        marginBottom: "20px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        color:"#fff"
    },
    heading: {
        fontSize: "35px",
        marginTop: "15px",
        marginBottom: "15px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        color:"#000"
    },
    content: {
        fontSize: "22px",
        marginTop: "10px",
        marginBottom: "10px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        color:"#000"
    },
    reserve: {
        backgroundColor: "grey"
    },
   
    card_title: {
        fontSize: 14,
    },
    pos: {
        marginBottom: 14,
    },
    marginstyle: {
        margin: "30px"
    },
    margin: {
        margin: theme.spacing(2),
    }
}));

const ReserveSeat = () => {
    const [fname, setFname] = React.useState("");
    const [lname, setLname] = React.useState("");
    const [email, setEmail] = React.useState("");
    const [phone, setPhone] = React.useState("");
    const [date, setDate] = React.useState("");
    const [time, setTime] = React.useState("");
    const [status, setStatus] = React.useState("not confirmed");
    const [openSuccess, setOpenSuccess] = React.useState(false);
    const [openFailure, setOpenFailure] = React.useState(false);

    async function handleClick() {
        
        let name=fname+" "+lname;
        let reserve={name,email,phone,date,time,status};

        let result = await fetch('http://localhost:8000/api/makeReservation',{
            method:"POST",
            body:JSON.stringify(reserve),
            headers:{
                "Content-Type": 'application/json',
                "Accept": 'application/json'

            }
        })
        if(result.status===200 || result.status===201)
        {
            setOpenSuccess(true);
        }
        else
        {
            setOpenFailure(false);
        }
    };

    const handleClose = (event, reason) => {
        

        setOpenSuccess(false);
        setOpenFailure(false);
    };


    const classes = useStyles();
    return (
        <div className={classes.reserve} id="reserve"> 
            <div className={clsx("header", classes.title)}>Reserve Your Seat</div>
            <Grid container>
                <Grid item md={1}>

                </Grid>
                <Grid item xs={12} sm={12} md={5}>
                <Card className={clsx(classes.marginstyle, classes.root)} variant="outlined">
                    <CardContent>
                        <div className={clsx("header", classes.heading)}>Your Safety our Priority!   <FavoriteRoundedIcon color="secondary" /> </div>
                        <div m={4} className={clsx("header", classes.content)}>Indoor seating capacity limited due to COVID.
                        Please reserve your seat before coming.<br></br>
                        For your safety, we have online delivery of all indian delicacies (south indian, north 
                        indian, eastern indian, western indian, sweets, chaat etc).
                        </div>
                    </CardContent>
                    <CardActions>
           
                    </CardActions>
                </Card>


                </Grid>
                <Grid item xs={12} sm={12} md={5}>
                    <div>
                        <form>
                            <Card className={clsx(classes.marginstyle, classes.root)} variant="outlined">
                                <CardContent>
                                    <div>

                                        <FormControl className={classes.margin}>
                                            <InputLabel htmlFor="fname">First Name</InputLabel>
                                            <Input
                                                id="fname"
                                                value={fname}
                                                onChange={e => setFname(e.target.value)}
                                                startAdornment={
                                                    <InputAdornment position="start">
                                                        <AccountCircle />
                                                    </InputAdornment>
                                                }
                                            />
                                        </FormControl>
                                        <FormControl className={classes.margin}>
                                            <InputLabel htmlFor="lname">Last Name</InputLabel>
                                            <Input
                                                id="lname"
                                                value={lname}
                                                onChange={e => setLname(e.target.value)}
                                                startAdornment={
                                                    <InputAdornment position="start">
                                                        <AccountCircle />
                                                    </InputAdornment>
                                                }
                                            />
                                        </FormControl>
                                        <FormControl className={classes.margin}>
                                            <InputLabel htmlFor="date_reserve">Date</InputLabel>
                                            <Input
                                                id="date_reserve"
                                                value={date}
                                                onChange={e => setDate(e.target.value)}
                                                startAdornment={
                                                    <InputAdornment position="start">
                                                            {null}        
                                                    </InputAdornment>}
                                                type="date"
                                            />
                                        </FormControl>
                                        <FormControl className={classes.margin}>
                                            <InputLabel htmlFor="time_reserve">Time</InputLabel>
                                            <Input
                                                id="time_reserve"
                                                value={time}
                                                onChange={e => setTime(e.target.value)}
                                                startAdornment={
                                                    <InputAdornment position="start">
                                                            <ScheduleRoundedIcon />
                                                    </InputAdornment>}
                                                type="text"
                                            />
                                        </FormControl>
                                        <FormControl className={classes.margin}>
                                            <InputLabel htmlFor="phone">Phone</InputLabel>
                                            <Input
                                                id="phone"
                                                value={phone}
                                                onChange={e => setPhone(e.target.value)}
                                                startAdornment={
                                                    <InputAdornment position="start">
                                                        <PhoneEnabledRoundedIcon />
                                                    </InputAdornment>
                                                }
                                            />
                                        </FormControl>
                                        <FormControl className={classes.margin}>
                                            <InputLabel htmlFor="email">Email</InputLabel>
                                            <Input
                                                id="email"
                                                value={email}
                                                onChange={e => setEmail(e.target.value)}
                                                startAdornment={
                                                    <InputAdornment position="start">
                                                        <EmailRoundedIcon />
                                                    </InputAdornment>
                                                }
                                            />
                                        </FormControl>

                                    </div>

                                </CardContent>
                                <CardActions>
                                    
                                    <Button fullWidth onClick={handleClick}  size="small" color="secondary" variant="contained">Reserve</Button>
                                  
                                    <Snackbar open={openSuccess} autoHideDuration={6000} onClose={handleClose}>
                                        <Alert onClose={handleClose} severity="success">
                                            Reservation Successful !
                                        </Alert>
                                    </Snackbar>
                                    <Snackbar open={openFailure} autoHideDuration={6000} onClose={handleClose}>
                                        <Alert onClose={handleClose} severity="error">
                                            Reservation Failed !
                                    </Alert>
                                    </Snackbar>
                                </CardActions>
                            </Card>
                        </form>
                    </div>

                </Grid>
                <Grid item md={1}>

                </Grid>

            </Grid>
        </div>
    )
}

export default ReserveSeat;