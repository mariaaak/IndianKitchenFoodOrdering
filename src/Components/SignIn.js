import React, {useState,useEffect} from 'react';
import "../App.css";
import clsx from 'clsx';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import {useHistory} from 'react-router-dom';



const useStyles = makeStyles((theme) => ({
    paper: {
        marginTop: theme.spacing(8),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    avatar: {
        margin: theme.spacing(1),
        backgroundColor: theme.palette.secondary.main,
    },
    form: {
        width: '100%', // Fix IE 11 issue.
        marginTop: theme.spacing(1),
    },
    submit: {
        margin: theme.spacing(3, 0, 2),
    },
}));

export default function SignIn() {
    const classes = useStyles();
    const history=useHistory();
    const [email,setEmail]=useState("");
    const [password,setPassword]=useState("");
    const [admin,setAdmin]=useState(false);

    useEffect(()=>{
        if(localStorage.getItem('user-info'))
        {
            history.push("/")
        }
    })

    let user={email,password};

    async function login(){

        let result= await fetch("http://localhost:8000/api/signInUser",{
            method:'POST',
            body:JSON.stringify(user),
            headers:{
                "Content-Type":'application/json',
                "Accept":'application/json'

            }
        })

        result=await result.json();
        
        if(!result.admin)
        {
            localStorage.setItem('user-info',JSON.stringify(result))
            history.push("/");
        }
        else if(result.admin)
        {
            localStorage.setItem('admin-info',JSON.stringify(result))
            history.push("/admin")
        }
        else
        {
            //Incorrect email or password
        }
    }

    return (
        <Container component="main" maxWidth="xs">

            <div className={classes.paper}>

                <Avatar className={classes.avatar}>
                    <LockOutlinedIcon />
                </Avatar>

                <Typography component="h1" variant="h5">
                    <div style={{ textTransform: 'capitalize' }} className={clsx("header", classes.title)}>Log In </div>

                </Typography>
                <div>
                    <TextField
                        variant="outlined"
                        margin="normal"
                        required
                        fullWidth
                        id="email"
                        label="Email Address"
                        name="email"
                        autoComplete="email"
                        value={email}
                        onChange={(e)=>setEmail(e.target.value)}
                        autoFocus
                    />
                    <TextField
                        variant="outlined"
                        margin="normal"
                        required
                        fullWidth
                        name="password"
                        label="Password"
                        type="password"
                        id="password"
                        value={password}
                        onChange={(e)=>setPassword(e.target.value)}
                        autoComplete="current-password"
                    />
                    <FormControlLabel
                        control={<Checkbox value="remember" color="primary" />}
                        label="Remember me"
                    />
                    <Button
                        onClick={login}
                        type="submit"
                        fullWidth
                        variant="contained"
                        color="secondary"
                        className={classes.submit}
                    >
                        Sign In
                    </Button>
                    <Grid container>
                        <Grid item xs>
                            <Link href="#" variant="body2">
                                Forgot password?
                            </Link>
                        </Grid>
                        <Grid item>
                            <Link href="/signup" variant="body2">
                                {"Don't have an account?"}
                            </Link>
                        </Grid>
                    </Grid>
                </div>
            </div>
            <Box mb={20}>

            </Box>
        </Container>
    );
}
