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

import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import { useHistory } from 'react-router-dom';


const useStyles = makeStyles((theme) => ({
    margin:{
        marginTop:theme.spacing(2)
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

const ItemAdd = () => {
    const classes = useStyles();

    const [name, setName] = useState("");
    const [type, setType] = useState("south");
    const [price, setPrice] = useState("");
    const [avail, setAvail] = useState(true);
    const [img, setImg] = useState("");
    const history = useHistory();

    const handleChange = (event) => {
        console.log(type)
        setType(event.target.value);
    };

    const handleChangeAvail = (event) => {
        
        setAvail(event.target.value);
    };

    
    async function add() {

        let item = {name,type,price,avail,img}


        let result = await fetch("http://localhost:8000/api/addItem", {
            method: 'POST',
            body: JSON.stringify(item),
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
                    <AddShoppingCartIcon />
                </Avatar>

                <Typography component="h1" variant="h5">
                    <div style={{ textTransform: 'capitalize' }} className={clsx("header", classes.title)}>Add Item</div>
                </Typography>
                <div>
                    <TextField
                        variant="outlined"
                        margin="normal"
                        required
                        fullWidth
                        id="name"
                        label="Item Name"
                        name="name"
                        autoComplete="name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        autoFocus
                    />


                    <Box display="flex">
                        <FormControl variant="outlined" className={classes.formControl}>
                            <InputLabel>Availibility</InputLabel>
                            <Select
                                labelId="demo-simple-select-outlined-label"
                                id="demo-simple-select-outlined"
                                value={avail}
                                onChange={handleChangeAvail}
                                label="Availibilty"
                            >

                                <MenuItem value={true}>Available</MenuItem>
                                <MenuItem value={false}>Not Available</MenuItem>
                            </Select>
                        </FormControl>

                        <FormControl variant="outlined" className={classes.formControl}>
                            <InputLabel>Type</InputLabel>
                            <Select
                                labelId="demo-simple-select-outlined-label"
                                id="demo-simple-select-outlined"
                                value={type}
                                onChange={handleChange}
                                label="Type"
                            >

                                <MenuItem value={"south"}>South</MenuItem>
                                <MenuItem value={"north"}>North</MenuItem>
                                <MenuItem value={"eastern"}>Eastern</MenuItem>
                            </Select>
                        </FormControl>
                    </Box>

                    
                        <TextField m={2}
                            variant="outlined"
                            margin="normal"
                            required
                            fullWidth
                            name="price"
                            label="Price"
                            type="text"
                            id="price"
                            value={price}
                            onChange={(e) => setPrice(e.target.value)}
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
                        Add Item
                    </Button>

                </div>
            </div>
            <Box mb={20}>

            </Box>
        </Container>
    );
}

export default ItemAdd;