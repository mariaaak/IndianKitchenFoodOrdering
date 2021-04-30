import React, { useState, useEffect } from 'react';
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
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import FastfoodIcon from '@material-ui/icons/Fastfood';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import { useHistory } from 'react-router-dom';


const useStyles = makeStyles((theme) => ({
    margin: {
        marginTop: theme.spacing(2)
    },
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
    formControl: {
        margin: theme.spacing(1),
        minWidth: 200,
    },
    selectEmpty: {
        marginTop: theme.spacing(2),
    },
    input: {
        display: 'none',
    },
}));

const ExploreAdd = () => {
    const classes = useStyles();

    const [type, setType] = useState("");
    const [description, setDescription] = useState("");
    const [img, setImg] = useState("");
    const history = useHistory();


    async function add() {

        let cuisine = { type, description, img }
        
        console.log(cuisine)

        let result = await fetch("http://localhost:8000/api/addCuisine", {
            method: 'POST',
            body: JSON.stringify(cuisine),
            headers: {
                "Content-Type": 'application/json',
                "Accept": 'application/json'

            }
        })

        result = await result.json();
        console.log(result)
    }

    return (
        <Container component="main" maxWidth="xs">

            <div className={classes.paper}>

                <Avatar className={classes.avatar}>
                    <FastfoodIcon />
                </Avatar>

                <Typography component="h1" variant="h5">
                    <div style={{ textTransform: 'capitalize' }} className={clsx("header", classes.title)}>Add Cuisines</div>
                </Typography>
                <div>
                    <TextField
                        variant="outlined"
                        margin="normal"
                        required
                        fullWidth
                        id="type"
                        label="Type"
                        name="text"
                        autoComplete="type"
                        value={type}
                        onChange={(e) => setType(e.target.value)}
                        autoFocus
                    />



                    <TextField m={2}
                        variant="outlined"
                        margin="normal"
                        required
                        fullWidth
                        name="description"
                        label="Description"
                        type="text"
                        id="description"
                        multiline
                        rows={3}
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                    />
                    <Box display="flex" justifyContent="flex-end">

                        <input
                            accept="image/*"
                            className={classes.input}
                            id="contained-button-file"
                            multiple
                            type="file"
                        />
                        <label htmlFor="contained-button-file">
                            <Button variant="outlined" color="secondary" component="span">
                                Upload
                            </Button>
                        </label>
                    </Box>




                    <Button
                        onClick={add}
                        type="submit"
                        fullWidth
                        variant="contained"
                        color="secondary"
                        className={classes.submit}
                    >
                        Add Cuisine
                    </Button>

                </div>
            </div>
            <Box mb={20}>

            </Box>
        </Container>
    );
}

export default ExploreAdd;